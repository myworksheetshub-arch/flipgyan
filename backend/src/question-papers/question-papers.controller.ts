import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { QuestionPapersService } from './question-papers.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Question Papers')
@Controller('question-papers')
export class QuestionPapersController {
  constructor(private readonly questionPapersService: QuestionPapersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all generated question papers' })
  async findAll(
    @Query('classId') classId?: string,
    @Query('subjectId') subjectId?: string,
    @Query('search') search?: string,
  ) {
    return this.questionPapersService.findAll({ classId, subjectId, search });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get full question paper blueprint, sections, and marking key' })
  async findById(@Param('id') id: string) {
    return this.questionPapersService.findById(id);
  }

  @Post('generate')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'TEACHER')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Teacher/Admin: Generate customized CBSE Question Paper with Blueprint' })
  async generate(
    @CurrentUser('id') userId: string,
    @Body() body: any,
  ) {
    return this.questionPapersService.generate({ ...body, createdById: userId });
  }
}
