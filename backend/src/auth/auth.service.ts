import { Injectable, BadRequestException, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
import { LoginDto, RefreshTokenDto, ChangePasswordDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  private generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'flipgyan_super_secret_jwt_key_2026_education_platform',
      expiresIn: '7d',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET || 'flipgyan_super_secret_refresh_jwt_key_2026_education',
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }

  private formatUserResponse(user: any) {
    const { passwordHash, ...safeUser } = user;
    const activeSub = safeUser.subscriptions && safeUser.subscriptions.length > 0 ? safeUser.subscriptions[0] : null;
    const subscriptionTier = activeSub ? activeSub.planName : 'FREE';
    const isPro = activeSub ? (activeSub.planName === 'PRO_STUDENT' || activeSub.planName === 'PRO_TEACHER' || activeSub.planName === 'SCHOOL') : false;

    return {
      ...safeUser,
      subscriptionTier,
      isPro,
    };
  }

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
    });

    if (existing) {
      throw new ConflictException('User with this email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(dto.password, salt);

    let classGradeId = dto.classGradeId;
    if (classGradeId && !isNaN(Number(classGradeId))) {
      const cls = await this.prisma.classGrade.findUnique({
        where: { number: Number(classGradeId) },
      });
      if (cls) classGradeId = cls.id;
    }

    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase().trim(),
        passwordHash,
        name: dto.name.trim(),
        role: dto.role || 'STUDENT',
        classGradeId,
        school: dto.school,
        phone: dto.phone,
      },
      include: {
        classGrade: true,
        subscriptions: { where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' }, take: 1 },
      },
    });

    await this.prisma.learningActivity.create({
      data: {
        userId: user.id,
        activityType: 'ACCOUNT_CREATED',
        description: 'Joined FlipGyan learning platform!',
        xpEarned: 50,
      },
    });

    const tokens = this.generateTokens(user.id, user.email, user.role);

    return {
      user: this.formatUserResponse(user),
      tokens,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase().trim() },
      include: {
        classGrade: true,
        subscriptions: { where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' }, take: 1 },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastActiveAt: new Date() },
    });

    const tokens = this.generateTokens(user.id, user.email, user.role);

    return {
      user: this.formatUserResponse(user),
      tokens,
    };
  }

  async refreshTokens(dto: RefreshTokenDto) {
    try {
      const payload = this.jwtService.verify(dto.refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || 'flipgyan_super_secret_refresh_jwt_key_2026_education',
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        include: {
          classGrade: true,
          subscriptions: { where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' }, take: 1 },
        },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      const tokens = this.generateTokens(user.id, user.email, user.role);

      return {
        user: this.formatUserResponse(user),
        tokens,
      };
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isMatch = await bcrypt.compare(dto.currentPassword, user.passwordHash);
    if (!isMatch) {
      throw new BadRequestException('Current password does not match');
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(dto.newPassword, salt);

    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });

    return { message: 'Password updated successfully' };
  }

  async googleLogin(dto: { email: string; name?: string; avatar?: string; googleId?: string; role?: string; classGradeId?: string }) {
    const cleanEmail = dto.email.toLowerCase().trim();
    let user = await this.prisma.user.findUnique({
      where: { email: cleanEmail },
      include: {
        classGrade: true,
        subscriptions: { where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' }, take: 1 },
      },
    });

    if (!user) {
      let classGradeId = dto.classGradeId;
      if (!classGradeId) {
        const cls7 = await this.prisma.classGrade.findUnique({ where: { number: 7 } });
        if (cls7) classGradeId = cls7.id;
      } else if (!isNaN(Number(classGradeId))) {
        const cls = await this.prisma.classGrade.findUnique({ where: { number: Number(classGradeId) } });
        if (cls) classGradeId = cls.id;
      }

      const salt = await bcrypt.genSalt(10);
      const dummyPasswordHash = await bcrypt.hash(`google_${cleanEmail}_${Date.now()}`, salt);

      user = await this.prisma.user.create({
        data: {
          email: cleanEmail,
          name: dto.name || cleanEmail.split('@')[0],
          avatar: dto.avatar || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100`,
          passwordHash: dummyPasswordHash,
          role: (dto.role as any) || 'STUDENT',
          classGradeId,
        },
        include: {
          classGrade: true,
          subscriptions: { where: { status: 'ACTIVE' }, orderBy: { createdAt: 'desc' }, take: 1 },
        },
      });

      await this.prisma.learningActivity.create({
        data: {
          userId: user.id,
          activityType: 'ACCOUNT_CREATED',
          description: 'Joined FlipGyan via Gmail / Google Login!',
          xpEarned: 50,
        },
      });
    } else {
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          lastActiveAt: new Date(),
          avatar: dto.avatar || user.avatar,
        },
      });
    }

    const tokens = this.generateTokens(user.id, user.email, user.role);

    return {
      user: this.formatUserResponse(user),
      tokens,
    };
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        classGrade: true,
        userAchievements: {
          include: {
            achievement: true,
          },
        },
        subscriptions: {
          where: { status: 'ACTIVE' },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return this.formatUserResponse(user);
  }
}
