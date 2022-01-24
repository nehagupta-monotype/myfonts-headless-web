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
        destination: `https://${process.env.SHOPIFY_DOMAIN}/:path*`, // Matched parameters can be used in the destination
      },
    ]
  },
  i18n: {
    locales: ['en-US', 'de-DE',],
    defaultLocale: 'en-US',
    // domains: [
    //   {
    //     domain: 'myfonts.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'myfonts.de',
    //     defaultLocale: 'de-DE',
    //   },
    // ],
  }
}
