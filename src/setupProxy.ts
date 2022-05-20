import { createProxyMiddleware } from 'http-proxy-middleware';

export const apiProxy = createProxyMiddleware('/api', {
  target: 'http://apis.data.go.kr',
  changeOrigin: true,
  router: { '/api': 'http://apis.data.go.kr' },
  pathRewrite: { '^/api': '' },
});
