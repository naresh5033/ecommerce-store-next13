/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com", "res.cloudinary.com"],
  },
};

module.exports = {
  nextConfig,
  experimental: {
    appDir: false,
  },
};
