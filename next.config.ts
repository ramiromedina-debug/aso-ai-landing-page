import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  allowedDevOrigins: ['*', '192.168.40.95', 'localhost', '127.0.0.1'],
};

export default nextConfig;
