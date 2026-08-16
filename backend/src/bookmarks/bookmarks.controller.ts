import { Controller, Get, Post, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { BookmarksService } from './bookmarks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Bookmarks')
@Controller('bookmarks')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Get()
  @ApiOperation({ summary: 'Get current user bookmarks (filter by NOTE, WORKSHEET, QUIZ, PAPER)' })
  async getUserBookmarks(
    @CurrentUser('id') userId: string,
    @Query('itemType') itemType?: string,
  ) {
    return this.bookmarksService.getUserBookmarks(userId, itemType);
  }

  @Post('toggle')
  @ApiOperation({ summary: 'Toggle bookmark for any entity' })
  async toggleBookmark(
    @CurrentUser('id') userId: string,
    @Body() body: { itemType: string; itemId: string; title: string; subtitle?: string; metadataJson?: string },
  ) {
    return this.bookmarksService.addBookmark(userId, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a bookmark by ID' })
  async removeBookmark(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
  ) {
    return this.bookmarksService.removeBookmark(userId, id);
  }
}
