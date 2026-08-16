import { PrismaClient } from '@prisma/client';

export async function seedQuestionTypes(
  prisma: PrismaClient,
) {

  const types = [

    {
      code: 'MCQ',
      name: 'Multiple Choice Question',
      category: 'OBJECTIVE',
      defaultMarks: 1,
      isObjective: true,
      isCompetency: false,
    },

    {
      code: 'MULTIPLE_CORRECT',
      name: 'Multiple Correct Answer',
      category: 'OBJECTIVE',
      defaultMarks: 1,
      isObjective: true,
    },

    {
      code: 'FILL_IN_BLANK',
      name: 'Fill in the Blanks',
      category: 'OBJECTIVE',
      defaultMarks: 1,
      isObjective: true,
    },

    {
      code: 'TRUE_FALSE',
      name: 'True or False',
      category: 'OBJECTIVE',
      defaultMarks: 1,
      isObjective: true,
    },

    {
      code: 'ASSERTION_REASON',
      name: 'Assertion and Reason',
      category: 'COMPETENCY',
      defaultMarks: 1,
      isObjective: true,
      isCompetency: true,
    },

    {
      code: 'MATCH_FOLLOWING',
      name: 'Match the Following',
      category: 'OBJECTIVE',
      defaultMarks: 1,
      isObjective: true,
    },

    {
      code: 'VERY_SHORT_ANSWER',
      name: 'Very Short Answer',
      category: 'SUBJECTIVE',
      defaultMarks: 2,
      isSubjective: true,
    },

    {
      code: 'SHORT_ANSWER',
      name: 'Short Answer',
      category: 'SUBJECTIVE',
      defaultMarks: 3,
      isSubjective: true,
    },

    {
      code: 'LONG_ANSWER',
      name: 'Long Answer',
      category: 'SUBJECTIVE',
      defaultMarks: 5,
      isSubjective: true,
    },

    {
      code: 'CASE_BASED',
      name: 'Case Based Question',
      category: 'COMPETENCY',
      defaultMarks: 4,
      isCompetency: true,
    },

    {
      code: 'SOURCE_BASED',
      name: 'Source Based Question',
      category: 'COMPETENCY',
      defaultMarks: 4,
      isCompetency: true,
    },

    {
      code: 'PASSAGE_BASED',
      name: 'Passage Based Question',
      category: 'COMPETENCY',
      defaultMarks: 4,
      isCompetency: true,
    },

    {
      code: 'DATA_BASED',
      name: 'Data Based Question',
      category: 'COMPETENCY',
      defaultMarks: 4,
      isCompetency: true,
    },

    {
      code: 'PICTURE_BASED',
      name: 'Picture Based Question',
      category: 'VISUAL',
      defaultMarks: 2,
    },

    {
      code: 'DIAGRAM_BASED',
      name: 'Diagram Based Question',
      category: 'VISUAL',
      defaultMarks: 3,
    },

    {
      code: 'MAP_BASED',
      name: 'Map Based Question',
      category: 'VISUAL',
      defaultMarks: 5,
    },

    {
      code: 'GRAPH_BASED',
      name: 'Graph Based Question',
      category: 'VISUAL',
      defaultMarks: 3,
    },

    {
      code: 'NUMERICAL',
      name: 'Numerical Question',
      category: 'PROBLEM_SOLVING',
      defaultMarks: 3,
    },

    {
      code: 'APPLICATION_BASED',
      name: 'Application Based Question',
      category: 'COMPETENCY',
      defaultMarks: 3,
      isCompetency: true,
    },

    {
      code: 'HOTS',
      name: 'Higher Order Thinking Question',
      category: 'HOTS',
      defaultMarks: 3,
      isCompetency: true,
    },

    {
      code: 'ANALYTICAL',
      name: 'Analytical Question',
      category: 'HOTS',
      defaultMarks: 4,
      isCompetency: true,
    },

  ];

  for (const type of types) {

    await prisma.questionTypeMaster.upsert({
      where: {
        code: type.code,
      },

      update: type,

      create: type,
    });
  }

  console.log(`✅ ${types.length} question types seeded`);
}

// Runnable standalone runner if invoked directly
if (require.main === module) {
  const prisma = new PrismaClient();
  seedQuestionTypes(prisma)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
