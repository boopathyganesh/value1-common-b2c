/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'inrdeals.sgp1.cdn.digitaloceanspaces.com',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'thecodeplayer.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    AUTH_ENDPOINT: process.env.AUTH_ENDPOINT,
  },
}

module.exports = nextConfig
