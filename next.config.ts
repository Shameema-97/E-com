import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

module.exports = nextConfig;