import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkStudent10() {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: 'student10@flipgyan.com' },
        { email: 'student@flipgyan.com' },
      ],
    },
    include: {
      classGrade: true,
      subscriptions: { where: { status: 'ACTIVE' } },
    },
  });

  console.log('📌 Student 10 Record:', JSON.stringify(user, null, 2));
}

checkStudent10()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
