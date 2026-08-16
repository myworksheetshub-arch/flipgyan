import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuizzesService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: {
    chapterId?: string;
    subjectId?: string;
    classId?: string;
    difficulty?: string;
    search?: string;
  }) {
    const where: any = { isPublished: true };

    if (query.chapterId) where.chapterId = query.chapterId;
    if (query.subjectId) where.subjectId = query.subjectId;
    if (query.classId && query.classId !== 'undefined') {
      if (!isNaN(Number(query.classId))) {
        where.subject = { classGrade: { number: Number(query.classId) } };
      } else {
        where.subject = { classGradeId: query.classId };
      }
    }
    if (query.difficulty) where.difficulty = query.difficulty;
    if (query.search) {
      where.OR = [
        { title: { contains: query.search } },
        { description: { contains: query.search } },
      ];
    }

    return this.prisma.quiz.findMany({
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
    const quiz = await this.prisma.quiz.findUnique({
      where: { id },
      include: {
        subject: { include: { classGrade: true } },
        chapter: { include: { topics: true } },
        questions: {
          orderBy: { sequence: 'asc' },
          include: {
            question: {
              include: {
                options: {
                  orderBy: { sequence: 'asc' },
                  select: {
                    id: true,
                    text: true,
                    sequence: true,
                  },
                },
                topic: true,
              },
            },
          },
        },
      },
    });

    if (!quiz) throw new NotFoundException('Quiz not found');

    // Ensure exactly 10 questions are returned per quiz session
    if (quiz.questions.length < 10 && quiz.chapterId) {
      const existingQIds = quiz.questions.map((q) => q.questionId);
      const extraQuestions = await this.prisma.question.findMany({
        where: {
          chapterId: quiz.chapterId,
          id: { notIn: existingQIds },
        },
        take: 10 - quiz.questions.length,
        include: {
          options: {
            orderBy: { sequence: 'asc' },
            select: { id: true, text: true, sequence: true },
          },
          topic: true,
        },
      });

      const syntheticExtra = extraQuestions.map((q, idx) => ({
        id: `extra-${q.id}`,
        quizId: quiz.id,
        questionId: q.id,
        sequence: quiz.questions.length + idx + 1,
        question: q,
      }));

      quiz.questions = [...quiz.questions, ...syntheticExtra] as any;
    }

    if (quiz.questions.length > 10) {
      quiz.questions = quiz.questions.slice(0, 10);
    }

    return quiz;
  }

  async findByIdWithAnswers(id: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id },
      include: {
        subject: { include: { classGrade: true } },
        chapter: true,
        questions: {
          orderBy: { sequence: 'asc' },
          include: {
            question: {
              include: {
                options: { orderBy: { sequence: 'asc' } },
                topic: true,
              },
            },
          },
        },
      },
    });

    if (!quiz) throw new NotFoundException('Quiz not found');
    return quiz;
  }

  async create(data: {
    title: string;
    description?: string;
    durationMinutes: number;
    totalMarks: number;
    passMarks: number;
    difficulty?: string;
    chapterId: string;
    subjectId: string;
    createdById?: string;
    questionIds?: string[];
    customQuestions?: Array<{
      questionText: string;
      questionType?: string;
      marks?: number;
      explanation?: string;
      options: Array<{
        text: string;
        isCorrect: boolean;
      }>;
    }>;
  }) {
    const { questionIds, customQuestions, ...qData } = data;

    const quiz = await this.prisma.quiz.create({
      data: {
        title: qData.title,
        description: qData.description,
        durationMinutes: Number(qData.durationMinutes || 15),
        totalMarks: Number(qData.totalMarks || 10),
        passMarks: Number(qData.passMarks || 5),
        difficulty: qData.difficulty || 'MEDIUM',
        chapterId: qData.chapterId,
        subjectId: qData.subjectId,
        createdById: qData.createdById,
        isPublished: true,
      },
    });

    let seq = 1;

    // Link existing questionIds if provided
    if (questionIds && questionIds.length > 0) {
      for (const qId of questionIds) {
        await this.prisma.quizQuestion.create({
          data: {
            quizId: quiz.id,
            questionId: qId,
            sequence: seq++,
          },
        });
      }
    }

    // Create custom questions with options and correct flag if provided by teacher
    if (customQuestions && customQuestions.length > 0) {
      for (const cq of customQuestions) {
        if (!cq.questionText || !cq.questionText.trim()) continue;

        const newQuestion = await this.prisma.question.create({
          data: {
            questionText: cq.questionText,
            questionType: cq.questionType || 'MCQ',
            marks: cq.marks || 1,
            explanation: cq.explanation || null,
            chapterId: qData.chapterId,
            createdById: qData.createdById || null,
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

        await this.prisma.quizQuestion.create({
          data: {
            quizId: quiz.id,
            questionId: newQuestion.id,
            sequence: seq++,
          },
        });
      }
    }

    return this.findById(quiz.id);
  }

  async update(id: string, data: any) {
    const { questionIds, customQuestions, ...qData } = data;

    await this.prisma.quiz.update({
      where: { id },
      data: {
        ...(qData.title && { title: qData.title }),
        ...(qData.description !== undefined && { description: qData.description }),
        ...(qData.durationMinutes !== undefined && { durationMinutes: Number(qData.durationMinutes) }),
        ...(qData.totalMarks !== undefined && { totalMarks: Number(qData.totalMarks) }),
        ...(qData.passMarks !== undefined && { passMarks: Number(qData.passMarks) }),
        ...(qData.difficulty && { difficulty: qData.difficulty }),
        ...(qData.chapterId && { chapterId: qData.chapterId }),
        ...(qData.subjectId && { subjectId: qData.subjectId }),
        ...(qData.isPublished !== undefined && { isPublished: !!qData.isPublished }),
      },
    });

    if (questionIds && Array.isArray(questionIds)) {
      await this.prisma.quizQuestion.deleteMany({ where: { quizId: id } });
      let seq = 1;
      for (const qId of questionIds) {
        await this.prisma.quizQuestion.create({
          data: {
            quizId: id,
            questionId: qId,
            sequence: seq++,
          },
        });
      }
    }

    return this.findById(id);
  }

  async remove(id: string) {
    await this.prisma.quizQuestion.deleteMany({ where: { quizId: id } });
    await this.prisma.quizAttempt.deleteMany({ where: { quizId: id } });
    return this.prisma.quiz.delete({ where: { id } });
  }

  async submitAttempt(
    quizId: string,
    userId: string,
    data: { answers: Record<string, any>; timeSpentSeconds: number },
  ) {
    const quiz = await this.findByIdWithAnswers(quizId);

    let score = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;
    const maxScore = quiz.totalMarks || quiz.questions.reduce((acc, q) => acc + (q.question.marks || 1), 0);

    const questionResults: any[] = [];
    const topicPerformance: Record<string, { total: number; correct: number }> = {};
    const difficultyPerformance: Record<string, { total: number; correct: number }> = {};
    const bloomPerformance: Record<string, { total: number; correct: number }> = {};

    for (const qq of quiz.questions) {
      const q = qq.question;
      const studentAns = data.answers[q.id];
      const marks = q.marks || 1;
      const negMarks = q.negativeMarks || 0;
      const topicName = q.topic?.title || 'General';

      if (!topicPerformance[topicName]) topicPerformance[topicName] = { total: 0, correct: 0 };
      if (!difficultyPerformance[q.difficulty]) difficultyPerformance[q.difficulty] = { total: 0, correct: 0 };
      if (!bloomPerformance[q.bloomLevel]) bloomPerformance[q.bloomLevel] = { total: 0, correct: 0 };

      topicPerformance[topicName].total++;
      difficultyPerformance[q.difficulty].total++;
      bloomPerformance[q.bloomLevel].total++;

      let isCorrect = false;
      let isSkipped = studentAns === undefined || studentAns === null || studentAns === '';

      if (isSkipped) {
        skippedCount++;
      } else {
        if (q.questionType === 'MCQ' || q.questionType === 'TRUE_FALSE') {
          const correctOpt = q.options.find((o) => o.isCorrect);
          isCorrect = !!correctOpt && (studentAns === correctOpt.text || studentAns === correctOpt.id);
        } else if (q.questionType === 'MULTIPLE_SELECT') {
          const correctOpts = q.options.filter((o) => o.isCorrect).map((o) => o.text);
          isCorrect = Array.isArray(studentAns) &&
            studentAns.length === correctOpts.length &&
            studentAns.every((val) => correctOpts.includes(val));
        } else {
          isCorrect = q.answerText ? studentAns.toString().trim().toLowerCase() === q.answerText.trim().toLowerCase() : true;
        }

        if (isCorrect) {
          correctCount++;
          score += marks;
          topicPerformance[topicName].correct++;
          difficultyPerformance[q.difficulty].correct++;
          bloomPerformance[q.bloomLevel].correct++;
        } else {
          incorrectCount++;
          score = Math.max(0, score - negMarks);
        }
      }

      questionResults.push({
        questionId: q.id,
        questionText: q.questionText,
        questionType: q.questionType,
        difficulty: q.difficulty,
        bloomLevel: q.bloomLevel,
        competency: q.competency,
        marks,
        negativeMarks: negMarks,
        studentAnswer: studentAns || null,
        correctAnswer: q.options.filter((o) => o.isCorrect).map((o) => o.text).join(', ') || q.answerText,
        isCorrect,
        isSkipped,
        explanation: q.explanation,
        hint: q.hint,
        options: q.options,
      });
    }

    const percentage = Number(((score / (maxScore || 1)) * 100).toFixed(1));
    const accuracy = correctCount + incorrectCount > 0
      ? Number(((correctCount / (correctCount + incorrectCount)) * 100).toFixed(1))
      : 0;

    const attempt = await this.prisma.quizAttempt.create({
      data: {
        quizId,
        userId,
        score,
        maxScore,
        percentage,
        correctCount,
        incorrectCount,
        skippedCount,
        timeSpentSeconds: data.timeSpentSeconds || 0,
        answersJson: JSON.stringify(data.answers),
      },
    });

    // Gamification: XP + Badges Check
    const xpGained = Math.round(score * 20) + (percentage >= 80 ? 50 : 20);
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        totalXp: { increment: xpGained },
        streakDays: { increment: 1 },
      },
    });

    await this.prisma.learningActivity.create({
      data: {
        userId,
        activityType: 'QUIZ_COMPLETED',
        description: `Completed "${quiz.title}" — ${score}/${maxScore} (${percentage}%)`,
        xpEarned: xpGained,
      },
    });

    return {
      attemptId: attempt.id,
      quizTitle: quiz.title,
      score,
      maxScore,
      percentage,
      accuracy,
      correctCount,
      incorrectCount,
      skippedCount,
      timeSpentSeconds: data.timeSpentSeconds,
      xpGained,
      passed: score >= quiz.passMarks,
      topicPerformance,
      difficultyPerformance,
      bloomPerformance,
      questions: questionResults,
    };
  }

  async getAttemptsByUser(userId: string) {
    return this.prisma.quizAttempt.findMany({
      where: { userId },
      include: {
        quiz: {
          include: {
            subject: true,
            chapter: true,
          },
        },
      },
      orderBy: { completedAt: 'desc' },
    });
  }

  async getAttemptDetails(attemptId: string) {
    const attempt = await this.prisma.quizAttempt.findUnique({
      where: { id: attemptId },
      include: {
        quiz: {
          include: {
            subject: true,
            chapter: true,
            questions: {
              include: {
                question: {
                  include: { options: true, topic: true },
                },
              },
            },
          },
        },
      },
    });

    if (!attempt) throw new NotFoundException('Attempt not found');
    return attempt;
  }
}
