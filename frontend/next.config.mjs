/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Required for Cloudflare Pages (next-on-pages) — forces Edge Runtime globally
  experimental: {
    runtime: 'edge',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Required for Edge Runtime — disable server-side image optimization
    unoptimized: true,
  },
};

export default nextConfig;
