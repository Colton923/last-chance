/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    return config
  },
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/menu/:groupTitle/:itemTitle',
        destination: '/menu/:itemTitle',
        permanent: true,
      },
    ]
  },
}
