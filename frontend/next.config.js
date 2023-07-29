/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "127.0.0.1", "45.84.225.246"],
    formats: ['image/webp'],
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  compiler: {
    styledComponents: true,
  },
}

// module.exports = nextConfig
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)

