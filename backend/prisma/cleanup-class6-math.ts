import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateClass6MathChapters() {
  console.log('🔄 Aligning Class 6 Mathematics Chapters with 10 Ganita Prakash Chapters...');

  const math6Subject = await prisma.subject.findFirst({
    where: {
      code: 'MATH6',
      classGrade: { number: 6 },
    },
  });

  if (!math6Subject) {
    console.log('Class 6 Math subject not found!');
    return;
  }

  // Clear existing chapters for Class 6 Math to prevent old numbering overlap
  await prisma.chapter.deleteMany({
    where: { subjectId: math6Subject.id },
  });

  console.log('Deleted old Class 6 Math chapters. Now seeding fresh 10 Ganita Prakash chapters...');
}

updateClass6MathChapters()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
