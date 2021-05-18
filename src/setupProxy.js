const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function proxy(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: process.env.API_SERVER_URL,
      changeOrigin: true,
    }),
  );
};
