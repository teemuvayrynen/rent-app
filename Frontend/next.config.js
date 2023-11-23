/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      loader: 'custom',
      loaderFile: '/src/functions/loader.js',
      domains: ['source.unsplash.com'], // Allow images from this domain
    },
    output: "export",
    trailingSlash: true
  };

module.exports = nextConfig
