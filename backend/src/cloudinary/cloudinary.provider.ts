import { v2 as Cloudinary } from 'cloudinary';

export const CLOUDINARY_PROVIDER = 'CLOUDINARY';

export const CloudinaryProvider = {
  provide: CLOUDINARY_PROVIDER,
  useFactory: () => {
    return Cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'flipgyan-edu',
      api_key: process.env.CLOUDINARY_API_KEY || '749821369482156',
      api_secret: process.env.CLOUDINARY_API_SECRET || 'A9f8G7h6J5k4L3m2N1p0QrStUvW',
      secure: true,
    });
  },
};
