const path = require('path');
const fs = require('fs');
const AutoDllPlugin = require('autodll-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const {
  DevServer,
  qiniuWebpackPlugin,
  getEnvConfig,
  publicPath,
  webpackAssetsManifestInstance,
} = require('./config/index');


function resolve(dir) {
  return path.join(__dirname, dir);
}

const target = getEnvConfig('baseUrl', 'https://www.easy-mock.com/mock/59ba562fe0dc663341aa54c3');

// 支持webpack define
// process.env.VUE_APP_MZXD_BASE = 'https://ykq.com';
// if (process.env.NODE_ENV === 'development') {
//   process.env.VUE_APP_MZXD_BASE = getEnvConfig('ykqBase', 'http://test.ykq.com');
// }

module.exports = {
  // 后台不需要
  // pages: entryMultupage,

  lintOnSave: true,
  // https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
  publicPath: process.env.NODE_ENV === 'production' ? publicPath : '/',

  // configure webpack-dev-server behavior
  devServer: new DevServer({
    proxy: [{
      path: '/v1/',
      target,
    }, {
      path: '/user/info',
      target,
    }],
  }),

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    // https://cli.vuejs.org/guide/webpack.html#adding-a-new-loader
    // https://github.com/neutrinojs/webpack-chain/tree/v3
    config.module
      .rule('json5')
      .test(/\.json5$/)
      .use('json5-loader')
      .loader('json5-loader')
      .end();
  },
  configureWebpack: (config) => {
    // 在内部无效
    // https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/util/resolveClientEnv.js
    // https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/base.js
    // https://github.com/vuejs/vue-cli/issues/787

    // const definePlugin = new webpack.DefinePlugin({
    // });
    // if (config.mode === 'development') {
    //   process.env.VUE_APP_XX_BASE = getEnvConfig('mzxdBase', 'http://xx.com');
    // }

    config.externals = {
      // 指定别名
      // "moment": 'moment'
      vue: 'Vue',
      'element-ui': 'ELEMENT',
      '@x-scaffold/adminui': 'AdminUi',
    };

    // delete config.resolve.alias['@'];
    config.resolve.alias.src = resolve('src');
    config.resolve.alias['@'] = resolve('src/layouts/vue-element-admin');
    config.resolve.alias.packages = resolve('src/packages');
    config.resolve.alias.components = resolve('src/components');
    config.resolve.alias.utils = resolve('src/utils');
    config.resolve.alias.api = resolve('src/api');

    // https://github.com/asfktz/autodll-webpack-plugin/issues/58
    config.plugins.push(new AutoDllPlugin({
      inject: true, // will inject the DLL bundles to index.html
      filename: '[name]_[hash:8].js',
      debug: true,
      path: './dll',
      // inherit(config) {
      //   // console.log(config);
      // },
      // config: {
      //   output: {
      //     filename: '[name]_v3.dll.js',
      //     library: '[name]_v3',
      //   },
      // },
      // hash: '[name]_v3',
      entry: {
        vendor: [
          'vue-router',
          'vuex',
          'nprogress',
          'js-cookie',
          'vue-lazyload',
          // 'pack-axios',
        ],
      },
    }));

    if (config.mode === 'development') {
      config.plugins.push(new StyleLintPlugin({
        failOnError: false,
        files: ['**/*.s?(a|c)ss', 'src/**/**/*.vue', 'src/***/*.css'],
        // files: '../static/.css'
      }));
    }

    if (config.mode === 'production') {
      config.devtool = false;
      // Configuration Error: Avoid modifying webpack output.publicPath directly. Use the "baseUrl" option instead.
      // config.output.publicPath = publicPath;
      // https://github.com/vuejs/vue-cli/issues/1608
      config.plugins.push(qiniuWebpackPlugin);
      config.plugins.push(webpackAssetsManifestInstance);
    }
  },
};