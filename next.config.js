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
  experimental: {
    appDir: true,
  },
}
