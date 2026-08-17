import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: {
    chapterId?: string;
    subjectId?: string;
    classId?: string;
    difficulty?: string;
    bloomLevel?: string;
    competency?: string;
    questionType?: string;
    status?: string;
    search?: string;
    take?: number;
    skip?: number;
  }) {
    const where: any = {};

    if (query.chapterId) where.chapterId = query.chapterId;
    if (query.subjectId) where.chapter = { subjectId: query.subjectId };
    if (query.classId) {
      if (!isNaN(Number(query.classId))) {
        where.chapter = { subject: { classGrade: { number: Number(query.classId) } } };
      } else {
        where.chapter = { subject: { classGradeId: query.classId } };
      }
    }
    if (query.difficulty) where.difficulty = query.difficulty;
    if (query.bloomLevel) where.bloomLevel = query.bloomLevel;
    if (query.competency) where.competency = query.competency;
    if (query.questionType) where.questionType = query.questionType;
    if (query.search) {
      where.OR = [
        { questionText: { contains: query.search, mode: 'insensitive' } },
        { explanation: { contains: query.search, mode: 'insensitive' } },
        { questionCode: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [total, items] = await Promise.all([
      this.prisma.question.count({ where }),
      this.prisma.question.findMany({
        where,
        include: {
          options: { orderBy: { sequence: 'asc' } },
          rubrics: { orderBy: { displayOrder: 'asc' } },
          media: { orderBy: { displayOrder: 'asc' } },
          chapter: {
            include: {
              subject: { include: { classGrade: true } },
            },
          },
          topic: true,
        },
        orderBy: { createdAt: 'desc' },
        take: query.take ? Number(query.take) : 50,
        skip: query.skip ? Number(query.skip) : 0,
      }),
    ]);

    return { total, items };
  }

  async search(searchQuery: string, filters: any = {}) {
    return this.findAll({
      search: searchQuery,
      ...filters,
    });
  }

  async findRandom(params: {
    classGradeId?: string;
    subjectId?: string;
    chapterIds?: string[];
    questionType?: string;
    difficulty?: string;
    count?: number;
  }) {
    const count = params.count || 10;
    const where: any = {};

    if (params.chapterIds && params.chapterIds.length > 0) {
      where.chapterId = { in: params.chapterIds };
    } else if (params.subjectId) {
      where.chapter = { subjectId: params.subjectId };
    }

    if (params.questionType) where.questionType = params.questionType;
    if (params.difficulty) where.difficulty = params.difficulty;

    const allMatching = await this.prisma.question.findMany({
      where,
      include: {
        options: { orderBy: { sequence: 'asc' } },
        rubrics: { orderBy: { displayOrder: 'asc' } },
        media: { orderBy: { displayOrder: 'asc' } },
      },
    });

    // Shuffle and pick requested count
    const shuffled = [...allMatching].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  async findById(id: string) {
    const question = await this.prisma.question.findUnique({
      where: { id },
      include: {
        options: { orderBy: { sequence: 'asc' } },
        rubrics: { orderBy: { displayOrder: 'asc' } },
        media: { orderBy: { displayOrder: 'asc' } },
        versions: { orderBy: { versionNumber: 'desc' } },
        chapter: {
          include: {
            subject: { include: { classGrade: true } },
          },
        },
        topic: true,
      },
    });

    if (!question) throw new NotFoundException('Question not found');
    return question;
  }

  async create(data: any, userRole?: string) {
    const { options, rubrics, media, chapterName, subjectName, className, ...qData } = data;

    // Resolve chapterId if chapterName or title is provided without ID
    let resolvedChapterId = qData.chapterId;
    if (!resolvedChapterId && chapterName) {
      const ch = await this.prisma.chapter.findFirst({
        where: {
          OR: [
            { title: { contains: chapterName, mode: 'insensitive' } },
            { name: { contains: chapterName, mode: 'insensitive' } },
          ],
        },
      });
      if (ch) resolvedChapterId = ch.id;
    }

    // Role-based status: Teachers submit for REVIEW, Admins publish as APPROVED
    let status = qData.status;
    if (!status) {
      status = userRole === 'TEACHER' ? 'REVIEW' : 'APPROVED';
    }

    const question = await this.prisma.question.create({
      data: {
        ...qData,
        chapterId: resolvedChapterId,
        status,
        options: options && options.length > 0
          ? {
              create: options.map((opt: any, idx: number) => ({
                optionLabel: opt.optionLabel || String.fromCharCode(65 + idx),
                optionText: opt.optionText || opt.text,
                text: opt.text || opt.optionText,
                isCorrect: Boolean(opt.isCorrect),
                explanation: opt.explanation,
                sequence: opt.sequence || idx + 1,
              })),
            }
          : undefined,
        rubrics: rubrics && rubrics.length > 0
          ? {
              create: rubrics.map((rub: any, idx: number) => ({
                criterion: rub.criterion,
                expectedAnswer: rub.expectedAnswer || rub.expectedResponse || null,
                marks: Number(rub.marks || 1),
                displayOrder: rub.displayOrder || idx + 1,
              })),
            }
          : undefined,
        media: media && media.length > 0
          ? {
              create: media.map((m: any, idx: number) => ({
                mediaType: m.mediaType,
                fileUrl: m.fileUrl,
                caption: m.caption || m.altText || null,
                displayOrder: m.displayOrder || idx + 1,
              })),
            }
          : undefined,
      },
      include: {
        options: true,
        rubrics: true,
        media: true,
      },
    });

    return question;
  }

  async bulkCreate(questions: any[], userId?: string, userRole?: string) {
    if (!Array.isArray(questions) || questions.length === 0) {
      throw new BadRequestException('Questions array cannot be empty');
    }

    const created = [];
    for (const q of questions) {
      const res = await this.create({ ...q, createdById: userId }, userRole);
      created.push(res);
    }
    return { count: created.length, items: created };
  }

  async importQuestions(payload: { chapterId: string; questions: any[] }, userId?: string, userRole?: string) {
    const { chapterId, questions } = payload;
    if (!chapterId) throw new BadRequestException('Chapter ID is required for import');

    const formatted = questions.map((q) => ({
      ...q,
      chapterId,
      createdById: userId,
    }));

    return this.bulkCreate(formatted, userId, userRole);
  }

  async reviewQuestion(id: string, reviewNotes?: string, reviewerId?: string) {
    const question = await this.findById(id);

    // Record a version snapshot before updating status
    await this.prisma.questionVersion.create({
      data: {
        questionId: question.id,
        versionNumber: (question.versions?.length || 0) + 1,
        questionText: question.questionText,
        questionData: JSON.stringify(question),
        changeReason: reviewNotes || 'Question reviewed by Admin/Teacher',
        createdById: reviewerId,
      },
    });

    return question;
  }

  async approveQuestion(id: string, approverId?: string) {
    const question = await this.findById(id);

    await this.prisma.questionVersion.create({
      data: {
        questionId: question.id,
        versionNumber: (question.versions?.length || 0) + 1,
        questionText: question.questionText,
        questionData: JSON.stringify(question),
        changeReason: 'Question approved by Admin for master question bank',
        createdById: approverId,
      },
    });

    return this.prisma.question.update({
      where: { id },
      data: { status: 'APPROVED' },
    });
  }

  async rejectQuestion(id: string, reason?: string, reviewerId?: string) {
    const question = await this.findById(id);

    await this.prisma.questionVersion.create({
      data: {
        questionId: question.id,
        versionNumber: (question.versions?.length || 0) + 1,
        questionText: question.questionText,
        questionData: JSON.stringify(question),
        changeReason: reason || 'Question rejected by Admin',
        createdById: reviewerId,
      },
    });

    return this.prisma.question.update({
      where: { id },
      data: { status: 'REJECTED' },
    });
  }

  async update(id: string, data: any) {
    const { options, rubrics, media, ...qData } = data;

    if (options) {
      await this.prisma.questionOption.deleteMany({ where: { questionId: id } });
      await this.prisma.questionOption.createMany({
        data: options.map((opt: any, idx: number) => ({
          questionId: id,
          optionLabel: opt.optionLabel || String.fromCharCode(65 + idx),
          optionText: opt.optionText || opt.text,
          text: opt.text || opt.optionText,
          isCorrect: Boolean(opt.isCorrect),
          explanation: opt.explanation,
          sequence: opt.sequence || idx + 1,
        })),
      });
    }

    if (rubrics) {
      await this.prisma.questionRubric.deleteMany({ where: { questionId: id } });
      await this.prisma.questionRubric.createMany({
        data: rubrics.map((rub: any, idx: number) => ({
          questionId: id,
          criterion: rub.criterion,
          expectedAnswer: rub.expectedAnswer || rub.expectedResponse || null,
          marks: Number(rub.marks || 1),
          displayOrder: rub.displayOrder || idx + 1,
        })),
      });
    }

    if (media) {
      await this.prisma.questionMedia.deleteMany({ where: { questionId: id } });
      await this.prisma.questionMedia.createMany({
        data: media.map((m: any, idx: number) => ({
          questionId: id,
          mediaType: m.mediaType,
          fileUrl: m.fileUrl,
          caption: m.caption || m.altText || null,
          displayOrder: m.displayOrder || idx + 1,
        })),
      });
    }

    return this.prisma.question.update({
      where: { id },
      data: qData,
      include: {
        options: true,
        rubrics: true,
        media: true,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.question.delete({ where: { id } });
  }
}
