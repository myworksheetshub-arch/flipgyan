const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.quiz.count().then(c => {
  console.log('Quizzes in DB right now:', c);
  return prisma.worksheet.count();
}).then(w => {
  console.log('Worksheets in DB right now:', w);
  prisma.$disconnect();
}).catch(e => {
  console.error(e);
  prisma.$disconnect();
});
