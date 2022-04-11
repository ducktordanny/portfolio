/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  typescript: {
    // FIXME [2022-04-20]: https://github.com/vercel/next.js/issues/36019
    ignoreBuildErrors: true,
  }
};
