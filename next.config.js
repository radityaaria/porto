/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: 'https://database-query.paso.dev/api/v1/ad92e203-1484-4150-80f8-1973fc0bb423/:path*',
      },
    ]
  },
}

module.exports = nextConfig 