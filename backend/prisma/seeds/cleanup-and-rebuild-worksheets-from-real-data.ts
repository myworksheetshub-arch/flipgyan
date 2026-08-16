import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function cleanupDummyQuestionsAndRebuildWorksheets() {
  console.log('🧹 1. Cleaning up all generic/placeholder/distractor questions...');

  // Identify all questions with generic distractor or placeholder texts
  const dummyQs = await prisma.question.findMany({
    where: {
      OR: [
        { questionText: { contains: 'Which of the following principles correctly applies to' } },
        { questionText: { contains: 'Sample MCQ question' } },
        { questionText: { contains: 'Sample FILL_IN_BLANK' } },
        { questionText: { contains: 'Sample TRUE_FALSE' } },
        { questionText: { contains: 'Sample SHORT_ANSWER' } },
        { questionText: { contains: 'Sample ASSERTION_REASON' } },
        { questionText: { contains: 'Sample CASE_BASED' } },
        { questionText: { contains: 'Sample ANALYTICAL' } },
        { questionText: { contains: 'Correct Social Science Fact' } },
        { questionText: { contains: 'Distractor Option' } },
        {
          options: {
            some: {
              OR: [
                { optionText: { contains: 'Incorrect Option' } },
                { optionText: { contains: 'Correct Option' } },
                { optionText: { contains: 'Distractor Option' } },
                { optionText: { contains: 'Alternative Option' } },
                { text: { contains: 'Incorrect Option' } },
                { text: { contains: 'Correct Option' } },
                { text: { contains: 'Distractor Option' } },
                { text: { contains: 'Alternative Option' } },
              ],
            },
          },
        },
      ],
    },
    select: { id: true },
  });

  const dummyIds = dummyQs.map((q) => q.id);
  console.log(`📌 Found ${dummyIds.length} dummy/placeholder questions to remove.`);

  if (dummyIds.length > 0) {
    await prisma.questionOption.deleteMany({ where: { questionId: { in: dummyIds } } });
    await prisma.quizQuestion.deleteMany({ where: { questionId: { in: dummyIds } } });
    await prisma.worksheetQuestion.deleteMany({ where: { questionId: { in: dummyIds } } });
    await prisma.question.deleteMany({ where: { id: { in: dummyIds } } });
    console.log(`✅ Removed ${dummyIds.length} dummy questions and their options/links.`);
  }

  console.log('\n📚 2. Re-building Worksheets to use strictly REAL Academic Questions...');

  const worksheets = await prisma.worksheet.findMany({
    include: {
      chapter: {
        include: {
          questions: {
            include: { options: true },
            orderBy: { createdAt: 'asc' },
          },
        },
      },
    },
  });

  let reLinkedCount = 0;

  for (const ws of worksheets) {
    const chQuestions = ws.chapter?.questions || [];
    if (chQuestions.length === 0) continue;

    // Filter to authentic questions
    const realQuestions = chQuestions.filter(q => {
      const qText = q.questionText || '';
      const hasDummyOption = q.options?.some((o: any) => {
        const optVal = (o.optionText || o.text || '') as string;
        return optVal.includes('Incorrect Option') || optVal.includes('Distractor Option');
      });
      return !qText.includes('Which of the following principles correctly applies to') && !hasDummyOption;
    });

    if (realQuestions.length > 0) {
      await prisma.worksheetQuestion.deleteMany({ where: { worksheetId: ws.id } });
      await prisma.worksheetQuestion.createMany({
        data: realQuestions.map((q, idx) => ({
          worksheetId: ws.id,
          questionId: q.id,
          sequence: idx + 1,
          marks: q.marks || 1,
        })),
      });

      // Update total questions and total marks
      const totalMarks = realQuestions.reduce((acc, q) => acc + (q.marks || 1), 0);
      await prisma.worksheet.update({
        where: { id: ws.id },
        data: {
          totalQuestions: realQuestions.length,
          totalMarks: totalMarks,
        },
      });

      reLinkedCount++;
    }
  }

  console.log(`🎉 SUCCESS! Cleaned up all dummy questions and re-linked ${reLinkedCount} worksheets to REAL academic questions from data files!`);
}

// Standalone runner
if (require.main === module) {
  cleanupDummyQuestionsAndRebuildWorksheets()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error('❌ Error during cleanup:', e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
