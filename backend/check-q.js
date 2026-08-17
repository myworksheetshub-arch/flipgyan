const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const count = await prisma.question.count();
  console.log('Total Questions in DB:', count);

  const sample = await prisma.question.findMany({
    take: 3,
    select: {
      id: true,
      questionText: true,
      status: true,
      isPublished: true,
      chapter: {
        select: {
          title: true,
          subject: {
            select: {
              name: true,
              classGrade: { select: { name: true } }
            }
          }
        }
      }
    }
  });
  console.log('Sample questions:', JSON.stringify(sample, null, 2));
  await prisma.$disconnect();
}

check().catch(e => {
  console.error(e);
  prisma.$disconnect();
});
