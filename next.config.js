/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "content-test.letsdeal.com",
      "storage.googleapis.com",
      "imgs.letsdeal.com",
      "img.dev.bagheera.letsdeal.com",
    ],
  },
  publicRuntimeConfig: {
    API_URI: process.env.API_URI,
  },
  env: {
    HOMEPAGE: "Letsdeal.se",
  },
};
