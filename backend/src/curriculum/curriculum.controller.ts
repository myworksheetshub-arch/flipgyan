import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CurriculumService } from './curriculum.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@ApiTags('Curriculum')
@Controller()
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) {}

  // Public/Student routes
  @Get('classes')
  @ApiOperation({ summary: 'Get all classes' })
  async getClasses() {
    return this.curriculumService.getClasses();
  }

  @Get('classes/:id')
  @ApiOperation({ summary: 'Get class by ID with subjects' })
  async getClassById(@Param('id') id: string) {
    return this.curriculumService.getClassById(id);
  }

  @Get('subjects')
  @ApiOperation({ summary: 'Get all subjects (optionally filter by classId or class number)' })
  async getSubjects(@Query('classId') classId?: string) {
    return this.curriculumService.getSubjects(classId);
  }

  @Get('subjects/:id')
  @ApiOperation({ summary: 'Get subject details with chapters' })
  async getSubjectById(@Param('id') id: string) {
    return this.curriculumService.getSubjectById(id);
  }

  @Get('chapters')
  @ApiOperation({ summary: 'Get chapters (optionally filter by subjectId)' })
  async getChapters(@Query('subjectId') subjectId?: string) {
    return this.curriculumService.getChapters(subjectId);
  }

  @Get('chapters/:id')
  @ApiOperation({ summary: 'Get chapter details with topics and content' })
  async getChapterById(@Param('id') id: string) {
    return this.curriculumService.getChapterById(id);
  }

  // Admin creations & updates
  @Post('admin/classes')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Create class' })
  async createClass(@Body() body: { name: string; number: number; order?: number; description?: string }) {
    return this.curriculumService.createClass(body);
  }

  @Put('admin/classes/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Update class' })
  async updateClass(@Param('id') id: string, @Body() body: any) {
    return this.curriculumService.updateClass(id, body);
  }

  @Delete('admin/classes/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Delete class' })
  async deleteClass(@Param('id') id: string) {
    return this.curriculumService.deleteClass(id);
  }

  @Post('admin/subjects')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Create subject' })
  async createSubject(@Body() body: { name: string; code: string; icon?: string; color?: string; classGradeId: string }) {
    return this.curriculumService.createSubject(body);
  }

  @Put('admin/subjects/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Update subject' })
  async updateSubject(@Param('id') id: string, @Body() body: any) {
    return this.curriculumService.updateSubject(id, body);
  }

  @Delete('admin/subjects/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Delete subject' })
  async deleteSubject(@Param('id') id: string) {
    return this.curriculumService.deleteSubject(id);
  }

  @Post('admin/chapters')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin/Teacher: Create chapter' })
  async createChapter(@Body() body: { title: string; chapterNumber: number; description?: string; subjectId: string }) {
    return this.curriculumService.createChapter(body);
  }

  @Put('admin/chapters/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin/Teacher: Update chapter' })
  async updateChapter(@Param('id') id: string, @Body() body: any) {
    return this.curriculumService.updateChapter(id, body);
  }

  @Delete('admin/chapters/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Delete chapter' })
  async deleteChapter(@Param('id') id: string) {
    return this.curriculumService.deleteChapter(id);
  }

  @Post('admin/topics')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin/Teacher: Create topic' })
  async createTopic(@Body() body: { title: string; order?: number; summary?: string; chapterId: string }) {
    return this.curriculumService.createTopic(body);
  }
}
