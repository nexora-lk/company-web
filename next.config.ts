import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    turbopack: { root: __dirname },

    // Trim runtime overhead
    poweredByHeader: false,
    reactStrictMode: true,
    compress: true,
    output: 'export',              // generates /out folder
    trailingSlash: true,          // /about/ instead of /about
    skipTrailingSlashRedirect: true,


    // Prevent GSAP chunking issues + optimize imports
    experimental: {
        optimizePackageImports: ['gsap', 'lenis'],
        optimizeCss: true,
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
        unoptimized: false,
        loader: 'custom',
        loaderFile: './lib/cloudinary-loader.ts',
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000,
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
        dangerouslyAllowSVG: false,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Security headers
    headers: async () => [
        {
        // Static assets: JS, CSS, images — 1 year immutable
            source: '/:path*.(js|css|woff2|png|jpg|jpeg|webp|avif|svg|ico)',
            headers: [
                { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
            ],
        },
        {
            source: '/:path*',
            headers: [
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-XSS-Protection', value: '1; mode=block' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
                { key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'X-Frame-Options', value: 'DENY' },
            ],
        },
        {
            source: '/fonts/:path*',
            headers: [{ key: 'Cache-Control', value: 'public, immutable, max-age=31536000' }],
        },
        {
            source: '/_next/static/:path*',
            headers: [{ key: 'Cache-Control', value: 'public, immutable, max-age=31536000' }],
        },
        {
            source: '/_next/image/:path*',
            headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, stale-while-revalidate=86400' }],
        },
        {
            source: '/public/:path*',
            headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }],
        },
    ],
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
