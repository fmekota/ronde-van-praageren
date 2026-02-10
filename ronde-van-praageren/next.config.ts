import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['vercel.com'],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
