import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "newprojects.99acres.com" },
      { protocol: "https", hostname: "static.99acres.com" },
    ],
  },
};

export default nextConfig;
