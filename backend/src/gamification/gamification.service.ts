import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GamificationService {
  constructor(private prisma: PrismaService) {}

  async getAchievements(userId?: string) {
    const achievements = await this.prisma.achievement.findMany();
    if (!userId) return achievements;

    const userAchievements = await this.prisma.userAchievement.findMany({
      where: { userId },
    });
    const unlockedIds = new Set(userAchievements.map((ua) => ua.achievementId));

    return achievements.map((a) => ({
      ...a,
      isUnlocked: unlockedIds.has(a.id),
      unlockedAt: userAchievements.find((ua) => ua.achievementId === a.id)?.unlockedAt || null,
    }));
  }

  async getLeaderboard(period = 'ALL_TIME') {
    const users = await this.prisma.user.findMany({
      where: { role: 'STUDENT' },
      select: {
        id: true,
        name: true,
        avatar: true,
        totalXp: true,
        level: true,
        streakDays: true,
        school: true,
        classGrade: { select: { name: true } },
      },
      orderBy: { totalXp: 'desc' },
      take: 20,
    });

    return users.map((u, index) => ({
      rank: index + 1,
      ...u,
    }));
  }
}
