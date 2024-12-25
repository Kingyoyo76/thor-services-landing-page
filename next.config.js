/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    staticPageGenerationTimeout: 180, // Extend timeout to 180 seconds
  },
  async rewrites() {
    return []
  },
  // Adding custom server configuration
  server: {
    port: 3001, // New port number
  }
}

module.exports = nextConfig
