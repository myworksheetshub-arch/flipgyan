const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkCounts() {
  const worksheets = await prisma.worksheet.findMany({
    include: {
      subject: { include: { classGrade: true } },
      chapter: true
    }
  });
  const quizzes = await prisma.quiz.findMany({
    include: {
      subject: { include: { classGrade: true } },
      chapter: true
    }
  });

  console.log('Total Worksheets in DB:', worksheets.length);
  if (worksheets.length > 0) {
    console.log('Sample Worksheet title:', worksheets[0].title);
  }

  console.log('Total Quizzes in DB:', quizzes.length);
  if (quizzes.length > 0) {
    console.log('Sample Quiz title:', quizzes[0].title);
  }

  await prisma.$disconnect();
}

checkCounts().catch(e => {
  console.error(e);
  prisma.$disconnect();
});
