import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function getSubjectAbbr(subjectName: string, subjectCode?: string | null): string {
  const code = (subjectCode || '').toUpperCase();
  if (code.includes('MATH')) return 'MATH';
  if (code.includes('SCI')) return 'SCI';
  if (code.includes('GRAM')) return 'GRAM';
  if (code.includes('ENG')) return 'ENG';
  if (code.includes('SST') || code.includes('SOC')) return 'SST';

  const name = subjectName.toUpperCase();
  if (name.includes('MATH')) return 'MATH';
  if (name.includes('SCIENCE') || name.includes('EVS')) return 'SCI';
  if (name.includes('GRAMMAR')) return 'GRAM';
  if (name.includes('ENGLISH')) return 'ENG';
  if (name.includes('SOCIAL')) return 'SST';

  return name.substring(0, 4).replace(/[^A-Z]/g, 'SUB');
}

function getChapterAbbr(chapterTitle: string): string {
  const stopWords = new Set(['THE', 'OF', 'IN', 'AND', 'TO', 'A', 'AN', 'ON', 'IS', 'THAT', 'OUR', 'WE', 'ITS']);
  const words = chapterTitle
    .toUpperCase()
    .replace(/[^A-Z0-9\s]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 0 && !stopWords.has(w));

  if (words.length >= 3) {
    return (words[0][0] + words[1][0] + words[2][0]).substring(0, 3);
  } else if (words.length === 2) {
    return (words[0].substring(0, 2) + words[1][0]).substring(0, 3);
  } else if (words.length === 1) {
    return words[0].substring(0, 3);
  }
  return 'CHP';
}

async function assignQuestionCodes() {
  console.log('🏷️ Assigning Unique Question Codes across all database questions...');

  const classes = await prisma.classGrade.findMany({
    include: {
      subjects: {
        include: {
          chapters: {
            orderBy: { chapterNumber: 'asc' },
            include: {
              questions: {
                orderBy: { createdAt: 'asc' },
              },
            },
          },
        },
      },
    },
    orderBy: { number: 'asc' },
  });

  const assignedCodes = new Set<string>();
  let totalUpdated = 0;

  for (const cGrade of classes) {
    const classNum = cGrade.number;

    for (const sub of cGrade.subjects) {
      const subAbbr = getSubjectAbbr(sub.name, sub.code);

      for (const ch of sub.chapters) {
        const chAbbr = getChapterAbbr(ch.title);
        const questions = ch.questions;

        let seq = 1;
        for (const q of questions) {
          let paddedSeq = String(seq).padStart(3, '0');
          // Format: C6-MATH-KON-005 or C6-MATH-C1-KON-005
          let baseCode = `C${classNum}-${subAbbr}-${chAbbr}-${paddedSeq}`;

          // Ensure absolute uniqueness across database
          let candidateCode = baseCode;
          let dupCounter = 1;
          while (assignedCodes.has(candidateCode)) {
            candidateCode = `C${classNum}-${subAbbr}-C${ch.chapterNumber}-${chAbbr}-${paddedSeq}`;
            if (assignedCodes.has(candidateCode)) {
              candidateCode = `C${classNum}-${subAbbr}-${chAbbr}-${paddedSeq}-${dupCounter}`;
              dupCounter++;
            }
          }

          assignedCodes.add(candidateCode);

          await prisma.question.update({
            where: { id: q.id },
            data: { questionCode: candidateCode },
          });

          seq++;
          totalUpdated++;
        }
      }
    }
  }

  console.log(`\n🎉 QUESTION CODE ASSIGNMENT COMPLETE!`);
  console.log(`✨ Total Questions Updated with Unique Codes: ${totalUpdated}`);

  // Sample check for Class 6 Math "Knowing Our Numbers"
  const class6Math = await prisma.subject.findFirst({
    where: { classGrade: { number: 6 }, name: { contains: 'Math' } },
    include: {
      chapters: {
        include: {
          questions: { take: 5 },
        },
      },
    },
  });

  if (class6Math) {
    console.log(`\n🔍 Sample Verification for Class 6 Math:`);
    for (const ch of class6Math.chapters) {
      console.log(`  📌 Chapter ${ch.chapterNumber}: ${ch.title}`);
      for (const q of ch.questions) {
        console.log(`     -> questionCode: "${q.questionCode}" | Text: "${q.questionText.substring(0, 45)}..."`);
      }
    }
  }
}

assignQuestionCodes()
  .catch((e) => {
    console.error('Error assigning question codes:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
