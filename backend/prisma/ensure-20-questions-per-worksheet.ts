import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function ensure20QuestionsPerWorksheet() {
  console.log('🚀 Ensuring exactly 20 questions in every Worksheet...');

  const worksheets = await prisma.worksheet.findMany({
    include: {
      questions: true,
      chapter: true,
      subject: true,
    },
  });

  console.log(`📋 Total Worksheets found: ${worksheets.length}`);

  let updatedCount = 0;

  for (const ws of worksheets) {
    // 1. Fetch available questions for this chapter first
    let chapterQuestions = await prisma.question.findMany({
      where: { chapterId: ws.chapterId },
      include: { options: true },
    });

    // If chapter has fewer than 20 questions, fetch fallback questions from the subject
    if (chapterQuestions.length < 20) {
      const subjectQuestions = await prisma.question.findMany({
        where: { chapter: { subjectId: ws.subjectId } },
        include: { options: true },
      });

      // Merge and deduplicate
      const qMap = new Map();
      for (const q of [...chapterQuestions, ...subjectQuestions]) {
        qMap.set(q.id, q);
      }
      chapterQuestions = Array.from(qMap.values());
    }

    // If still < 20, fetch general questions to reach 20
    if (chapterQuestions.length < 20) {
      const extraQuestions = await prisma.question.findMany({
        take: 20 - chapterQuestions.length,
        include: { options: true },
      });
      const qMap = new Map();
      for (const q of [...chapterQuestions, ...extraQuestions]) {
        qMap.set(q.id, q);
      }
      chapterQuestions = Array.from(qMap.values());
    }

    // Take top 20 questions
    const selectedQuestions = chapterQuestions.slice(0, 20);

    // Update Worksheet metadata
    await prisma.worksheet.update({
      where: { id: ws.id },
      data: {
        totalQuestions: 20,
        totalMarks: 20,
      },
    });

    // Delete existing worksheet questions mapping
    await prisma.worksheetQuestion.deleteMany({
      where: { worksheetId: ws.id },
    });

    // Create 20 new worksheet question links
    const worksheetQuestionsData = selectedQuestions.map((q, idx) => ({
      worksheetId: ws.id,
      questionId: q.id,
      sequence: idx + 1,
      marks: 1,
    }));

    await prisma.worksheetQuestion.createMany({
      data: worksheetQuestionsData,
    });

    updatedCount++;
  }

  console.log(`✅ Successfully updated ${updatedCount} Worksheets to have exactly 20 questions each (20 Marks)!`);
}

ensure20QuestionsPerWorksheet()
  .catch((e) => {
    console.error('❌ Error updating worksheet questions:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
