module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['localhost', 'render.myfonts.net'],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.myfonts-beta.com/:path*', // Matched parameters can be used in the destination
      },
    ]
  }
}
