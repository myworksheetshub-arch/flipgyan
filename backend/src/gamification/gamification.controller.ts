import { Controller, Get, Query, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { GamificationService } from './gamification.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Gamification & Leaderboard')
@Controller('gamification')
export class GamificationController {
  constructor(private readonly gamificationService: GamificationService) {}

  @Get('achievements')
  @ApiOperation({ summary: 'Get all badges and achievements' })
  async getAchievements(@Query('userId') userId?: string) {
    return this.gamificationService.getAchievements(userId);
  }

  @Get('leaderboard')
  @ApiOperation({ summary: 'Get top students leaderboard ranking' })
  async getLeaderboard(@Query('period') period?: string) {
    return this.gamificationService.getLeaderboard(period);
  }
}
