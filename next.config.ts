// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path.png', // This matches any path like /101.png
        destination: '/api/:path.png', // This rewrites to the API route
      },
    ];
  },
};
