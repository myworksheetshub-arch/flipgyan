import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SearchService } from './search.service';

@ApiTags('Global Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Global unified search across notes, worksheets, quizzes, questions and papers' })
  async globalSearch(
    @Query('q') q: string,
    @Query('type') type?: string,
    @Query('classId') classId?: string,
    @Query('subjectId') subjectId?: string,
  ) {
    return this.searchService.globalSearch({ q, type, classId, subjectId });
  }
}
