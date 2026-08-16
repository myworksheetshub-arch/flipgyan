import { PrismaClient } from '@prisma/client';

export async function seedWorksheetQuestions(prisma: PrismaClient, worksheetId: string, questionIds: string[]) {
  const worksheetQuestions = [];
  for (let i = 0; i < questionIds.length; i++) {
    const wq = await prisma.worksheetQuestion.create({
      data: {
        worksheetId,
        questionId: questionIds[i],
        sequence: i + 1,
        marks: 1,
      },
    });
    worksheetQuestions.push(wq);
  }
  return worksheetQuestions;
}
