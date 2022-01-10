/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["content-test.letsdeal.com", "storage.googleapis.com"],
  },
  publicRuntimeConfig: {
    API_URI: process.env.API_URI,
  },
};
