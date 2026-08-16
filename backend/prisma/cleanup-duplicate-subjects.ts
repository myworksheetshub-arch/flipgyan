import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function cleanupDuplicates() {
  console.log('🧹 Cleaning up duplicate subject records...');

  const subjects = await prisma.subject.findMany({
    include: {
      chapters: true,
      quizzes: true,
      worksheets: true,
    },
  });

  const map = new Map<string, typeof subjects>();

  for (const s of subjects) {
    const key = `${s.classGradeId}:${s.name.trim().toLowerCase()}`;
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)!.push(s);
  }

  let mergedCount = 0;

  for (const [key, group] of map.entries()) {
    if (group.length <= 1) continue;

    console.log(`\nFound ${group.length} duplicates for key: ${key}`);

    // Sort group to pick primary: prioritize subject with most chapters/quizzes/worksheets
    group.sort((a, b) => {
      const countA = a.chapters.length + a.quizzes.length + a.worksheets.length;
      const countB = b.chapters.length + b.quizzes.length + b.worksheets.length;
      if (countA !== countB) return countB - countA;
      // Prefer codes without hyphens (e.g. MATH6 over MATH-6)
      if (!a.code.includes('-') && b.code.includes('-')) return -1;
      if (a.code.includes('-') && !b.code.includes('-')) return 1;
      return 0;
    });

    const primary = group[0];
    const duplicates = group.slice(1);

    console.log(`  -> Primary: [${primary.id}] ${primary.name} (${primary.code})`);

    for (const dup of duplicates) {
      console.log(`  -> Merging duplicate: [${dup.id}] ${dup.name} (${dup.code})`);

      // Reassign chapters
      await prisma.chapter.updateMany({
        where: { subjectId: dup.id },
        data: { subjectId: primary.id },
      });

      // Reassign quizzes
      await prisma.quiz.updateMany({
        where: { subjectId: dup.id },
        data: { subjectId: primary.id },
      });

      // Reassign worksheets
      await prisma.worksheet.updateMany({
        where: { subjectId: dup.id },
        data: { subjectId: primary.id },
      });

      // Delete duplicate subject
      await prisma.subject.delete({
        where: { id: dup.id },
      });

      mergedCount++;
    }
  }

  console.log(`\n✅ Successfully merged and deleted ${mergedCount} duplicate subject records!`);
}

cleanupDuplicates()
  .catch((e) => {
    console.error('❌ Error during cleanup:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
