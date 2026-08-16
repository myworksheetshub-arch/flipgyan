import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { QuestionsService } from './questions.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Questions')
@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  @ApiOperation({ summary: 'List questions with extensive filtering (Class, Subject, Chapter, Bloom, Difficulty)' })
  async findAll(
    @Query('chapterId') chapterId?: string,
    @Query('subjectId') subjectId?: string,
    @Query('classId') classId?: string,
    @Query('difficulty') difficulty?: string,
    @Query('bloomLevel') bloomLevel?: string,
    @Query('competency') competency?: string,
    @Query('questionType') questionType?: string,
    @Query('status') status?: string,
    @Query('search') search?: string,
    @Query('take') take?: number,
    @Query('skip') skip?: number,
  ) {
    return this.questionsService.findAll({
      chapterId,
      subjectId,
      classId,
      difficulty,
      bloomLevel,
      competency,
      questionType,
      status,
      search,
      take,
      skip,
    });
  }

  @Get('search')
  @ApiOperation({ summary: 'Search question bank by keyword and optional filters' })
  @ApiQuery({ name: 'q', required: true, description: 'Search term' })
  async search(
    @Query('q') q: string,
    @Query('chapterId') chapterId?: string,
    @Query('subjectId') subjectId?: string,
    @Query('difficulty') difficulty?: string,
    @Query('questionType') questionType?: string,
  ) {
    return this.questionsService.search(q, { chapterId, subjectId, difficulty, questionType });
  }

  @Get('random')
  @ApiOperation({ summary: 'Blueprint helper: Get N random questions matching criteria' })
  async findRandom(
    @Query('subjectId') subjectId?: string,
    @Query('chapterIds') chapterIds?: string,
    @Query('questionType') questionType?: string,
    @Query('difficulty') difficulty?: string,
    @Query('count') count?: number,
  ) {
    const chapterIdArray = chapterIds ? chapterIds.split(',') : undefined;
    return this.questionsService.findRandom({
      subjectId,
      chapterIds: chapterIdArray,
      questionType,
      difficulty,
      count: count ? Number(count) : 10,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get single question details with options, rubrics, media & version history' })
  async findById(@Param('id') id: string) {
    return this.questionsService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER', 'CONTENT_EDITOR')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Create a new question with options, rubrics, and media' })
  async create(
    @CurrentUser('id') userId: string,
    @Body() body: any,
  ) {
    return this.questionsService.create({ ...body, createdById: userId });
  }

  @Post('bulk')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER', 'CONTENT_EDITOR')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Bulk create questions' })
  async bulkCreate(
    @CurrentUser('id') userId: string,
    @Body() body: { questions: any[] },
  ) {
    return this.questionsService.bulkCreate(body.questions, userId);
  }

  @Post('import')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER', 'CONTENT_EDITOR')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Import questions into chapter' })
  async importQuestions(
    @CurrentUser('id') userId: string,
    @Body() body: { chapterId: string; questions: any[] },
  ) {
    return this.questionsService.importQuestions(body, userId);
  }

  @Post(':id/review')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER', 'CONTENT_EDITOR')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Review question and record version snapshot' })
  async reviewQuestion(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() body: { reviewNotes?: string },
  ) {
    return this.questionsService.reviewQuestion(id, body?.reviewNotes, userId);
  }

  @Post(':id/approve')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Approve question for paper generation' })
  async approveQuestion(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
  ) {
    return this.questionsService.approveQuestion(id, userId);
  }

  @Put(':id')
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER', 'CONTENT_EDITOR')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Update question, options, rubrics, or media' })
  async update(@Param('id') id: string, @Body() body: any) {
    return this.questionsService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin/Teacher: Delete question' })
  async remove(@Param('id') id: string) {
    return this.questionsService.remove(id);
  }
}
