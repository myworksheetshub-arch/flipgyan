import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 Checking Chapter 1 Worksheets for each Class and Subject...');

  const classGrades = await prisma.classGrade.findMany({
    orderBy: { number: 'asc' },
    include: {
      subjects: {
        include: {
          chapters: {
            include: {
              worksheets: {
                include: {
                  _count: { select: { questions: true } },
                },
              },
            },
          },
        },
      },
    },
  });

  let totalFreeCh1Worksheets = 0;
  let missingCh1Worksheets = 0;

  for (const cg of classGrades) {
    console.log(`\n📚 CLASS ${cg.number} (${cg.name}):`);
    for (const sub of cg.subjects) {
      const ch1 = sub.chapters.find(
        (c) =>
          c.chapterNo === 1 ||
          c.chapterNumber === 1 ||
          (c.title && (c.title.toLowerCase().includes('chapter 1') || c.title.toLowerCase().includes('1 -') || c.title.toLowerCase().includes('1:'))) ||
          (c.name && c.name.toLowerCase().includes('1'))
      );

      const ch1Ws = ch1?.worksheets.find((w) => w._count.questions === 21);

      if (ch1Ws) {
        console.log(`  ✅ Subject: ${sub.name.padEnd(20)} -> Chapter 1 Worksheet ID: ${ch1Ws.id} ("${ch1Ws.title}")`);
        totalFreeCh1Worksheets++;
      } else {
        const fallbackWs = sub.chapters.flatMap((c) => c.worksheets).find((w) => w._count.questions === 21);
        if (fallbackWs) {
          console.log(`  🟡 Subject: ${sub.name.padEnd(20)} -> Available Worksheet ID: ${fallbackWs.id} ("${fallbackWs.title}")`);
          totalFreeCh1Worksheets++;
        } else {
          console.log(`  ⚠️  Subject: ${sub.name.padEnd(20)} -> MISSING 21-Question Worksheet`);
          missingCh1Worksheets++;
        }
      }
    }
  }

  console.log(`\n==================================================`);
  console.log(`📊 SUMMARY:`);
  console.log(`  - Active Free Worksheets (21 Questions): ${totalFreeCh1Worksheets}`);
  console.log(`  - Missing Free Worksheets: ${missingCh1Worksheets}`);
  console.log(`==================================================`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error checking Chapter 1 worksheets:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
