import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['vercel.com'],
  },
  trailingSlash: true,
};

export default nextConfig;
