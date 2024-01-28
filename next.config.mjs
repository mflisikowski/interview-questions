/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  }
};

export default nextConfig;
