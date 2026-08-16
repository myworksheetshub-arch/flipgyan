import { v2 as Cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

async function testCloudinaryLiveUpload() {
  console.log('🧪 Testing Cloudinary Integration & Media Storage Upload...\n');

  Cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'flipgyan-edu',
    api_key: process.env.CLOUDINARY_API_KEY || '749821369482156',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'A9f8G7h6J5k4L3m2N1p0QrStUvW',
    secure: true,
  });

  // 1x1 transparent PNG base64 sample image
  const sampleBase64Image =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

  try {
    console.log('📤 Uploading test sample image to Cloudinary folder "flipgyan_test"...');
    const uploadResult = await Cloudinary.uploader.upload(sampleBase64Image, {
      folder: 'flipgyan_test',
      tags: ['test', 'flipgyan_verification'],
    });

    console.log('✅ UPLOAD SUCCESSFUL!');
    console.log(`🌐 Public URL: ${uploadResult.secure_url}`);
    console.log(`🔑 Public ID: ${uploadResult.public_id}`);
    console.log(`📐 Format: ${uploadResult.format} | Size: ${uploadResult.bytes} Bytes`);
    console.log(`🖼️ Dimensions: ${uploadResult.width}x${uploadResult.height}`);

    console.log('\n🧹 Cleaning up test asset from Cloudinary...');
    const deleteResult = await Cloudinary.uploader.destroy(uploadResult.public_id);
    console.log(`✅ Cleanup Result: ${deleteResult.result}`);

    console.log('\n🎉 Cloudinary Media Storage is 100% OPERATIONAL & WORKING PERFECTLY!');
  } catch (err: any) {
    console.error('❌ Cloudinary Upload Test Error:', err?.message || err);
  }
}

testCloudinaryLiveUpload();
