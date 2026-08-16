import { PrismaClient } from '@prisma/client';

export async function seedClasses(prisma: PrismaClient) {
  console.log('📦 Seeding Classes (Class 5 - 12)...');
  const classesData = [
    { number: 5, name: 'Class 5', order: 1, description: 'CBSE Class 5 Foundation Curriculum' },
    { number: 6, name: 'Class 6', order: 2, description: 'CBSE Class 6 Middle School Standards' },
    { number: 7, name: 'Class 7', order: 3, description: 'CBSE Class 7 Intermediate Concepts' },
    { number: 8, name: 'Class 8', order: 4, description: 'CBSE Class 8 Advanced Foundation' },
    { number: 9, name: 'Class 9', order: 5, description: 'CBSE Class 9 Secondary Foundations' },
    { number: 10, name: 'Class 10', order: 6, description: 'CBSE Class 10 Board Exam Preparation' },
    { number: 11, name: 'Class 11', order: 7, description: 'CBSE Class 11 Senior Secondary Standards (PCM, PCB, Commerce)' },
    { number: 12, name: 'Class 12', order: 8, description: 'CBSE Class 12 Senior Secondary Board & Entrance Prep (JEE/NEET/CUET)' },
  ];

  const classes = [];
  for (const item of classesData) {
    const cls = await prisma.classGrade.upsert({
      where: { number: item.number },
      update: item,
      create: item,
    });
    classes.push(cls);
  }
  return classes;
}
