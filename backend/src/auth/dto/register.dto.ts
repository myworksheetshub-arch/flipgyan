import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'student@flipgyan.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Aarav Kumar' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'STUDENT', enum: ['STUDENT', 'TEACHER', 'PARENT', 'ADMIN', 'CONTENT_EDITOR'] })
  @IsOptional()
  @IsString()
  role?: string;

  @ApiPropertyOptional({ example: '10' })
  @IsOptional()
  @IsString()
  classGradeId?: string;

  @ApiPropertyOptional({ example: 'Delhi Public School' })
  @IsOptional()
  @IsString()
  school?: string;

  @ApiPropertyOptional({ example: '+91 9876543210' })
  @IsOptional()
  @IsString()
  phone?: string;
}
