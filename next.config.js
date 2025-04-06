/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpack: (config) => {
    config.experiments = config.experiments || {}
    config.experiments.topLevelAwait = true
    config.externals = config.externals || []
    config.externals.push('sharp')
    return config
  },
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
}
