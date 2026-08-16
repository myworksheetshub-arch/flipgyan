import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async globalSearch(query: { q: string; type?: string; classId?: string; subjectId?: string }) {
    const q = query.q?.trim();
    if (!q) {
      return { notes: [], worksheets: [], quizzes: [], questions: [], papers: [] };
    }

    const results: any = {};

    if (!query.type || query.type === 'NOTES') {
      results.notes = await this.prisma.studyNote.findMany({
        where: {
          OR: [{ title: { contains: q } }, { summary: { contains: q } }],
        },
        include: {
          chapter: { include: { subject: { include: { classGrade: true } } } },
        },
        take: 8,
      });
    }

    if (!query.type || query.type === 'WORKSHEETS') {
      results.worksheets = await this.prisma.worksheet.findMany({
        where: {
          OR: [{ title: { contains: q } }, { description: { contains: q } }],
        },
        include: { subject: { include: { classGrade: true } }, chapter: true },
        take: 8,
      });
    }

    if (!query.type || query.type === 'QUIZZES') {
      results.quizzes = await this.prisma.quiz.findMany({
        where: {
          OR: [{ title: { contains: q } }, { description: { contains: q } }],
        },
        include: { subject: { include: { classGrade: true } }, chapter: true },
        take: 8,
      });
    }

    if (!query.type || query.type === 'QUESTIONS') {
      results.questions = await this.prisma.question.findMany({
        where: {
          OR: [{ questionText: { contains: q } }, { explanation: { contains: q } }],
        },
        include: {
          options: true,
          chapter: { include: { subject: { include: { classGrade: true } } } },
        },
        take: 8,
      });
    }

    if (!query.type || query.type === 'PAPERS') {
      results.papers = await this.prisma.questionPaper.findMany({
        where: {
          OR: [{ title: { contains: q } }, { examName: { contains: q } }],
        },
        include: { classGrade: true, subject: true },
        take: 8,
      });
    }

    return results;
  }
}
