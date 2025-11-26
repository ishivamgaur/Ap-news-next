/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow any HTTPS hostname
      },
    ],
    qualities: [75, 85],
  },
  async rewrites() {
    return [
      {
        source: "/:category/article/:id",
        destination: "/article/:category/:id",
      },
    ];
  },
};

export default nextConfig;
