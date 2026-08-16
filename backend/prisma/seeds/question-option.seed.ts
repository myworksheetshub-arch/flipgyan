import { PrismaClient } from '@prisma/client';

export async function seedQuestionOptions(prisma: PrismaClient, questionId: string, optionsData: any[]) {
  const options = [];
  for (const opt of optionsData) {
    const createdOpt = await prisma.questionOption.create({
      data: {
        questionId,
        text: opt.text,
        isCorrect: opt.isCorrect,
        explanation: opt.explanation,
      },
    });
    options.push(createdOpt);
  }
  return options;
}
