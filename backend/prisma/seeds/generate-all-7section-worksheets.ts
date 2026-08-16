import { PrismaClient } from '@prisma/client';

export async function generateAll7SectionWorksheets(prisma: PrismaClient) {
  console.log('🚀 Building 7-Section CBSE Standard Worksheets using ONLY Authentic Data...');

  const chapters = await prisma.chapter.findMany({
    include: {
      subject: { include: { classGrade: true } },
    },
  });

  console.log(`📌 Found ${chapters.length} total chapters in the database.`);

  let createdCount = 0;
  let updatedCount = 0;

  for (const ch of chapters) {
    const className = ch.subject?.classGrade?.name || 'Class 7';
    const subjectName = ch.subject?.name || 'Mathematics';

    const worksheetTitle = `CBSE ${className} ${subjectName} Worksheet - Chapter ${ch.chapterNumber}: ${ch.title || ch.name}`;
    const instructions = `==================================================
GENERAL INSTRUCTIONS:
1. Read all questions carefully before answering.
2. Time Allowed: 60 minutes. Maximum Marks: 30.
3. Section A: Q1–Q6 (MCQs, 1 mark each)
4. Section B: Q7–Q10 (Fill in the Blanks, 1 mark each)
5. Section C: Q11–Q13 (True/False, 1 mark each)
6. Section D: Q14–Q17 (Solve, 2 marks each)
7. Section E: Q18–Q19 (Assertion and Reasoning, 2 marks each)
8. Section F: Q20(a)-(d) (Case-Based, 4 marks total)
9. Section G: Q21 (HOTS / Application, 1 mark)
==================================================`;

    // Fetch existing authentic questions for this chapter
    const existingQs = await prisma.question.findMany({
      where: { chapterId: ch.id },
      include: { options: true },
    });

    // Exclude any legacy template items
    const authenticQs = existingQs.filter(q => {
      const qText = q.questionText || '';
      const hasDummyOption = q.options?.some((o: any) => {
        const optVal = (o.optionText || o.text || '') as string;
        return optVal.includes('Incorrect Option') || optVal.includes('Distractor Option');
      });
      return !qText.includes('Which of the following principles correctly applies to') && !hasDummyOption;
    });

    if (authenticQs.length === 0) continue;

    // Build Complete Answer Key String
    let answerKeyText = `==================================================\nANSWER KEY & SOLUTIONS: ${worksheetTitle}\n==================================================\n\n`;
    authenticQs.forEach((q, idx) => {
      answerKeyText += `Q${idx + 1} (${q.questionType}): ${q.answerText || 'See explanation'}\n`;
      if (q.explanation) {
        answerKeyText += `Working / Explanation: ${q.explanation}\n`;
      }
      answerKeyText += `--------------------------------------------------\n`;
    });

    let worksheet = await prisma.worksheet.findFirst({
      where: { chapterId: ch.id },
    });

    const totalMarks = authenticQs.reduce((sum, q) => sum + (q.marks || 1), 0);

    if (worksheet) {
      await prisma.worksheet.update({
        where: { id: worksheet.id },
        data: {
          title: worksheetTitle,
          description: `Standardized CBSE Practice Worksheet with Model Answers for ${className} ${subjectName} Chapter ${ch.chapterNumber}: ${ch.title}.`,
          instructions: instructions,
          durationMinutes: 60,
          totalMarks: totalMarks,
          totalQuestions: authenticQs.length,
          type: 'PRACTICE',
          difficulty: 'BALANCED',
          answerKey: answerKeyText,
          isPublished: true,
        },
      });
      updatedCount++;
    } else {
      worksheet = await prisma.worksheet.create({
        data: {
          title: worksheetTitle,
          description: `Standardized CBSE Practice Worksheet with Model Answers for ${className} ${subjectName} Chapter ${ch.chapterNumber}: ${ch.title}.`,
          instructions: instructions,
          durationMinutes: 60,
          totalMarks: totalMarks,
          totalQuestions: authenticQs.length,
          type: 'PRACTICE',
          difficulty: 'BALANCED',
          answerKey: answerKeyText,
          chapterId: ch.id,
          subjectId: ch.subjectId,
          isPublished: true,
        },
      });
      createdCount++;
    }

    // Re-link questions
    await prisma.worksheetQuestion.deleteMany({ where: { worksheetId: worksheet.id } });
    await prisma.worksheetQuestion.createMany({
      data: authenticQs.map((q, idx) => ({
        worksheetId: worksheet.id,
        questionId: q.id,
        sequence: idx + 1,
        marks: q.marks || 1,
      })),
    });
  }

  console.log(`🎉 SUCCESS! Worksheets updated using ONLY authentic CBSE question datasets across ${chapters.length} chapters!`);
}

// Standalone runner
if (require.main === module) {
  const prisma = new PrismaClient();
  generateAll7SectionWorksheets(prisma)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error('❌ Error updating worksheets:', e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
