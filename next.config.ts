import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },

  // Trim runtime overhead
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  // Smaller client bundles: only pull used modules from heavy deps
  experimental: {
    optimizePackageImports: ["gsap"],
  },

  // Modern formats + long cache for next/image (CDN in use)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
