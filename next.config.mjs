/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
