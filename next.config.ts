import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "tooxclusive-artist-profile.s3.amazonaws.com",
      "res.cloudinary.com",
    ], // ✅ Add your image hostname here
  },
};

export default nextConfig;
