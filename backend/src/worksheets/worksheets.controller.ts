import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { WorksheetsService } from './worksheets.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Worksheets')
@Controller('worksheets')
export class WorksheetsController {
  constructor(private readonly worksheetsService: WorksheetsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all worksheets with optional filters' })
  async findAll(
    @Query('chapterId') chapterId?: string,
    @Query('subjectId') subjectId?: string,
    @Query('classId') classId?: string,
    @Query('type') type?: string,
    @Query('difficulty') difficulty?: string,
    @Query('search') search?: string,
  ) {
    return this.worksheetsService.findAll({
      chapterId,
      subjectId,
      classId,
      type,
      difficulty,
      search,
    });
  }

  @Get('my-attempts')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current student worksheet attempts' })
  async getMyAttempts(@CurrentUser('id') userId: string) {
    return this.worksheetsService.getAttemptsByUser(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get worksheet details with questions and options' })
  async findById(@Param('id') id: string) {
    return this.worksheetsService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Create a worksheet' })
  async create(@CurrentUser('id') userId: string, @Body() body: any) {
    return this.worksheetsService.create({ ...body, createdById: userId });
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Update a worksheet' })
  async update(@Param('id') id: string, @Body() body: any) {
    return this.worksheetsService.update(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Admin: Delete a worksheet' })
  async remove(@Param('id') id: string) {
    return this.worksheetsService.remove(id);
  }

  @Post(':id/submit')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Submit worksheet answers for grading' })
  async submitAttempt(
    @Param('id') id: string,
    @CurrentUser('id') userId: string,
    @Body() body: { answers: Record<string, any>; timeSpentSeconds: number },
  ) {
    return this.worksheetsService.submitAttempt(id, userId, body);
  }
}
