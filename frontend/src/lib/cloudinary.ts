/**
 * Cloudinary Frontend Integration Utilities for FlipGyan
 */

export const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'flipgyan-edu';

/**
 * Returns optimized Cloudinary image URL with specified width, height & format
 */
export function getOptimizedImageUrl(
  publicIdOrUrl: string,
  options: {
    width?: number;
    height?: number;
    crop?: 'scale' | 'fill' | 'fit' | 'thumb';
    format?: 'auto' | 'webp' | 'png' | 'jpg';
    quality?: 'auto' | number;
  } = {},
): string {
  if (!publicIdOrUrl) return '';

  // Return as-is if already full URL and not Cloudinary
  if (publicIdOrUrl.startsWith('http') && !publicIdOrUrl.includes('cloudinary.com')) {
    return publicIdOrUrl;
  }

  const { width = 800, height, crop = 'fill', format = 'auto', quality = 'auto' } = options;

  let transformations = `c_${crop},w_${width},f_${format},q_${quality}`;
  if (height) transformations += `,h_${height}`;

  if (publicIdOrUrl.includes('/upload/')) {
    return publicIdOrUrl.replace('/upload/', `/upload/${transformations}/`);
  }

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicIdOrUrl}`;
}
