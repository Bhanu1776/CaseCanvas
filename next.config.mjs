/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '**/*',
      },
    ],
  },
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
