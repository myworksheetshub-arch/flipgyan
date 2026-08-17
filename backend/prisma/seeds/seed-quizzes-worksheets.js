const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function runSeed() {
  console.log('🚀 Connecting to Supabase to seed Quizzes and Worksheets...');
  
  // Set statement timeout to 0 for large session
  try {
    await prisma.$executeRawUnsafe('SET statement_timeout = 0');
    await prisma.$executeRawUnsafe('SET lock_timeout = 0');
  } catch (e) {}

  const subjects = await prisma.subject.findMany({
    include: {
      classGrade: true,
      chapters: {
        include: {
          questions: {
            include: { options: true }
          }
        }
      }
    }
  });

  console.log(`Found ${subjects.length} subjects.`);

  // 1. Seed Quizzes
  console.log('🎯 Seeding Quizzes...');
  let quizCount = 0;
  for (const subject of subjects) {
    for (const chapter of subject.chapters) {
      if (!chapter.questions || chapter.questions.length === 0) continue;

      const existingQuiz = await prisma.quiz.findFirst({
        where: { chapterId: chapter.id }
      });

      if (!existingQuiz) {
        const selectedQs = chapter.questions.slice(0, 5);
        await prisma.quiz.create({
          data: {
            subjectId: subject.id,
            chapterId: chapter.id,
            title: `${chapter.title} — Chapter Quiz`,
            description: `Timed assessment and conceptual check for ${chapter.title} (${subject.name})`,
            durationMinutes: 15,
            totalMarks: selectedQs.length * 2,
            passMarks: Math.ceil(selectedQs.length * 2 * 0.6),
            isPublished: true,
            questions: {
              create: selectedQs.map((q, idx) => ({
                questionId: q.id,
                sequence: idx + 1
              }))
            }
          }
        });
        quizCount++;
      }
    }
  }
  console.log(`✅ Seeded ${quizCount} new Quizzes.`);

  // 2. Seed Worksheets
  console.log('📝 Seeding Worksheets (Practice, Competency, HOTS)...');
  let worksheetCount = 0;

  for (const subject of subjects) {
    const className = subject.classGrade.name;
    const subjectName = subject.name;

    for (const chapter of subject.chapters) {
      const chapterQs = chapter.questions;
      if (!chapterQs || chapterQs.length === 0) continue;

      const chapterTitle = chapter.title;

      // Check if worksheets exist for this chapter
      const existingCount = await prisma.worksheet.count({
        where: { chapterId: chapter.id }
      });

      if (existingCount > 0) continue;

      const easyQs = chapterQs.filter((q) => q.difficulty === 'EASY');
      const mediumQs = chapterQs.filter((q) => q.difficulty === 'MEDIUM');
      const hardQs = chapterQs.filter((q) => q.difficulty === 'HARD');
      const mcqOnlyQs = chapterQs.filter((q) => q.questionType === 'MCQ' || q.type === 'MCQ');

      // A. MCQ Practice Worksheet
      if (mcqOnlyQs.length > 0) {
        const selectedMcqs = mcqOnlyQs.slice(0, 8);
        const totalMarks = selectedMcqs.reduce((sum, q) => sum + (q.marks || 1), 0);

        let mcqAnswerKey = `# Pure MCQ Practice Answer Key & Solutions\n\n**Worksheet**: MCQ Practice — ${className} ${subjectName}: ${chapterTitle}\n\n`;
        selectedMcqs.forEach((q, idx) => {
          const correctOpt = q.options.find(opt => opt.isCorrect) || q.options[0];
          mcqAnswerKey += `### Q${idx + 1}. ${q.questionText}\n- **Correct Answer**: ${correctOpt?.optionText || correctOpt?.text || 'Option A'}\n- **Explanation**: ${q.explanation || 'Verified solution'}\n\n`;
        });

        await prisma.worksheet.create({
          data: {
            subjectId: subject.id,
            chapterId: chapter.id,
            title: `MCQ Practice Worksheet: ${chapterTitle}`,
            description: `Multiple Choice Question practice set for ${className} ${subjectName}.`,
            instructions: `1. All questions are Multiple Choice Questions.\n2. Choose the correct option.\n3. Detailed explanations available after submission.`,
            type: 'PRACTICE',
            difficulty: 'MEDIUM',
            durationMinutes: 30,
            totalMarks: totalMarks,
            totalQuestions: selectedMcqs.length,
            isPublished: true,
            answerKey: mcqAnswerKey,
            questions: {
              create: selectedMcqs.map((q, idx) => ({
                questionId: q.id,
                sequence: idx + 1,
                marks: q.marks || 1
              }))
            }
          }
        });
        worksheetCount++;
      }

      // B. Competency-Based Worksheet
      const compQs = [...easyQs.slice(0, 2), ...mediumQs.slice(0, 3), ...hardQs.slice(0, 2)];
      if (compQs.length < 5) {
        const unused = chapterQs.filter(q => !compQs.includes(q));
        compQs.push(...unused.slice(0, 6 - compQs.length));
      }

      if (compQs.length > 0) {
        const compMarks = compQs.reduce((sum, q) => sum + (q.marks || 1), 0);
        let compAnswerKey = `# Competency Assessment Answer Key & Rubric\n\n**Worksheet**: Competency Worksheet — ${className} ${subjectName}: ${chapterTitle}\n\n`;
        compQs.forEach((q, idx) => {
          const correctOpt = q.options.find(opt => opt.isCorrect) || q.options[0];
          compAnswerKey += `### Q${idx + 1}. [${q.questionType}] ${q.questionText}\n- **Answer**: ${correctOpt ? (correctOpt.optionText || correctOpt.text) : 'Subjective'}\n- **Rubric**: ${q.explanation || 'Step-by-step verified rubric'}\n\n`;
        });

        await prisma.worksheet.create({
          data: {
            subjectId: subject.id,
            chapterId: chapter.id,
            title: `Competency-Based Worksheet: ${chapterTitle}`,
            description: `NEP 2020 & PARAKH aligned assessment evaluating real-world applications and critical thinking for ${className} ${subjectName}.`,
            instructions: `1. This worksheet tests conceptual understanding and real-world application.\n2. Write structured, neat solutions.`,
            type: 'COMPETENCY',
            difficulty: 'MEDIUM',
            durationMinutes: 45,
            totalMarks: compMarks,
            totalQuestions: compQs.length,
            isPublished: true,
            answerKey: compAnswerKey,
            questions: {
              create: compQs.map((q, idx) => ({
                questionId: q.id,
                sequence: idx + 1,
                marks: q.marks || 1
              }))
            }
          }
        });
        worksheetCount++;
      }

      // C. HOTS Challenge Worksheet
      if (hardQs.length >= 1 || mediumQs.length >= 2) {
        const hotsQs = [...mediumQs.slice(0, 2), ...hardQs.slice(0, 3)];
        const hotsMarks = hotsQs.reduce((sum, q) => sum + (q.marks || 1), 0);

        let hotsAnswerKey = `# HOTS Challenge Answer Key & Rubric\n\n**Worksheet**: HOTS Challenge — ${className} ${subjectName}: ${chapterTitle}\n\n`;
        hotsQs.forEach((q, idx) => {
          const correctOpt = q.options.find(opt => opt.isCorrect) || q.options[0];
          hotsAnswerKey += `### Q${idx + 1}. [HOTS] ${q.questionText}\n- **Solution**: ${correctOpt ? (correctOpt.optionText || correctOpt.text) : 'Analysis'}\n- **Explanation**: ${q.explanation || 'Detailed proof'}\n\n`;
        });

        await prisma.worksheet.create({
          data: {
            subjectId: subject.id,
            chapterId: chapter.id,
            title: `HOTS Challenge Worksheet: ${chapterTitle}`,
            description: `Advanced Higher-Order Thinking Skills problem set for ${className} ${subjectName}.`,
            instructions: `1. Focus on multi-step reasoning and deep analytical mastery.`,
            type: 'HOTS',
            difficulty: 'HARD',
            durationMinutes: 60,
            totalMarks: hotsMarks,
            totalQuestions: hotsQs.length,
            isPublished: true,
            answerKey: hotsAnswerKey,
            questions: {
              create: hotsQs.map((q, idx) => ({
                questionId: q.id,
                sequence: idx + 1,
                marks: q.marks || 1
              }))
            }
          }
        });
        worksheetCount++;
      }
    }
  }

  console.log(`✅ Seeded ${worksheetCount} new Worksheets.`);
  await prisma.$disconnect();
}

runSeed().catch(e => {
  console.error('❌ Error seeding quizzes/worksheets:', e);
  prisma.$disconnect();
});
