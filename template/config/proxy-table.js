const { getEnvConfig, IP } = require('./utils');

const target = getEnvConfig('baseUrl', 'https://easy-mock.com/mock/59ba562fe0dc663341aa54c3/v1');

const proxyTable = {
  '/docs-list': {
    xfwd: false,
    target,
    changeOrigin: true,
    secure: true,
    cookieDomainRewrite: {
      '*': IP,
    },
    pathRewrite: {
      '^/docs-list': '/docs-list',
    },
  },
  '/add-vue-source': {
    xfwd: false,
    target: 'https://easy-mock.com/mock/59ba562fe0dc663341aa54c3/v1',
    changeOrigin: true,
    secure: true,
  },
};

module.exports = proxyTable;