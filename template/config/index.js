const qiniuWebpackPlugin = require('./qiniu-plugin');
const { getEnvConfig, publicPath } = require('./utils');
const webpackAssetsManifestInstance = require('./deploy-manifest');
const DevServer = require('./webpack-dev-server');
const entryMultupage = require('./entry-multipage');

module.exports = {
  qiniuWebpackPlugin,
  getEnvConfig,
  publicPath,
  webpackAssetsManifestInstance,
  DevServer,
};