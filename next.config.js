const blogsRedirection = require('./src/utils/blogsRedirection');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return blogsRedirection;
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
        has: [
          {
            type: 'query',
            key: 'path',
            value: '(.*)',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.emoha.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'placekitten.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
  },
  staticPageGenerationTimeout: 300000,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Report errors during production build
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'lodash', 'react-slick'],
  },
  reactStrictMode: true, // Recommended for better development experience

  // Add this transpilation config
  transpilePackages: ['@mui/material', '@mui/icons-material', '@mui/lab'],

  // Add this webpack config to fix the module system conflict
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@babel/runtime': path.resolve(__dirname, 'node_modules/@babel/runtime'),
    };

    // Keep only en-US locale for dayjs
    if (!isServer) {
      config.resolve.alias['dayjs/locale'] = path.join(__dirname, 'src/utils/dayjs-locales.js');
    }

    // Split chunks more aggressively - FIXED VERSION
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          mui: {
            name: 'mui-commons',
            test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/,
            priority: 30,
            chunks: 'all',
          },
          commons: {
            name: 'commons',
            minChunks: 3,
            priority: 20,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'async',
          },
        },
      };
    }

    return config;
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
