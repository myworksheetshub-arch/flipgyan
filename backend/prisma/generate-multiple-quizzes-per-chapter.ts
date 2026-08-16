import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function generateMultipleQuizzesPerChapter() {
  console.log('🚀 Generating 4 Distinct Quizzes per Chapter across all Subjects & Classes (1 Free + 3 PRO Exclusive)...');

  const chapters = await prisma.chapter.findMany({
    include: {
      subject: { include: { classGrade: true } },
      questions: {
        orderBy: { createdAt: 'asc' },
      },
    },
  });

  console.log(`📌 Found ${chapters.length} total chapters in the database.`);

  let totalQuizzesCreated = 0;

  for (const ch of chapters) {
    const chapterQuestions = ch.questions;
    if (chapterQuestions.length === 0) continue;

    const quizTemplates = [
      {
        titleSuffix: 'Master Practice Quiz',
        desc: `Standard practice quiz on ${ch.title} to test core NCERT concepts.`,
        diff: 'MEDIUM',
        qOffset: 0,
      },
      {
        titleSuffix: 'HOTS & Olympiad Challenge Quiz',
        desc: `High Order Thinking Skills (HOTS) and Olympiad level challenge on ${ch.title}.`,
        diff: 'HARD',
        qOffset: 10,
      },
      {
        titleSuffix: 'Rapid-Fire Speed Test',
        desc: `Timed rapid-fire test on ${ch.title} for quick recall and speed practice.`,
        diff: 'EASY',
        qOffset: 20,
      },
      {
        titleSuffix: 'CBSE Competency & Case-Study Test',
        desc: `Board exam competency & case-study questions on ${ch.title}.`,
        diff: 'HARD',
        qOffset: 30,
      },
    ];

    for (let tIdx = 0; tIdx < quizTemplates.length; tIdx++) {
      const tmpl = quizTemplates[tIdx];
      const fullTitle = `Ch ${ch.chapterNumber}: ${ch.title} — ${tmpl.titleSuffix}`;

      // Check if quiz already exists
      let quiz = await prisma.quiz.findFirst({
        where: {
          chapterId: ch.id,
          title: fullTitle,
        },
      });

      if (!quiz) {
        quiz = await prisma.quiz.create({
          data: {
            title: fullTitle,
            description: tmpl.desc,
            durationMinutes: tIdx === 2 ? 10 : 15,
            totalMarks: 10,
            passMarks: 6,
            difficulty: tmpl.diff,
            chapterId: ch.id,
            subjectId: ch.subjectId,
            isPublished: true,
          },
        });
        totalQuizzesCreated++;
      }

      // Sample 10 questions starting from offset
      const selectedQs = [];
      for (let k = 0; k < 10; k++) {
        const qIndex = (tmpl.qOffset + k) % chapterQuestions.length;
        selectedQs.push(chapterQuestions[qIndex]);
      }

      // Clear existing links and re-link 10 questions
      await prisma.quizQuestion.deleteMany({ where: { quizId: quiz.id } });

      let seq = 1;
      for (const q of selectedQs) {
        await prisma.quizQuestion.create({
          data: {
            quizId: quiz.id,
            questionId: q.id,
            sequence: seq++,
          },
        });
      }
    }
  }

  const finalQuizCount = await prisma.quiz.count();
  console.log(`\n🎉 SUCCESS! Generated multiple quizzes per chapter.`);
  console.log(`✨ Total Quizzes in Database: ${finalQuizCount}`);
}

generateMultipleQuizzesPerChapter()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
