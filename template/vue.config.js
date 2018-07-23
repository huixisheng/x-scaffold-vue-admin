const path = require('path');
const fs = require('fs');
const portFinderSync = require('portfinder-sync');
const AutoDllPlugin = require('autodll-webpack-plugin');

const PORT = portFinderSync.getPort(8080);
const { IP } = require('./config/utils');
const proxyTable = require('./config/proxy-table');
const qiniuWebpackPlugin = require('./config/qiniu-plugin');
const { getEnvConfig, publicPath } = require('./config/utils');
const webpackAssetsManifessInstance = require('./config/deploy-manifest');

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 支持webpack define
// process.env.VUE_APP_MZXD_BASE = 'https://ykq.com';
// if (process.env.NODE_ENV === 'development') {
//   process.env.VUE_APP_MZXD_BASE = getEnvConfig('ykqBase', 'http://test.ykq.com');
// }

module.exports = {
  lintOnSave: true,

  // configure webpack-dev-server behavior
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    watchOptions: {
      poll: true,
    },
    progress: true,
    open: true,
    openPage: './',
    // TDOO fix socket实时预览的问题
    // host: IP,
    // bonjour: true,
    stats: 'errors-only',
    port: PORT,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    // https://webpack.docschina.org/configuration/dev-server/#devserver-uselocalip
    useLocalIp: true,
    historyApiFallback: true,
    noInfo: true,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: proxyTable, // string | Object
    before: (app) => {
      // console.log(app.request);
      // console.log(app.response);
    },
  },

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: (config) => {
    // config
    //   .plugin('define')
    //   .tap((args) => {
    //     console.log(args);
    //   });
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
          'pack-axios',
        ],
      },
    }));

    if (config.mode === 'production') {
      config.devtool = false;
      config.output.publicPath = publicPath;
      config.plugins.push(qiniuWebpackPlugin);
      config.plugins.push(webpackAssetsManifessInstance);
    }
  },
};