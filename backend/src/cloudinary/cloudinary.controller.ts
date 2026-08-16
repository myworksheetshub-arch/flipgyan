import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { CloudinaryService } from './cloudinary.service';

@ApiTags('cloudinary')
@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Get('status')
  @ApiOperation({ summary: 'Check Cloudinary integration health and credentials status' })
  async getStatus() {
    return this.cloudinaryService.validateConfig();
  }

  @Post('upload')
  @ApiOperation({ summary: 'Upload file to Cloudinary storage' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('folder') folder?: string,
  ) {
    if (!file) {
      throw new BadRequestException('File is required for upload');
    }

    const uploaded = await this.cloudinaryService.uploadBuffer(
      file.buffer,
      folder || 'flipgyan_media',
      file.originalname ? file.originalname.split('.')[0] : undefined,
    );

    return {
      message: 'File uploaded successfully to Cloudinary',
      url: uploaded.secure_url,
      publicId: uploaded.public_id,
      format: uploaded.format,
      bytes: uploaded.bytes,
      width: uploaded.width,
      height: uploaded.height,
    };
  }

  @Post('signature')
  @ApiOperation({ summary: 'Generate signature for direct client-side Cloudinary uploads' })
  async getSignature(@Body('folder') folder?: string) {
    return this.cloudinaryService.generateUploadSignature(folder || 'flipgyan_student_uploads');
  }
}
