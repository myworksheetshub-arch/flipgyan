import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CurriculumService {
  constructor(private prisma: PrismaService) {}

  // Classes
  async getClasses() {
    return this.prisma.classGrade.findMany({
      orderBy: { order: 'asc' },
      include: {
        _count: {
          select: { subjects: true, users: true },
        },
      },
    });
  }

  async getClassById(id: string) {
    const classGrade = await this.prisma.classGrade.findUnique({
      where: { id },
      include: {
        subjects: {
          include: {
            _count: { select: { chapters: true, worksheets: true, quizzes: true } },
          },
        },
      },
    });
    if (!classGrade) throw new NotFoundException('Class not found');
    return classGrade;
  }

  // Subjects
  async getSubjects(classId?: string) {
    const where: any = {};
    if (classId) {
      if (!isNaN(Number(classId))) {
        const cls = await this.prisma.classGrade.findUnique({ where: { number: Number(classId) } });
        if (cls) where.classGradeId = cls.id;
      } else {
        where.classGradeId = classId;
      }
    }

    return this.prisma.subject.findMany({
      where,
      include: {
        classGrade: true,
        _count: {
          select: { chapters: true, worksheets: true, quizzes: true },
        },
      },
      orderBy: { name: 'asc' },
    });
  }

  async getSubjectById(id: string) {
    const subject = await this.prisma.subject.findUnique({
      where: { id },
      include: {
        classGrade: true,
        chapters: {
          orderBy: { chapterNumber: 'asc' },
          include: {
            topics: { orderBy: { order: 'asc' } },
            _count: { select: { studyNotes: true, questions: true, worksheets: true, quizzes: true } },
          },
        },
      },
    });
    if (!subject) throw new NotFoundException('Subject not found');
    return subject;
  }

  // Chapters
  async getChapters(subjectId?: string) {
    const where: any = {};
    if (subjectId) where.subjectId = subjectId;

    return this.prisma.chapter.findMany({
      where,
      include: {
        subject: { include: { classGrade: true } },
        topics: { orderBy: { order: 'asc' } },
        _count: { select: { studyNotes: true, questions: true, worksheets: true, quizzes: true } },
      },
      orderBy: { chapterNumber: 'asc' },
    });
  }

  async getChapterById(id: string) {
    const chapter = await this.prisma.chapter.findUnique({
      where: { id },
      include: {
        subject: { include: { classGrade: true } },
        topics: { orderBy: { order: 'asc' } },
        studyNotes: true,
        worksheets: true,
        quizzes: true,
        questions: {
          include: { options: true },
        },
      },
    });
    if (!chapter) throw new NotFoundException('Chapter not found');
    return chapter;
  }

  // Admin creations & updates
  async createClass(data: { name: string; number: number; order?: number; description?: string }) {
    return this.prisma.classGrade.create({ data });
  }

  async updateClass(id: string, data: { name?: string; number?: number; order?: number; description?: string }) {
    return this.prisma.classGrade.update({ where: { id }, data });
  }

  async deleteClass(id: string) {
    return this.prisma.classGrade.delete({ where: { id } });
  }

  async createSubject(data: { name: string; code: string; icon?: string; color?: string; classGradeId: string }) {
    return this.prisma.subject.create({ data });
  }

  async updateSubject(id: string, data: { name?: string; code?: string; icon?: string; color?: string; classGradeId?: string }) {
    return this.prisma.subject.update({ where: { id }, data });
  }

  async deleteSubject(id: string) {
    return this.prisma.subject.delete({ where: { id } });
  }

  async createChapter(data: { title: string; chapterNumber: number; description?: string; subjectId: string }) {
    return this.prisma.chapter.create({ data });
  }

  async updateChapter(id: string, data: { title?: string; chapterNumber?: number; description?: string; subjectId?: string }) {
    return this.prisma.chapter.update({ where: { id }, data });
  }

  async deleteChapter(id: string) {
    return this.prisma.chapter.delete({ where: { id } });
  }

  async createTopic(data: { title: string; order?: number; summary?: string; chapterId: string }) {
    return this.prisma.topic.create({ data });
  }
}
