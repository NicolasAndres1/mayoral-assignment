/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mayoral.com',
        port: '',
        pathname: '/wcsstore/mayoral/images/catalog/mayoral/**',
      },
      {
        protocol: 'https',
        hostname: 'media.mayoral.com',
        port: '',
        pathname: '/wcsstore/mayoral/images/catalog/mayoral/**',
      },
    ],
  },
};

module.exports = nextConfig;
