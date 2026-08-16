import { Controller, Get, Patch, Body, Param, Query, UseGuards, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Admin: List all users' })
  async findAll(@Query('role') role?: string) {
    return this.usersService.findAll(role);
  }

  @Get('children')
  @Roles('PARENT', 'ADMIN')
  @ApiOperation({ summary: 'Parent: Get children list and their progress' })
  async getChildren(@CurrentUser('id') parentId: string) {
    return this.usersService.getChildren(parentId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user details by ID' })
  async findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Patch('profile')
  @ApiOperation({ summary: 'Update logged in user profile' })
  async updateProfile(
    @CurrentUser('id') userId: string,
    @Body() body: { name?: string; phone?: string; school?: string; avatar?: string; classGradeId?: string },
  ) {
    return this.usersService.update(userId, body);
  }

  @Patch('avatar')
  @ApiOperation({ summary: 'Upload profile picture to Cloudinary and update user avatar' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async updateAvatar(
    @CurrentUser('id') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Image file is required');
    }

    const uploaded = await this.cloudinaryService.uploadBuffer(
      file.buffer,
      'flipgyan_avatars',
      `avatar_${userId}`,
    );

    return this.usersService.update(userId, { avatar: uploaded.secure_url });
  }

  @Patch(':id/grant-pro')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Admin: Grant 1-year PRO Student access to a user' })
  async grantPro(@Param('id') id: string, @Body() body?: { planName?: string }) {
    return this.usersService.grantProStatus(id, body?.planName || 'PRO_STUDENT');
  }

  @Patch(':id/revoke-pro')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Admin: Revoke PRO status from a user' })
  async revokePro(@Param('id') id: string) {
    return this.usersService.revokeProStatus(id);
  }
}
