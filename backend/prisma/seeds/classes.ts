import { PrismaClient } from '@prisma/client';

export async function seedClasses(
  prisma: PrismaClient,
) {

  const school = await prisma.school.upsert({
    where: {
      code: 'DEMO',
    },

    update: {},

    create: {
      name: 'Demo School',
      code: 'DEMO',
      board: 'CBSE',
    },
  });

  const classes = [
    { name: 'Class 1', classNo: 1 },
    { name: 'Class 2', classNo: 2 },
    { name: 'Class 3', classNo: 3 },
    { name: 'Class 4', classNo: 4 },
    { name: 'Class 5', classNo: 5 },
    { name: 'Class 6', classNo: 6 },
    { name: 'Class 7', classNo: 7 },
    { name: 'Class 8', classNo: 8 },
    { name: 'Class 9', classNo: 9 },
    { name: 'Class 10', classNo: 10 },
    { name: 'Class 11', classNo: 11 },
    { name: 'Class 12', classNo: 12 },
  ];

  for (const item of classes) {

    await prisma.class.upsert({
      where: {
        schoolId_classNo: {
          schoolId: school.id,
          classNo: item.classNo,
        },
      },

      update: {
        name: item.name,
      },

      create: {
        schoolId: school.id,
        name: item.name,
        classNo: item.classNo,
      },
    });
  }

  console.log('✅ Classes seeded');

  return school;
}

// Runnable standalone runner if invoked directly
if (require.main === module) {
  const prisma = new PrismaClient();
  seedClasses(prisma)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
