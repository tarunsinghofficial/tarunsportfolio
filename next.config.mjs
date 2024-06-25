/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'semaphoreci.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.shopify.com',
        },
        {
          protocol: 'https',
          hostname: 'blog.openreplay.com',
        },
        {
          protocol: 'https',
          hostname: 'i0.wp.com',
        },
        {
          protocol: 'https',
          hostname: 'media.geeksforgeeks.org',
        },
      ],
    },
  };
  
  export default nextConfig;
  