/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    URL_BACKEND: process.env.URL_BACKEND,
    URL_FRONTEND: process.env.NEXTAUTH_URL,
  },
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://shared-link-custom-backend.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
