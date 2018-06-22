const xConfig = require('x-config-deploy').getConfig();
const QiniuWebpackPlugin = require('better-qiniu-webpack-plugin');
const { pkg, publicPath, qiniuBucket, qiniuDomain } = require('./utils');

const qiniuWebpackPlugin = new QiniuWebpackPlugin({
  accessKey: xConfig.qiniuConfig.accessKey, // required
  secretKey: xConfig.qiniuConfig.secretKey, // required
  bucket: qiniuBucket, // required
  bucketDomain: qiniuDomain, // required
  matchFiles: ['*.css', '*.js'],
  uploadPath: pkg.name + '/',
  batch: 10,
});

// const QiniuPlugin = require('qiniu-webpack-plugin');
// const qiniuPluginAssets = new QiniuPlugin({
//   ACCESS_KEY: xConfig.qiniuConfig.accessKey,
//   SECRET_KEY: xConfig.qiniuConfig.secretKey,
//   bucket: 'deploy',
//   path: pkg.name,
//   // include: [],
//   // include: [/.*\.(css)$/g, /.*\.(js)$/g],
//   // include: [new RegExp('dist')],
//   // include 可选项。你可以选择上传的文件，比如['main.js']``或者[/main/]`
//   // path: '[hash]'
// });

module.exports = qiniuWebpackPlugin;