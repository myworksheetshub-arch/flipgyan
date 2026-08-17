import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorksheetsService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: {
    chapterId?: string;
    subjectId?: string;
    classId?: string;
    type?: string;
    difficulty?: string;
    search?: string;
  }) {
    const where: any = { isPublished: true };

    if (query.chapterId) where.chapterId = query.chapterId;
    if (query.subjectId) where.subjectId = query.subjectId;
    if (query.classId) {
      if (!isNaN(Number(query.classId))) {
        where.subject = { classGrade: { number: Number(query.classId) } };
      } else {
        where.subject = { classGradeId: query.classId };
      }
    }
    if (query.type) where.type = query.type;
    if (query.difficulty) where.difficulty = query.difficulty;
    if (query.search) {
      where.OR = [
        { title: { contains: query.search } },
        { description: { contains: query.search } },
      ];
    }

    return this.prisma.worksheet.findMany({
      where,
      include: {
        subject: { include: { classGrade: true } },
        chapter: true,
        _count: { select: { questions: true, attempts: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const worksheet = await this.prisma.worksheet.findUnique({
      where: { id },
      include: {
        subject: { include: { classGrade: true } },
        chapter: true,
        questions: {
          orderBy: { sequence: 'asc' },
          include: {
            question: {
              include: { options: { orderBy: { sequence: 'asc' } } },
            },
          },
        },
      },
    });

    if (!worksheet) throw new NotFoundException('Worksheet not found');

    const existingWQs = worksheet.questions || [];

    // If worksheet has fewer than 21 questions, fetch remaining authentic chapter questions
    if (existingWQs.length < 21) {
      const existingQIds = existingWQs.map((q) => q.questionId);
      const fallbackQuestions = await this.prisma.question.findMany({
        where: {
          chapterId: worksheet.chapterId,
          id: { notIn: existingQIds },
        },
        include: { options: { orderBy: { sequence: 'asc' } } },
        take: 21 - existingWQs.length,
      });

      const mappedFallbacks = fallbackQuestions.map((q, idx) => ({
        id: `fb-${q.id}`,
        worksheetId: worksheet.id,
        questionId: q.id,
        sequence: existingWQs.length + idx + 1,
        marks: q.marks || (existingWQs.length + idx < 13 ? 1 : existingWQs.length + idx < 17 ? 2 : existingWQs.length + idx < 19 ? 2 : existingWQs.length + idx < 20 ? 4 : 1),
        question: q,
      }));

      const allQs = [...existingWQs, ...mappedFallbacks].slice(0, 21);

      return {
        ...worksheet,
        totalQuestions: allQs.length,
        totalMarks: 30,
        questions: allQs,
      };
    }

    return {
      ...worksheet,
      totalQuestions: 21,
      totalMarks: 30,
      questions: existingWQs.slice(0, 21),
    };
  }

  async create(data: {
    title: string;
    description?: string;
    instructions?: string;
    type: string;
    difficulty: string;
    durationMinutes: number;
    totalMarks: number;
    totalQuestions?: number;
    answerKey?: string;
    chapterId: string;
    subjectId: string;
    createdById?: string;
    questionIds?: string[];
    customQuestions?: Array<{
      questionText: string;
      questionType?: string;
      marks?: number;
      explanation?: string;
      options?: Array<{
        text: string;
        isCorrect: boolean;
      }>;
    }>;
  }) {
    const { questionIds, customQuestions, ...wsData } = data;

    const worksheet = await this.prisma.worksheet.create({
      data: {
        title: wsData.title,
        description: wsData.description,
        instructions: wsData.instructions,
        type: wsData.type || 'PRACTICE',
        difficulty: wsData.difficulty || 'MEDIUM',
        durationMinutes: Number(wsData.durationMinutes || 30),
        totalMarks: Number(wsData.totalMarks || 25),
        totalQuestions: Number(wsData.totalQuestions || (customQuestions?.length || 5)),
        answerKey: wsData.answerKey,
        chapterId: wsData.chapterId,
        subjectId: wsData.subjectId,
        createdById: wsData.createdById,
        isPublished: true,
      },
    });

    let seq = 1;

    // Link existing questionIds if provided
    if (questionIds && questionIds.length > 0) {
      for (const qId of questionIds) {
        await this.prisma.worksheetQuestion.create({
          data: {
            worksheetId: worksheet.id,
            questionId: qId,
            sequence: seq++,
            marks: 1,
          },
        });
      }
    }

    // Create custom questions with options and correct flags if provided by teacher
    if (customQuestions && customQuestions.length > 0) {
      for (const cq of customQuestions) {
        if (!cq.questionText || !cq.questionText.trim()) continue;

        const newQuestion = await this.prisma.question.create({
          data: {
            questionText: cq.questionText,
            questionType: cq.questionType || 'MCQ',
            marks: cq.marks || 1,
            explanation: cq.explanation || null,
            chapterId: wsData.chapterId,
            createdById: wsData.createdById || null,
            options: {
              create: (cq.options || []).map((opt, oIdx) => ({
                text: opt.text || `Option ${oIdx + 1}`,
                isCorrect: !!opt.isCorrect,
                optionLabel: String.fromCharCode(65 + oIdx), // A, B, C, D
                sequence: oIdx + 1,
              })),
            },
          },
        });

        await this.prisma.worksheetQuestion.create({
          data: {
            worksheetId: worksheet.id,
            questionId: newQuestion.id,
            sequence: seq++,
            marks: cq.marks || 1,
          },
        });
      }
    } else if (!questionIds || questionIds.length === 0) {
      // Auto-fallback: pull existing chapter questions if none specified
      const chQs = await this.prisma.question.findMany({
        where: { chapterId: wsData.chapterId },
        take: wsData.totalQuestions || 7,
      });
      for (const q of chQs) {
        await this.prisma.worksheetQuestion.create({
          data: {
            worksheetId: worksheet.id,
            questionId: q.id,
            sequence: seq++,
            marks: q.marks || 1,
          },
        });
      }
    }

    return this.findById(worksheet.id);
  }

  async update(id: string, data: any) {
    const { questionIds, customQuestions, ...wsData } = data;

    await this.prisma.worksheet.update({
      where: { id },
      data: {
        ...(wsData.title && { title: wsData.title }),
        ...(wsData.description !== undefined && { description: wsData.description }),
        ...(wsData.instructions !== undefined && { instructions: wsData.instructions }),
        ...(wsData.type && { type: wsData.type }),
        ...(wsData.difficulty && { difficulty: wsData.difficulty }),
        ...(wsData.durationMinutes !== undefined && { durationMinutes: Number(wsData.durationMinutes) }),
        ...(wsData.totalMarks !== undefined && { totalMarks: Number(wsData.totalMarks) }),
        ...(wsData.totalQuestions !== undefined && { totalQuestions: Number(wsData.totalQuestions) }),
        ...(wsData.answerKey !== undefined && { answerKey: wsData.answerKey }),
        ...(wsData.chapterId && { chapterId: wsData.chapterId }),
        ...(wsData.subjectId && { subjectId: wsData.subjectId }),
        ...(wsData.isPublished !== undefined && { isPublished: !!wsData.isPublished }),
      },
    });

    if (questionIds && Array.isArray(questionIds)) {
      await this.prisma.worksheetQuestion.deleteMany({ where: { worksheetId: id } });
      let seq = 1;
      for (const qId of questionIds) {
        await this.prisma.worksheetQuestion.create({
          data: {
            worksheetId: id,
            questionId: qId,
            sequence: seq++,
            marks: 1,
          },
        });
      }
    }

    return this.findById(id);
  }

  async remove(id: string) {
    await this.prisma.worksheetQuestion.deleteMany({ where: { worksheetId: id } });
    await this.prisma.worksheetAttempt.deleteMany({ where: { worksheetId: id } });
    return this.prisma.worksheet.delete({ where: { id } });
  }

  async submitAttempt(worksheetId: string, userId: string, data: { answers: Record<string, any>; timeSpentSeconds: number }) {
    const worksheet = await this.findById(worksheetId);

    let score = 0;
    const totalMarks = worksheet.totalMarks || 30;
    const questionEvaluations: Record<string, any> = {};

    for (const wq of worksheet.questions) {
      const q = wq.question;
      const qMarks = wq.marks || (q.marks || 1);
      const studentAns = data.answers[q.id];

      if (studentAns === undefined || studentAns === null || studentAns === '') {
        questionEvaluations[q.id] = {
          marksEarned: 0,
          maxMarks: qMarks,
          status: 'UNANSWERED',
          userAnswer: null,
        };
        continue;
      }

      let marksEarned = 0;
      let status: 'CORRECT' | 'PARTIAL' | 'INCORRECT' = 'INCORRECT';

      if (q.questionType === 'MCQ' || q.questionType === 'TRUE_FALSE') {
        const correctOpt = q.options?.find((o) => o.isCorrect);
        const normStudent = String(studentAns).trim().toLowerCase();
        const normOptText = (correctOpt?.text || '').trim().toLowerCase();
        const normOptLabel = (correctOpt?.optionLabel || '').trim().toLowerCase();
        const normOptId = (correctOpt?.id || '').trim().toLowerCase();

        if (correctOpt && (normStudent === normOptText || normStudent === normOptLabel || normStudent === normOptId)) {
          marksEarned = qMarks;
          status = 'CORRECT';
        }
      } else if (q.questionType === 'MULTIPLE_SELECT') {
        const correctOpts = (q.options || []).filter((o) => o.isCorrect).map((o) => o.text.trim().toLowerCase());
        if (Array.isArray(studentAns)) {
          const normUserOpts = studentAns.map((a) => String(a).trim().toLowerCase());
          if (normUserOpts.length === correctOpts.length && normUserOpts.every((a) => correctOpts.includes(a))) {
            marksEarned = qMarks;
            status = 'CORRECT';
          }
        }
      } else {
        // Fill in blank / Short Answer / Solve / Case Study / HOTS
        const cleanUser = String(studentAns).trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '');
        const cleanAns = String(q.answerText || '').trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '');
        const cleanExp = String(q.explanation || '').trim().toLowerCase();

        if (cleanAns && cleanUser === cleanAns) {
          marksEarned = qMarks;
          status = 'CORRECT';
        } else if (cleanAns && (cleanUser.includes(cleanAns) || cleanAns.includes(cleanUser))) {
          marksEarned = qMarks;
          status = 'CORRECT';
        } else if (cleanUser.length > 0) {
          // Check if key numerical digits or terms match explanation
          const userNumbers: string[] = cleanUser.match(/-?\d+/g) || [];
          const expNumbers: string[] = (cleanAns + ' ' + cleanExp).match(/-?\d+/g) || [];
          const hasNumMatch = userNumbers.some((n) => expNumbers.includes(n));

          if (hasNumMatch) {
            marksEarned = qMarks;
            status = 'CORRECT';
          } else {
            marksEarned = Math.round(qMarks * 0.5 * 10) / 10;
            status = 'PARTIAL';
          }
        }
      }

      score += marksEarned;
      questionEvaluations[q.id] = {
        marksEarned,
        maxMarks: qMarks,
        status,
        userAnswer: studentAns,
      };
    }

    // Ensure score does not exceed totalMarks
    score = Math.min(totalMarks, Math.round(score * 10) / 10);
    const percentage = Number(((score / (totalMarks || 1)) * 100).toFixed(1));
    const xpEarned = Math.round(score * 10) + 25;

    const payloadAnswersJson = JSON.stringify({
      userAnswers: data.answers,
      evaluations: questionEvaluations,
    });

    const attempt = await this.prisma.worksheetAttempt.create({
      data: {
        worksheetId,
        userId,
        score,
        totalMarks,
        percentage,
        timeSpentSeconds: data.timeSpentSeconds || 0,
        answersJson: payloadAnswersJson,
        graded: true,
      },
    });

    // Update user analytics & XP
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        totalXp: { increment: xpEarned },
        lastActiveAt: new Date(),
      },
    });

    // Log Activity for student performance dashboard analytics
    await this.prisma.learningActivity.create({
      data: {
        userId,
        activityType: 'WORKSHEET_SUBMITTED',
        description: `Completed worksheet "${worksheet.title}" — Scored ${score}/${totalMarks} (${percentage}%)`,
        xpEarned,
      },
    });

    return {
      attempt,
      score,
      totalMarks,
      percentage,
      xpEarned,
      evaluations: questionEvaluations,
      answerKey: worksheet.answerKey,
    };
  }

  async getAttemptsByUser(userId: string) {
    return this.prisma.worksheetAttempt.findMany({
      where: { userId },
      include: {
        worksheet: {
          include: {
            subject: true,
            chapter: true,
          },
        },
      },
      orderBy: { submittedAt: 'desc' },
    });
  }
}
