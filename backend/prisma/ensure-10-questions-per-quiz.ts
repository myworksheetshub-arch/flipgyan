import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function ensure10QuestionsPerQuiz() {
  console.log('🎯 Updating all Quizzes to have EXACTLY 10 Questions linked...');

  const quizzes = await prisma.quiz.findMany({
    include: {
      questions: true,
      chapter: true,
    },
  });

  console.log(`📌 Found ${quizzes.length} total quizzes in the database.`);

  let totalUpdated = 0;

  for (const quiz of quizzes) {
    // 1. Update quiz totalMarks to 10, passMarks to 6, duration to 15
    await prisma.quiz.update({
      where: { id: quiz.id },
      data: {
        totalMarks: 10,
        passMarks: 6,
        durationMinutes: 15,
      },
    });

    // 2. Fetch questions from the quiz's chapter
    const chapterQuestions = await prisma.question.findMany({
      where: { chapterId: quiz.chapterId },
      take: 10,
      orderBy: { createdAt: 'asc' },
    });

    if (chapterQuestions.length > 0) {
      // Clear existing QuizQuestion mappings for clean state
      await prisma.quizQuestion.deleteMany({
        where: { quizId: quiz.id },
      });

      // Insert 10 QuizQuestion mappings
      let seq = 1;
      for (const q of chapterQuestions) {
        await prisma.quizQuestion.create({
          data: {
            quizId: quiz.id,
            questionId: q.id,
            sequence: seq++,
          },
        });
      }
      totalUpdated++;
    }
  }

  console.log(`\n🎉 SUCCESS! All ${totalUpdated} Quizzes updated with EXACTLY 10 Questions each!`);
}

ensure10QuestionsPerQuiz()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
