/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr-FR', 'de-DE'],
    defaultLocale: 'fr-FR',
  },
}

module.exports = nextConfig
