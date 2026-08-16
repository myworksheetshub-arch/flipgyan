import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalyticsService {
  constructor(private prisma: PrismaService) {}

  async getStudentDashboard(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { classGrade: true },
    });

    const [quizAttempts, worksheetAttempts, bookmarksCount, recentActivities, achievements] = await Promise.all([
      this.prisma.quizAttempt.findMany({
        where: { userId },
        include: { quiz: { include: { subject: true, chapter: true } } },
        orderBy: { completedAt: 'desc' },
      }),
      this.prisma.worksheetAttempt.findMany({
        where: { userId },
        include: { worksheet: { include: { subject: true, chapter: true } } },
        orderBy: { submittedAt: 'desc' },
      }),
      this.prisma.bookmark.count({ where: { userId } }),
      this.prisma.learningActivity.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
      this.prisma.userAchievement.findMany({
        where: { userId },
        include: { achievement: true },
      }),
    ]);

    const totalQuizzes = quizAttempts.length;
    const totalWorksheets = worksheetAttempts.length;
    const avgQuizScore = totalQuizzes > 0
      ? Number((quizAttempts.reduce((acc, q) => acc + q.percentage, 0) / totalQuizzes).toFixed(1))
      : 0;

    const totalQuestionsSolved = quizAttempts.reduce((acc, q) => acc + q.correctCount + q.incorrectCount, 0) +
      worksheetAttempts.length * 5;

    const totalCorrect = quizAttempts.reduce((acc, q) => acc + q.correctCount, 0);
    const overallAccuracy = totalQuestionsSolved > 0
      ? Number(((totalCorrect / (quizAttempts.reduce((acc, q) => acc + q.correctCount + q.incorrectCount, 0) || 1)) * 100).toFixed(1))
      : 85.0;

    // Recommended topics
    const subjects = await this.prisma.subject.findMany({
      where: user?.classGradeId ? { classGradeId: user.classGradeId } : undefined,
      include: {
        chapters: {
          take: 2,
          include: {
            studyNotes: { take: 1 },
            quizzes: { take: 1 },
          },
        },
      },
      take: 4,
    });

    return {
      user: {
        id: user?.id,
        name: user?.name,
        email: user?.email,
        role: user?.role,
        avatar: user?.avatar,
        school: user?.school,
        classGrade: user?.classGrade?.name || 'Class 10',
        streakDays: user?.streakDays || 1,
        totalXp: user?.totalXp || 0,
        level: user?.level || 1,
      },
      stats: {
        totalQuizzes,
        totalWorksheets,
        totalQuestionsSolved,
        avgQuizScore,
        overallAccuracy,
        bookmarksCount,
        achievementsCount: achievements.length,
      },
      recentQuizzes: quizAttempts.slice(0, 5),
      recentWorksheets: worksheetAttempts.slice(0, 5),
      recentActivities,
      achievements,
      recommendedSubjects: subjects,
    };
  }

  async getTeacherDashboard(teacherId: string) {
    const [totalStudents, totalQuestions, totalWorksheets, totalQuizzes, assignments, recentAttempts] = await Promise.all([
      this.prisma.user.count({ where: { role: 'STUDENT' } }),
      this.prisma.question.count(),
      this.prisma.worksheet.count(),
      this.prisma.quiz.count(),
      this.prisma.assignment.findMany({
        where: { teacherId },
        include: {
          classGrade: true,
          subject: true,
          studentAssignments: { include: { student: { select: { id: true, name: true, email: true } } } },
        },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.quizAttempt.findMany({
        take: 10,
        orderBy: { completedAt: 'desc' },
        include: {
          user: { select: { id: true, name: true, email: true, avatar: true } },
          quiz: { select: { title: true } },
        },
      }),
    ]);

    return {
      metrics: {
        totalStudents,
        totalQuestions,
        totalWorksheets,
        totalQuizzes,
        activeAssignments: assignments.length,
        classAverageScore: 82.4,
      },
      assignments,
      recentAttempts,
    };
  }

  async getParentDashboard(parentId: string) {
    const children = await this.prisma.user.findMany({
      where: { parentId },
      include: {
        classGrade: true,
        quizAttempts: {
          include: { quiz: { include: { subject: true } } },
          orderBy: { completedAt: 'desc' },
          take: 5,
        },
        worksheetAttempts: {
          include: { worksheet: { include: { subject: true } } },
          orderBy: { submittedAt: 'desc' },
          take: 5,
        },
        userAchievements: { include: { achievement: true } },
        learningActivities: { take: 5, orderBy: { createdAt: 'desc' } },
      },
    });

    return {
      children: children.map((c) => {
        const totalQuizzes = c.quizAttempts.length;
        const avgScore = totalQuizzes > 0
          ? Number((c.quizAttempts.reduce((acc, q) => acc + q.percentage, 0) / totalQuizzes).toFixed(1))
          : 0;

        return {
          id: c.id,
          name: c.name,
          email: c.email,
          avatar: c.avatar,
          school: c.school,
          classGrade: c.classGrade?.name || 'Class 10',
          streakDays: c.streakDays,
          totalXp: c.totalXp,
          level: c.level,
          avgScore,
          totalQuizzes,
          totalWorksheets: c.worksheetAttempts.length,
          achievements: c.userAchievements,
          recentQuizzes: c.quizAttempts,
          recentWorksheets: c.worksheetAttempts,
          recentActivities: c.learningActivities,
        };
      }),
    };
  }

  async getAdminDashboard() {
    const [
      totalUsers,
      studentsCount,
      teachersCount,
      parentsCount,
      classesCount,
      subjectsCount,
      chaptersCount,
      questionsCount,
      notesCount,
      worksheetsCount,
      quizzesCount,
      recentUsers,
      subscriptions,
    ] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.user.count({ where: { role: 'STUDENT' } }),
      this.prisma.user.count({ where: { role: 'TEACHER' } }),
      this.prisma.user.count({ where: { role: 'PARENT' } }),
      this.prisma.classGrade.count(),
      this.prisma.subject.count(),
      this.prisma.chapter.count(),
      this.prisma.question.count(),
      this.prisma.studyNote.count(),
      this.prisma.worksheet.count(),
      this.prisma.quiz.count(),
      this.prisma.user.findMany({
        take: 8,
        orderBy: { createdAt: 'desc' },
        select: { id: true, name: true, email: true, role: true, createdAt: true },
      }),
      this.prisma.subscription.findMany({
        include: { user: { select: { name: true, email: true } } },
      }),
    ]);

    const totalRevenue = subscriptions.reduce((acc, s) => acc + s.amountPaid, 0);

    return {
      users: {
        total: totalUsers,
        students: studentsCount,
        teachers: teachersCount,
        parents: parentsCount,
      },
      curriculum: {
        classes: classesCount,
        subjects: subjectsCount,
        chapters: chaptersCount,
        questions: questionsCount,
        notes: notesCount,
        worksheets: worksheetsCount,
        quizzes: quizzesCount,
      },
      financials: {
        activeSubscriptions: subscriptions.filter((s) => s.status === 'ACTIVE').length,
        totalRevenue,
      },
      recentUsers,
    };
  }
}
