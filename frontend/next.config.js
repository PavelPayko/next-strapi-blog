/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "127.0.0.1"],
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
}

module.exports = nextConfig
