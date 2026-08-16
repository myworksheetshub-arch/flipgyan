import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('--- Deep Cleaning All Dummy / Template / Distractor Questions ---');

  const totalQuestions = await prisma.question.count();
  console.log(`Total questions currently in database: ${totalQuestions}`);

  // Find dummy questions matching ANY generic placeholder patterns
  const dummyQuestions = await prisma.question.findMany({
    where: {
      OR: [
        { questionText: { contains: 'Distractor' } },
        { questionText: { contains: 'Assessment on' } },
        { questionText: { contains: 'Correct Social Science' } },
        { questionText: { contains: 'Correct Science' } },
        { questionText: { contains: 'Correct Mathematics' } },
        { questionText: { contains: 'Correct English' } },
        { questionText: { contains: 'Correct Hindi' } },
        { questionText: { contains: 'Scenario #' } },
        { questionText: { contains: 'Item #' } },
        { questionText: { contains: 'Question #' } },
        { questionText: { contains: 'Gap Filling' } },
        { questionText: { contains: 'Grammar Assessment' } },
        { questionText: { contains: 'Grammatical Application' } },
        { questionText: { contains: 'Practice Item' } },
        { questionText: { contains: 'Assessment Item' } },
        {
          options: {
            some: {
              OR: [
                { optionText: { contains: 'Distractor' } },
                { text: { contains: 'Distractor' } },
                { optionText: { contains: 'Correct Social Science' } },
                { text: { contains: 'Correct Social Science' } },
                { optionText: { contains: 'Correct Science' } },
                { text: { contains: 'Correct Science' } },
                { optionText: { contains: 'Correct Mathematics' } },
                { text: { contains: 'Correct Mathematics' } }
              ]
            }
          }
        }
      ]
    },
    select: {
      id: true,
      questionText: true,
      questionCode: true,
      options: {
        select: {
          id: true,
          optionText: true,
          text: true
        }
      }
    }
  });

  console.log(`Found ${dummyQuestions.length} dummy questions matching criteria.`);

  if (dummyQuestions.length > 0) {
    console.log('\nSample dummy question 1:', dummyQuestions[0].questionText);
    console.log('Sample options:', dummyQuestions[0].options);

    const dummyIds = dummyQuestions.map((q) => q.id);

    // Delete options first for these questions
    const deletedOptions = await prisma.questionOption.deleteMany({
      where: {
        questionId: { in: dummyIds }
      }
    });
    console.log(`Deleted ${deletedOptions.count} question options.`);

    // Delete question-quiz links
    const deletedQuizLinks = await prisma.quizQuestion.deleteMany({
      where: {
        questionId: { in: dummyIds }
      }
    });
    console.log(`Deleted ${deletedQuizLinks.count} quiz-question links.`);

    // Delete question-worksheet links
    const deletedWsLinks = await prisma.worksheetQuestion.deleteMany({
      where: {
        questionId: { in: dummyIds }
      }
    });
    console.log(`Deleted ${deletedWsLinks.count} worksheet-question links.`);

    // Delete questions from Question table
    const deletedQuestions = await prisma.question.deleteMany({
      where: {
        id: { in: dummyIds }
      }
    });
    console.log(`Successfully deleted ${deletedQuestions.count} dummy template questions from Question table!`);
  }

  const remainingQuestions = await prisma.question.count();
  console.log(`Remaining valid questions in database: ${remainingQuestions}`);
}

main()
  .catch((e) => {
    console.error('Error cleaning dummy questions:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
