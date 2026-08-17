/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Required for Edge Runtime / Cloudflare Pages — disable server-side image optimization
    unoptimized: true,
  },
};

export default nextConfig;
