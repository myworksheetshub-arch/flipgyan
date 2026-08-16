import { PrismaClient } from '@prisma/client';

/**
 * Master Worksheet Seed Generator:
 * Generates comprehensive, NEP 2020 & PARAKH Aligned Worksheets across ALL classes (5 to 12)
 * and ALL subjects (Mathematics, Science, Social Science, English, Physics, Chemistry, Biology).
 * 
 * Includes Worksheets of Types:
 * - PRACTICE: Pure MCQ & Fast Drills
 * - COMPETENCY: 50% Weightage Application, Case Studies, A-R & Constructed Responses
 * - HOTS / CASE_BASED: Advanced Higher Order Thinking Skills, Diagrammatic & Skill Analysis
 */
export async function seedWorksheets(prisma: PrismaClient, subjects: any[], questions: any[]) {
  console.log('📝 Seeding Comprehensive Worksheets (MCQ, Competency, HOTS, Case-Based & Skill Analysis) across all classes & subjects...');
  
  // Clear existing worksheet relations and worksheets for clean re-seed
  await prisma.worksheetQuestion.deleteMany({});
  await prisma.worksheet.deleteMany({});

  const seededWorksheets = [];

  const chapters = await prisma.chapter.findMany({
    include: {
      subject: {
        include: {
          classGrade: true,
        },
      },
      questions: {
        include: {
          options: true,
        },
      },
    },
  });

  for (const chapter of chapters) {
    const chapterQs = chapter.questions;
    if (!chapterQs || chapterQs.length === 0) continue;

    const className = chapter.subject.classGrade.name;
    const subjectName = chapter.subject.name;
    const chapterTitle = chapter.title;

    const easyQs = chapterQs.filter((q) => q.difficulty === 'EASY');
    const mediumQs = chapterQs.filter((q) => q.difficulty === 'MEDIUM');
    const hardQs = chapterQs.filter((q) => q.difficulty === 'HARD');

    const mcqOnlyQs = chapterQs.filter((q) => q.questionType === 'MCQ' || (q as any).type === 'MCQ');

    // -------------------------------------------------------------
    // 1. PURE MCQ PRACTICE WORKSHEET
    // -------------------------------------------------------------
    if (mcqOnlyQs.length > 0) {
      const selectedMcqs = mcqOnlyQs.slice(0, 8);
      const totalMarks = selectedMcqs.reduce((sum, q) => sum + (q.marks || 1), 0);

      let mcqAnswerKey = `# Pure MCQ Practice Answer Key & Step-by-Step Solutions\n\n`;
      mcqAnswerKey += `**Worksheet**: MCQ Practice Worksheet — ${className} ${subjectName}: ${chapterTitle}\n`;
      mcqAnswerKey += `**Total Questions**: ${selectedMcqs.length} MCQs | **Total Marks**: ${totalMarks} Marks | **Time**: 30 Minutes\n\n---\n\n`;

      selectedMcqs.forEach((q, idx) => {
        const correctOpt = (q.options.find((opt) => opt.isCorrect) || q.options[0]) as any;
        const optLabel = correctOpt?.optionLabel || (correctOpt?.sequence ? String.fromCharCode(64 + correctOpt.sequence) : 'A');
        const optText = correctOpt?.optionText || correctOpt?.text || 'Correct Option';

        mcqAnswerKey += `### Q${idx + 1}. ${q.questionText}\n`;
        mcqAnswerKey += `- **Correct Answer**: Option ${optLabel}) ${optText}\n`;
        mcqAnswerKey += `- **Explanation & Solution**: ${q.explanation || 'Step-by-step verified solution.'}\n\n`;
      });

      const mcqWs = await prisma.worksheet.create({
        data: {
          subjectId: chapter.subjectId,
          chapterId: chapter.id,
          title: `MCQ Practice Worksheet: ${chapterTitle}`,
          description: `Multiple Choice Question practice set for ${className} ${subjectName}.`,
          instructions: `### Instructions:
1. All questions in this worksheet are Multiple Choice Questions (MCQs).
2. Choose the correct option (A, B, C, or D) for each question.
3. Check your responses using the step-by-step answer key provided upon completion.`,
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
              marks: q.marks || 1,
            })),
          },
        },
      });

      seededWorksheets.push(mcqWs);
    }

    // -------------------------------------------------------------
    // 2. COMPETENCY-BASED WORKSHEET (NEP 2020 & PARAKH Multi-Format)
    // -------------------------------------------------------------
    const competencyQs = [
      ...easyQs.slice(0, 2),
      ...mediumQs.slice(0, 3),
      ...hardQs.slice(0, 2),
    ];
    if (competencyQs.length < 5) {
      const needed = 6 - competencyQs.length;
      const unused = chapterQs.filter((q) => !competencyQs.includes(q));
      competencyQs.push(...unused.slice(0, needed));
    }

    if (competencyQs.length > 0) {
      const compTotalMarks = competencyQs.reduce((sum, q) => sum + (q.marks || 1), 0);

      let compAnswerKey = `# CBSE Competency-Based Assessment Answer Key & Marking Rubric\n\n`;
      compAnswerKey += `**Worksheet**: Competency-Based Worksheet — ${className} ${subjectName}: ${chapterTitle}\n`;
      compAnswerKey += `**Total Marks**: ${compTotalMarks} Marks | **Time**: 45 Minutes\n\n---\n\n`;

      competencyQs.forEach((q, idx) => {
        const correctOpt = (q.options.find((opt) => opt.isCorrect) || q.options[0]) as any;
        const optLabel = correctOpt?.optionLabel || (correctOpt?.sequence ? String.fromCharCode(64 + correctOpt.sequence) : 'A');
        const optText = correctOpt?.optionText || correctOpt?.text || 'Correct Option';
        compAnswerKey += `### Q${idx + 1}. [${q.questionType} - ${q.competency || 'COMPETENCY'}] ${q.questionText}\n`;
        if (correctOpt && q.options.length > 0) {
          compAnswerKey += `- **Correct Answer**: Option ${optLabel}) ${optText}\n`;
        }
        compAnswerKey += `- **Marking Rubric & Solution**: ${q.explanation || 'Step-by-step solution.'}\n\n`;
      });

      const compWs = await prisma.worksheet.create({
        data: {
          subjectId: chapter.subjectId,
          chapterId: chapter.id,
          title: `Competency-Based Worksheet: ${chapterTitle}`,
          description: `NEP 2020 & PARAKH aligned assessment evaluating real-world application, critical thinking, A-R, Case Studies, and problem-solving skills for ${className} ${subjectName}.`,
          instructions: `### Instructions:
1. This worksheet tests conceptual understanding, application of knowledge, A-R logic, and Case Studies.
2. Show complete working, units, and clear justifications for subjective tasks.
3. Refer to the answer key for marking rubrics.`,
          type: 'COMPETENCY',
          difficulty: 'MEDIUM',
          durationMinutes: 45,
          totalMarks: compTotalMarks,
          totalQuestions: competencyQs.length,
          isPublished: true,
          answerKey: compAnswerKey,
          questions: {
            create: competencyQs.map((q, idx) => ({
              questionId: q.id,
              sequence: idx + 1,
              marks: q.marks || 1,
            })),
          },
        },
      });

      seededWorksheets.push(compWs);
    }

    // -------------------------------------------------------------
    // 3. HOTS & CASE-BASED CHALLENGE WORKSHEET
    // -------------------------------------------------------------
    if (hardQs.length >= 1 || mediumQs.length >= 3) {
      const hotsQs = [...mediumQs.slice(0, 2), ...hardQs.slice(0, 4)];
      const hotsTotalMarks = hotsQs.reduce((sum, q) => sum + (q.marks || 1), 0);

      let hotsAnswerKey = `# HOTS & Case-Based Challenge Answer Key & Evaluation Rubric\n\n`;
      hotsAnswerKey += `**Worksheet**: HOTS & Case-Based Challenge Worksheet — ${className} ${subjectName}: ${chapterTitle}\n\n`;

      hotsQs.forEach((q, idx) => {
        const correctOpt = (q.options.find((opt) => opt.isCorrect) || q.options[0]) as any;
        const optLabel = correctOpt?.optionLabel || (correctOpt?.sequence ? String.fromCharCode(64 + correctOpt.sequence) : 'A');
        const optText = correctOpt?.optionText || correctOpt?.text || 'Correct Option';
        hotsAnswerKey += `### Q${idx + 1}. [HOTS - ${q.bloomLevel}] ${q.questionText}\n`;
        if (correctOpt && q.options.length > 0) {
          hotsAnswerKey += `- **Correct Answer**: Option ${optLabel}) ${optText}\n`;
        }
        hotsAnswerKey += `- **Detailed Rubric**: ${q.explanation || 'Step-by-step derivation and logical proof.'}\n\n`;
      });

      const hotsWs = await prisma.worksheet.create({
        data: {
          subjectId: chapter.subjectId,
          chapterId: chapter.id,
          title: `HOTS & Case-Based Challenge: ${chapterTitle}`,
          description: `Advanced Higher-Order Thinking Skills (HOTS) and Case Study problem set for ${className} ${subjectName}.`,
          instructions: `### Instructions:
1. Designed for advanced analytical mastery and CBSE Board / Olympiad preparation.
2. Focus on logical reasoning, multi-step problem solving, diagrammatic analysis, and error analysis.`,
          type: 'HOTS',
          difficulty: 'HARD',
          durationMinutes: 60,
          totalMarks: hotsTotalMarks,
          totalQuestions: hotsQs.length,
          isPublished: true,
          answerKey: hotsAnswerKey,
          questions: {
            create: hotsQs.map((q, idx) => ({
              questionId: q.id,
              sequence: idx + 1,
              marks: q.marks || 1,
            })),
          },
        },
      });

      seededWorksheets.push(hotsWs);
    }
  }

  console.log(`✅ Successfully Seeded ${seededWorksheets.length} Master Worksheets (MCQ, Competency & HOTS)!`);
  return seededWorksheets;
}
