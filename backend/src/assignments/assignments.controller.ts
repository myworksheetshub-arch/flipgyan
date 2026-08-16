import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AssignmentsService } from './assignments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Assignments')
@Controller('assignments')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Get('teacher')
  @UseGuards(RolesGuard)
  @Roles('TEACHER', 'ADMIN')
  @ApiOperation({ summary: 'Teacher: Get all created homework and class assignments' })
  async getTeacherAssignments(@CurrentUser('id') teacherId: string) {
    return this.assignmentsService.findAllByTeacher(teacherId);
  }

  @Get('student')
  @ApiOperation({ summary: 'Student: Get assigned homework & tasks' })
  async getStudentAssignments(@CurrentUser('id') studentId: string) {
    return this.assignmentsService.findAllByStudent(studentId);
  }

  @Post()
  @UseGuards(RolesGuard)
  @Roles('TEACHER', 'ADMIN')
  @ApiOperation({ summary: 'Teacher: Assign worksheet or quiz to class' })
  async create(
    @CurrentUser('id') teacherId: string,
    @Body() body: any,
  ) {
    return this.assignmentsService.create({ ...body, teacherId });
  }
}
