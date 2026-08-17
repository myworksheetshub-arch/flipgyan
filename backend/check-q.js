const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const [users, questions, worksheets, quizzes, notes] = await Promise.all([
    prisma.user.count(),
    prisma.question.count(),
    prisma.worksheet.count(),
    prisma.quiz.count(),
    prisma.studyNote.count(),
  ]);

  console.log('Database Stats:');
  console.log({ users, questions, worksheets, quizzes, notes });

  const sampleQ = await prisma.question.findMany({
    take: 2,
    include: {
      chapter: {
        include: {
          subject: {
            include: {
              classGrade: true
            }
          }
        }
      }
    }
  });
  console.log('Sample Question Subject & Class:', sampleQ.map(q => ({
    id: q.id,
    questionText: q.questionText.slice(0, 40) + '...',
    subject: q.chapter?.subject?.name,
    classGrade: q.chapter?.subject?.classGrade?.name
  })));

  await prisma.$disconnect();
}

check().catch(e => {
  console.error(e);
  prisma.$disconnect();
});
