const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function checkAndSeedUsers() {
  const users = await prisma.user.findMany({
    select: { id: true, email: true, role: true, name: true }
  });
  console.log('Current users in DB:', users);

  const demoUsers = [
    {
      email: 'student@flipgyan.com',
      name: 'Rohan Sharma (Student)',
      role: 'STUDENT',
      school: 'Delhi Public School',
      streakDays: 14,
      totalXp: 3400,
      level: 12,
    },
    {
      email: 'student7@flipgyan.com',
      name: 'Rohan Sharma (Class 7)',
      role: 'STUDENT',
      school: 'Delhi Public School',
      streakDays: 14,
      totalXp: 3400,
      level: 12,
    },
    {
      email: 'teacher@flipgyan.com',
      name: 'Priya Sharma (Teacher)',
      role: 'TEACHER',
      school: 'Delhi Public School',
      streakDays: 30,
      totalXp: 8500,
      level: 25,
    },
    {
      email: 'parent@flipgyan.com',
      name: 'Rajesh Sharma (Parent)',
      role: 'PARENT',
      school: 'Parent Portal',
      streakDays: 5,
      totalXp: 1200,
      level: 5,
    },
    {
      email: 'admin@flipgyan.com',
      name: 'System Admin',
      role: 'ADMIN',
      school: 'FlipGyan HQ',
      streakDays: 100,
      totalXp: 20000,
      level: 50,
    }
  ];

  const defaultClass = await prisma.classGrade.findFirst({ where: { number: 7 } }) || await prisma.classGrade.findFirst();
  const passwordHash = await bcrypt.hash('password123', 10);

  console.log('\nEnsuring all demo users exist with password "password123"...');
  for (const u of demoUsers) {
    const upserted = await prisma.user.upsert({
      where: { email: u.email },
      update: {
        passwordHash,
        name: u.name,
        role: u.role,
        classGradeId: defaultClass ? defaultClass.id : null,
      },
      create: {
        email: u.email,
        passwordHash,
        name: u.name,
        role: u.role,
        classGradeId: defaultClass ? defaultClass.id : null,
        school: u.school,
        streakDays: u.streakDays,
        totalXp: u.totalXp,
        level: u.level,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
      }
    });
    console.log(`✅ User ready: ${upserted.email} (Role: ${upserted.role})`);
  }

  await prisma.$disconnect();
}

checkAndSeedUsers().catch(e => {
  console.error('Error:', e);
  prisma.$disconnect();
});
