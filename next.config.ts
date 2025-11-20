import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Temporary fix - allows all external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file.notion.so',
      },
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freecodecamp.org',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
      }
    ],
  }
};

export default nextConfig;
