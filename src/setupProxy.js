const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://apis.data.go.kr',
      changeOrigin: true,
      router: { '/api': 'http://apis.data.go.kr' },
      pathRewrite: { '^/api': '' },
    })
  );
};
