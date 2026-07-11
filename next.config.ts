import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Skip AVIF — some iOS Safari versions on older iPhones fail to decode
    // AVIF from the Next image optimizer while WebP/JPEG work fine.
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
};

export default nextConfig;
