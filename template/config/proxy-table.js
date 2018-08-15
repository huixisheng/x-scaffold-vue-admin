const IP = require('ip').address();
const { getEnvConfig } = require('./utils');

// 可以在.env配置中baseUrl
const target = getEnvConfig('baseUrl', 'https://easy-mock.com/mock/59ba562fe0dc663341aa54c3/v1');

// 提示 小心只写部分路径会匹配代理到线上。避免踩坑
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