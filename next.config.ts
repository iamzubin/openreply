import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // This fork runs AdderCAD's Instagram automations on go.addercad.com, so the
  // bare homepage sends visitors to the main site. Every other route stays.
  async redirects() {
    return [{ source: "/", destination: "https://addercad.com", permanent: false }];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
