import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { StudyNotesService } from './study-notes.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Study Notes')
@Controller('study-notes')
export class StudyNotesController {
  constructor(private readonly studyNotesService: StudyNotesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all study notes with optional filters' })
  async findAll(
    @Query('chapterId') chapterId?: string,
    @Query('subjectId') subjectId?: string,
    @Query('classId') classId?: string,
    @Query('search') search?: string,
  ) {
    return this.studyNotesService.findAll({ chapterId, subjectId, classId, search });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get study note details by ID with mind maps, examples and deep dive' })
  async findById(@Param('id') id: string, @Query('userId') queryUserId?: string) {
    return this.studyNotesService.findById(id, queryUserId);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER', 'CONTENT_EDITOR')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin/Teacher: Create study note' })
  async create(@Body() body: any) {
    return this.studyNotesService.create(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER', 'CONTENT_EDITOR')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin/Teacher: Update study note' })
  async update(@Param('id') id: string, @Body() body: any) {
    return this.studyNotesService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Delete study note' })
  async remove(@Param('id') id: string) {
    return this.studyNotesService.remove(id);
  }
}
