import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { QuizzesService } from './quizzes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Quizzes')
@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all quizzes with optional filters' })
  async findAll(
    @Query('chapterId') chapterId?: string,
    @Query('subjectId') subjectId?: string,
    @Query('classId') classId?: string,
    @Query('difficulty') difficulty?: string,
    @Query('search') search?: string,
  ) {
    return this.quizzesService.findAll({
      chapterId,
      subjectId,
      classId,
      difficulty,
      search,
    });
  }

  @Get('my-attempts')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get quiz attempts for the logged-in student' })
  async getMyAttempts(@CurrentUser('id') userId: string) {
    return this.quizzesService.getAttemptsByUser(userId);
  }

  @Get('attempts/:attemptId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get detailed result of a specific attempt' })
  async getAttemptDetails(@Param('attemptId') attemptId: string) {
    return this.quizzesService.getAttemptDetails(attemptId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get quiz questions for live attempt (answers hidden)' })
  async findById(@Param('id') id: string) {
    return this.quizzesService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Create a new quiz' })
  async create(@CurrentUser('id') userId: string, @Body() body: any) {
    return this.quizzesService.create({ ...body, createdById: userId });
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Update a quiz' })
  async update(@Param('id') id: string, @Body() body: any) {
    return this.quizzesService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Delete a quiz' })
  async remove(@Param('id') id: string) {
    return this.quizzesService.remove(id);
  }

  @Post(':id/submit')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Submit quiz answers and get instant deep score analytics' })
  async submitAttempt(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() body: { answers: Record<string, any>; timeSpentSeconds: number },
  ) {
    return this.quizzesService.submitAttempt(id, userId, body);
  }
}
