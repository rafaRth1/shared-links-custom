/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_BACKEND: process.env.URL_BACKEND,
    URL_FRONTEND: process.env.NEXTAUTH_URL,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
