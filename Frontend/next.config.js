/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      domains: ['source.unsplash.com'], // Allow images from this domain
    },
  };

module.exports = nextConfig
