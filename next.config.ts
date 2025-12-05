import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optimize resource preloading to reduce warnings
  experimental: {
    optimizePackageImports: ['@stream-io/video-react-sdk'],
  },
  // Reduce preload warnings by optimizing font loading
  optimizeFonts: true,
};

export default nextConfig;
