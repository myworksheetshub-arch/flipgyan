import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class QuestionPapersService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: { classId?: string; subjectId?: string; search?: string }) {
    const where: any = {};

    if (query.classId) {
      if (!isNaN(Number(query.classId))) {
        where.classGrade = { number: Number(query.classId) };
      } else {
        where.classGradeId = query.classId;
      }
    }
    if (query.subjectId) where.subjectId = query.subjectId;
    if (query.search) {
      where.OR = [
        { title: { contains: query.search } },
        { examName: { contains: query.search } },
      ];
    }

    return this.prisma.questionPaper.findMany({
      where,
      include: {
        classGrade: true,
        subject: true,
        createdBy: {
          select: { id: true, name: true, email: true, role: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const paper = await this.prisma.questionPaper.findUnique({
      where: { id },
      include: {
        classGrade: true,
        subject: true,
        createdBy: { select: { id: true, name: true, email: true } },
      },
    });

    if (!paper) throw new NotFoundException('Question paper not found');
    return paper;
  }

  async generate(data: {
    title: string;
    examName: string;
    academicYear?: string;
    classGradeId: string;
    subjectId: string;
    chapterIds: string[];
    totalMarks: number;
    durationMinutes: number;
    difficultyDist: { easy: number; medium: number; hard: number };
    bloomDist?: { remember?: number; understand?: number; apply?: number; analyze?: number };
    instructions?: string;
    createdById?: string;
  }) {
    // Resolve classGradeId if number
    let cId = data.classGradeId;
    if (!isNaN(Number(cId))) {
      const cls = await this.prisma.classGrade.findUnique({ where: { number: Number(cId) } });
      if (cls) cId = cls.id;
    }

    // Retrieve questions from specified chapters
    const questions = await this.prisma.question.findMany({
      where: {
        chapterId: { in: data.chapterIds },
      },
      include: {
        options: { orderBy: { sequence: 'asc' } },
        chapter: true,
        topic: true,
      },
    });

    // Structure sections for CBSE standard format
    // Section A: 1-mark MCQs (e.g. 20 marks or 10 marks)
    // Section B: 2-mark Short Answer
    // Section C: 3-mark Short Answer
    // Section D: 5-mark Long Answer
    const mcqQuestions = questions.filter((q) => q.questionType === 'MCQ' || q.questionType === 'TRUE_FALSE');
    const otherQuestions = questions.filter((q) => q.questionType !== 'MCQ' && q.questionType !== 'TRUE_FALSE');

    const sections = [
      {
        section: 'Section A (Multiple Choice Questions)',
        instructions: 'Each question carries 1 mark. Select the most appropriate option.',
        marksPerQuestion: 1,
        questions: mcqQuestions.map((q, idx) => ({
          qNum: idx + 1,
          id: q.id,
          text: q.questionText,
          type: q.questionType,
          difficulty: q.difficulty,
          bloomLevel: q.bloomLevel,
          competency: q.competency,
          marks: 1,
          options: q.options.map((o, optIdx) => `${String.fromCharCode(65 + optIdx)}) ${o.text}`),
          answer: q.options.find((o) => o.isCorrect)?.text || 'N/A',
          explanation: q.explanation,
        })),
      },
      {
        section: 'Section B (Very Short / Short Answer Questions)',
        instructions: 'Each question carries 2 or 3 marks. Show all necessary working steps.',
        marksPerQuestion: 2,
        questions: (otherQuestions.length > 0 ? otherQuestions : mcqQuestions).slice(0, 5).map((q, idx) => ({
          qNum: mcqQuestions.length + idx + 1,
          id: q.id,
          text: q.questionText,
          type: 'SHORT_ANSWER',
          difficulty: q.difficulty,
          bloomLevel: q.bloomLevel,
          competency: q.competency,
          marks: 2,
          answer: q.answerText || q.explanation || 'Detailed step-by-step working required.',
          explanation: q.explanation,
        })),
      },
    ];

    const blueprint = {
      totalMarks: data.totalMarks,
      durationMinutes: data.durationMinutes,
      difficultyDistribution: data.difficultyDist,
      bloomDistribution: data.bloomDist || { remember: 25, understand: 35, apply: 30, analyze: 10 },
      chaptersCovered: data.chapterIds,
      totalQuestions: sections.reduce((acc, s) => acc + s.questions.length, 0),
    };

    const defaultInstructions = data.instructions ||
      '1. All questions are compulsory.\n2. The question paper consists of multiple sections.\n3. Section A contains 1-mark MCQs.\n4. Section B contains descriptive questions.\n5. Use of calculators is strictly prohibited.';

    const createdPaper = await this.prisma.questionPaper.create({
      data: {
        title: data.title,
        examName: data.examName,
        academicYear: data.academicYear || '2026-2027',
        classGradeId: cId,
        subjectId: data.subjectId,
        totalMarks: data.totalMarks,
        durationMinutes: data.durationMinutes,
        instructions: defaultInstructions,
        blueprintJson: JSON.stringify(blueprint),
        sectionsJson: JSON.stringify(sections),
        createdById: data.createdById,
      },
      include: {
        classGrade: true,
        subject: true,
      },
    });

    return createdPaper;
  }
}
