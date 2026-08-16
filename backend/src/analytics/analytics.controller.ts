import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Analytics & Dashboards')
@Controller('analytics')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('student')
  @Roles('STUDENT', 'ADMIN')
  @ApiOperation({ summary: 'Get Student Dashboard Analytics & Metrics' })
  async getStudentDashboard(@CurrentUser('id') userId: string) {
    return this.analyticsService.getStudentDashboard(userId);
  }

  @Get('teacher')
  @Roles('TEACHER', 'ADMIN')
  @ApiOperation({ summary: 'Get Teacher Dashboard Analytics & Student Progress' })
  async getTeacherDashboard(@CurrentUser('id') userId: string) {
    return this.analyticsService.getTeacherDashboard(userId);
  }

  @Get('parent')
  @Roles('PARENT', 'ADMIN')
  @ApiOperation({ summary: 'Get Parent Dashboard Child Progress' })
  async getParentDashboard(@CurrentUser('id') userId: string) {
    return this.analyticsService.getParentDashboard(userId);
  }

  @Get('admin')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Get Admin Dashboard System Metrics & Overview' })
  async getAdminDashboard() {
    return this.analyticsService.getAdminDashboard();
  }
}
