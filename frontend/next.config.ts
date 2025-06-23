import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ricekrisbs.gallerycdn.vsassets.io", //dummy pikachu card image
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
