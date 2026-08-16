import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🗑️  Finding and removing all Worksheets that do NOT have EXACTLY 21 Questions...');

  const allWorksheets = await prisma.worksheet.findMany({
    include: {
      _count: { select: { questions: true } },
    },
  });

  console.log(`📌 Initial total worksheets in database: ${allWorksheets.length}`);

  const invalidWorksheets = allWorksheets.filter((w) => w._count.questions !== 21);
  const validWorksheets = allWorksheets.filter((w) => w._count.questions === 21);

  console.log(`✅ Worksheets with EXACTLY 21 Questions: ${validWorksheets.length}`);
  console.log(`⚠️  Worksheets to be deleted (count != 21): ${invalidWorksheets.length}`);

  if (invalidWorksheets.length === 0) {
    console.log('🎉 No invalid worksheets found! ALL worksheets in the database already have 21 questions.');
    return;
  }

  const invalidIds = invalidWorksheets.map((w) => w.id);

  // Delete dependent attempts & questions
  await prisma.worksheetAttempt.deleteMany({
    where: { worksheetId: { in: invalidIds } },
  });

  await prisma.worksheetQuestion.deleteMany({
    where: { worksheetId: { in: invalidIds } },
  });

  const deleteResult = await prisma.worksheet.deleteMany({
    where: { id: { in: invalidIds } },
  });

  console.log(`🎉 SUCCESS! Purged ${deleteResult.count} incomplete worksheets from PostgreSQL database.`);

  const remainingCount = await prisma.worksheet.count();
  console.log(`📊 Total active Worksheets remaining in database: ${remainingCount} (All with 21 questions).`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error purging worksheets:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
