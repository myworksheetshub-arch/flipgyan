import { Injectable, Logger } from '@nestjs/common';
import { v2 as Cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);

  /**
   * Validate Cloudinary Credentials & API Ping
   */
  async validateConfig(): Promise<{
    status: string;
    cloudName: string;
    apiKeyConfigured: boolean;
    apiSecretConfigured: boolean;
    pingSuccess: boolean;
    message: string;
  }> {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME || '';
    const apiKey = process.env.CLOUDINARY_API_KEY || '';
    const apiSecret = process.env.CLOUDINARY_API_SECRET || '';

    const apiKeyConfigured = Boolean(apiKey && apiKey.length > 5);
    const apiSecretConfigured = Boolean(apiSecret && apiSecret.length > 5);

    let pingSuccess = false;
    let message = '';

    try {
      // Validate configuration using Cloudinary ping API
      const result = await Cloudinary.api.ping();
      if (result && result.status === 'ok') {
        pingSuccess = true;
        message = 'Successfully authenticated and connected to Cloudinary API!';
      } else {
        message = 'Cloudinary returned non-ok ping response.';
      }
    } catch (err: any) {
      this.logger.warn(`Cloudinary validation check notice: ${err?.message || err}`);
      pingSuccess = false;
      message = `Cloudinary configured with credentials for cloud "${cloudName}". (${err?.message || 'Ready for media uploads'})`;
    }

    return {
      status: pingSuccess ? 'HEALTHY' : 'CONFIGURED',
      cloudName,
      apiKeyConfigured,
      apiSecretConfigured,
      pingSuccess,
      message,
    };
  }

  /**
   * Upload Buffer file to Cloudinary
   */
  async uploadBuffer(
    buffer: Buffer,
    folder: string = 'flipgyan_uploads',
    filename?: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const uploadStream = Cloudinary.uploader.upload_stream(
        {
          folder,
          public_id: filename,
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) return reject(error);
          if (!result) return reject(new Error('Empty upload result from Cloudinary'));
          resolve(result);
        },
      );

      Readable.from(buffer).pipe(uploadStream);
    });
  }

  /**
   * Delete asset from Cloudinary by Public ID
   */
  async deleteAsset(publicId: string): Promise<any> {
    return Cloudinary.uploader.destroy(publicId);
  }

  /**
   * Generate Signed parameters for Direct Frontend Uploads
   */
  generateUploadSignature(folder: string = 'flipgyan_student_uploads') {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const apiSecret = process.env.CLOUDINARY_API_SECRET || '';

    const signature = Cloudinary.utils.api_sign_request(
      {
        timestamp,
        folder,
      },
      apiSecret,
    );

    return {
      timestamp,
      signature,
      apiKey: process.env.CLOUDINARY_API_KEY,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      folder,
    };
  }
}
