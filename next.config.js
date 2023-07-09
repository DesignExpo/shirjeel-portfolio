/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flowbite.s3.amazonaws.com',
          port: '',
        },
      ],
    },
  }
