import { PrismaClient } from '@prisma/client';

export async function seedQuizQuestions(prisma: PrismaClient, quizId: string, questionIds: string[]) {
  const quizQuestions = [];
  for (let i = 0; i < questionIds.length; i++) {
    const qq = await prisma.quizQuestion.create({
      data: {
        quizId,
        questionId: questionIds[i],
        sequence: i + 1,
      },
    });
    quizQuestions.push(qq);
  }
  return quizQuestions;
}
