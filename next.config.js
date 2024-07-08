/** @type {import('next').NextConfig} */
// const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: false,
  images: { unoptimized: true },
  async rewrites() {
    return [
        { source: "/:path*", destination: "/status/:path*" },
    ]
  },
};

module.exports = nextConfig;
