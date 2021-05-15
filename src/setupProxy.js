const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function proxy(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    }),
  );
};
