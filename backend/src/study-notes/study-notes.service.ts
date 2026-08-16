import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StudyNotesService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: { chapterId?: string; subjectId?: string; classId?: string; search?: string }) {
    const where: any = { isPublished: true };

    const chapterWhere: any = {};
    if (query.chapterId) where.chapterId = query.chapterId;
    if (query.subjectId) chapterWhere.subjectId = query.subjectId;
    if (query.classId) {
      const classNum = parseInt(String(query.classId).replace(/\D/g, ''), 10);
      if (!isNaN(classNum) && classNum > 0) {
        chapterWhere.subject = { ...(chapterWhere.subject || {}), classGrade: { number: classNum } };
      } else {
        chapterWhere.subject = { ...(chapterWhere.subject || {}), classGradeId: query.classId };
      }
    }
    if (Object.keys(chapterWhere).length > 0) {
      where.chapter = chapterWhere;
    }
    if (query.search) {
      where.OR = [
        { title: { contains: query.search } },
        { summary: { contains: query.search } },
      ];
    }

    return this.prisma.studyNote.findMany({
      where,
      include: {
        chapter: {
          include: {
            subject: { include: { classGrade: true } },
          },
        },
        topic: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string, userId?: string) {
    const note = await this.prisma.studyNote.findUnique({
      where: { id },
      include: {
        chapter: {
          include: {
            subject: { include: { classGrade: true } },
            worksheets: { take: 3 },
            quizzes: { take: 3 },
            topics: { orderBy: { order: 'asc' } },
          },
        },
        topic: true,
      },
    });

    if (!note) throw new NotFoundException('Study note not found');

    // Increment views count asynchronously
    await this.prisma.studyNote.update({
      where: { id },
      data: { viewsCount: { increment: 1 } },
    });

    // Record activity if user is authenticated
    if (userId) {
      await this.prisma.learningActivity.create({
        data: {
          userId,
          activityType: 'NOTE_READ',
          description: `Reviewed note: ${note.title}`,
          xpEarned: 15,
        },
      });

      await this.prisma.user.update({
        where: { id: userId },
        data: { totalXp: { increment: 15 } },
      });
    }

    return note;
  }

  async create(data: any) {
    return this.prisma.studyNote.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.studyNote.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.studyNote.delete({ where: { id } });
  }
}
