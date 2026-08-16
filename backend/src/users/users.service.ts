import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(role?: string) {
    const where: any = {};
    if (role) where.role = role;

    const users = await this.prisma.user.findMany({
      where,
      include: {
        classGrade: true,
        subscriptions: {
          where: { status: 'ACTIVE' },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return users.map(({ passwordHash, ...user }) => {
      const activeSub = user.subscriptions && user.subscriptions.length > 0 ? user.subscriptions[0] : null;
      const subscriptionTier = activeSub ? activeSub.planName : 'FREE';
      const isPro = activeSub ? (activeSub.planName === 'PRO_STUDENT' || activeSub.planName === 'PRO_TEACHER' || activeSub.planName === 'SCHOOL') : false;
      return {
        ...user,
        subscriptionTier,
        isPro,
      };
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        classGrade: true,
        userAchievements: { include: { achievement: true } },
        subscriptions: { where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' }, take: 1 },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { passwordHash, ...safeUser } = user;
    const activeSub = safeUser.subscriptions && safeUser.subscriptions.length > 0 ? safeUser.subscriptions[0] : null;
    const subscriptionTier = activeSub ? activeSub.planName : 'FREE';
    const isPro = activeSub ? (activeSub.planName === 'PRO_STUDENT' || activeSub.planName === 'PRO_TEACHER' || activeSub.planName === 'SCHOOL') : false;

    return {
      ...safeUser,
      subscriptionTier,
      isPro,
    };
  }

  async grantProStatus(userId: string, planName: string = 'PRO_STUDENT') {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    // Deactivate old subscriptions
    await this.prisma.subscription.updateMany({
      where: { userId, status: 'ACTIVE' },
      data: { status: 'EXPIRED' },
    });

    // Create 1-year active PRO subscription
    await this.prisma.subscription.create({
      data: {
        userId,
        planName,
        status: 'ACTIVE',
        startDate: new Date(),
        endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year validity
        amountPaid: planName === 'PRO_STUDENT' ? 499 : planName === 'PRO_TEACHER' ? 1499 : 0,
      },
    });

    return this.findById(userId);
  }

  async revokeProStatus(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    // Expire active subscriptions
    await this.prisma.subscription.updateMany({
      where: { userId, status: 'ACTIVE' },
      data: { status: 'EXPIRED' },
    });

    return this.findById(userId);
  }

  async update(id: string, data: { name?: string; phone?: string; school?: string; avatar?: string; classGradeId?: string }) {
    let classGradeId = data.classGradeId;
    if (classGradeId && !isNaN(Number(classGradeId))) {
      const cls = await this.prisma.classGrade.findUnique({
        where: { number: Number(classGradeId) },
      });
      if (cls) classGradeId = cls.id;
    }

    const updateData: any = { ...data };
    if (classGradeId) {
      updateData.classGradeId = classGradeId;
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data: updateData,
      include: { classGrade: true },
    });

    const { passwordHash, ...safeUser } = updated;
    return safeUser;
  }

  async getChildren(parentId: string) {
    const children = await this.prisma.user.findMany({
      where: { parentId },
      include: {
        classGrade: true,
        quizAttempts: {
          take: 5,
          orderBy: { completedAt: 'desc' },
          include: { quiz: { include: { subject: true, chapter: true } } },
        },
        worksheetAttempts: {
          take: 5,
          orderBy: { submittedAt: 'desc' },
          include: { worksheet: { include: { subject: true } } },
        },
      },
    });

    return children.map(({ passwordHash, ...user }) => user);
  }
}
