const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // domains:['replicate.delivery'],
        hostname: "replicate.delivery",
        
      },
    ],
  },
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    protocol: 'https',
    formats: ["image/avif", "image/webp"],
    domains: ['replicate.delivery'],
  },
}
module.exports = nextConfig;
