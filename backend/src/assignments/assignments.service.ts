import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaService) {}

  async findAllByTeacher(teacherId: string) {
    return this.prisma.assignment.findMany({
      where: { teacherId },
      include: {
        classGrade: true,
        subject: true,
        worksheet: true,
        quiz: true,
        studentAssignments: {
          include: { student: { select: { id: true, name: true, email: true } } },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAllByStudent(studentId: string) {
    return this.prisma.studentAssignment.findMany({
      where: { studentId },
      include: {
        assignment: {
          include: {
            teacher: { select: { name: true } },
            classGrade: true,
            subject: true,
            worksheet: true,
            quiz: true,
          },
        },
      },
      orderBy: { assignment: { dueDate: 'asc' } },
    });
  }

  async create(data: {
    teacherId: string;
    classGradeId: string;
    subjectId: string;
    title: string;
    instructions?: string;
    dueDate?: Date;
    worksheetId?: string;
    quizId?: string;
  }) {
    const assignment = await this.prisma.assignment.create({
      data,
    });

    // Auto assign to all students in that class
    const students = await this.prisma.user.findMany({
      where: { classGradeId: data.classGradeId, role: 'STUDENT' },
    });

    for (const st of students) {
      await this.prisma.studentAssignment.create({
        data: {
          assignmentId: assignment.id,
          studentId: st.id,
          status: 'PENDING',
        },
      });
    }

    return assignment;
  }
}
