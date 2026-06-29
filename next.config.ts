import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: { optimizePackageImports: [] },
  async redirects() {
    return [
      // /learners is no longer a route — the audience tab "For Learners" lives at /
      { source: "/learners", destination: "/", permanent: true },
      { source: "/learners/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
