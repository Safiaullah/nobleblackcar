import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.nobleblackcarservice.com',
          },
        ],
        destination: 'https://nobleblackcarservice.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
