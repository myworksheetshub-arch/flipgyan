import { PrismaClient } from '@prisma/client';

export async function seedQuizzes(prisma: PrismaClient, subjects: any[], questions: any[]) {
  console.log('🎯 Seeding Quizzes for all Chapters...');
  const quizzes = [];

  for (const subject of subjects) {
    const chapters = await prisma.chapter.findMany({
      where: { subjectId: subject.id },
    });

    for (const chapter of chapters) {
      const chapterQs = questions.filter((q) => q.chapterId === chapter.id);
      if (chapterQs.length === 0) continue;

      const existing = await prisma.quiz.findFirst({
        where: { chapterId: chapter.id },
      });

      if (existing) {
        quizzes.push(existing);
      } else {
        const quiz = await prisma.quiz.create({
          data: {
            subjectId: subject.id,
            chapterId: chapter.id,
            title: `${chapter.title} — Quiz`,
            description: `Timed chapter assessment test for ${chapter.title}`,
            durationMinutes: 15,
            totalMarks: Math.min(chapterQs.length, 5),
            passMarks: Math.ceil(Math.min(chapterQs.length, 5) * 0.6),
            isPublished: true,
            questions: {
              create: chapterQs.slice(0, 5).map((q, idx) => ({
                questionId: q.id,
                sequence: idx + 1,
              })),
            },
          },
        });
        quizzes.push(quiz);
      }
    }
  }

  return quizzes;
}
