import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkStudent() {
  const user = await prisma.user.findUnique({
    where: { email: 'student@flipgyan.com' },
    include: {
      subscriptions: true,
    },
  });

  console.log('📌 Student User Record:', JSON.stringify(user, null, 2));

  // Also make sure student@flipgyan.com IS A PRO_STUDENT
  if (user) {
    // Expire existing
    await prisma.subscription.updateMany({
      where: { userId: user.id },
      data: { status: 'EXPIRED' },
    });

    // Create 1-year PRO_STUDENT active subscription
    const sub = await prisma.subscription.create({
      data: {
        userId: user.id,
        planName: 'PRO_STUDENT',
        status: 'ACTIVE',
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        amountPaid: 499,
      },
    });

    console.log('🎉 Added 1-Year PRO_STUDENT Subscription for student@flipgyan.com:', sub);
  }
}

checkStudent()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
