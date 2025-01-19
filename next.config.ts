import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  env: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
};

export default nextConfig;
