// import createMDX from '@next/mdx';
import { createContentlayerPlugin } from 'next-contentlayer2';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config: { cache: boolean }) => {
    config.cache = false;
    return config;
  },
  images: {
    unoptimized: true,
  },
  // output: 'export',
  env: {
    NEXT_PUBLIC_APP_NAME: 'Hyper Local',
    NEXT_PUBLIC_WEB_URL: 'https://hyper-local-22.vercel.app',
  },
  turbopack: {},
  async redirects() {
    return [
      {
        source: '/firebase-messaging-sw.js',
        destination: '/',
        permanent: false,
      },
      {
        source: '/.well-known/:path*',
        destination: '/404',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/logos/hyper-local-favicon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
