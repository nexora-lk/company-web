import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    turbopack: { root: __dirname },

    // Trim runtime overhead
    poweredByHeader: false,
    reactStrictMode: true,
    compress: true,

    // Prevent GSAP chunking issues + optimize imports
    experimental: {
        optimizePackageImports: ['gsap', 'lenis'],
    },

    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Prevent GSAP from being split into multiple chunks (causes load failures)
            config.optimization = {
                ...config.optimization,
                splitChunks: {
                    ...config.optimization?.splitChunks,
                    cacheGroups: {
                        ...config.optimization?.splitChunks?.cacheGroups,
                        gsap: {
                            test: /[\\/]node_modules[\\/]gsap[\\/]/,
                            name: 'gsap',
                            priority: 100,
                            reuseExistingChunk: true,
                            enforce: true,
                        },
                    },
                },
            };
        }
        return config;
    },

    // Modern formats + long cache for next/image (CDN in use)
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 2678400, // 31 days
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
        ],
        // Optimize image delivery
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Security headers
    headers: async () => [
        {
            source: '/:path*',
            headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                { key: 'X-XSS-Protection', value: '1; mode=block' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
            ],
        },
        {
            source: '/fonts/:path*',
            headers: [{ key: 'Cache-Control', value: 'public, immutable, max-age=31536000' }],
        },
        {
            source: '/public/:path*',
            headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }],
        },
    ],
};

export default nextConfig;
