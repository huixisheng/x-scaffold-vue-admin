const path = require('path');
const IP = require('ip').address();
const portFinderSync = require('portfinder-sync');
const PORT = portFinderSync.getPort(8080);
const WebpackAssetsManifest = require('webpack-assets-manifest');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,

  // configure webpack-dev-server behavior
  devServer: {
    open: true,
    host: IP,
    port: PORT,
    https: false,
    hotOnly: false,
    // historyApiFallback: true,
    noInfo: true,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    // before: app => {}
  },

  // resolve: {
  //   modules: [
  //     resolve('src'),
  //     resolve('node_modules'),
  //   ],
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: {
  //     vue$: 'vue/dist/vue.esm.js',
  //     src: resolve('src'),
  //     // @: resolve('src'),
  //     // views: resolve('src/views'),
  //     // packages: resolve('src/packages'),
  //     // components: resolve('src/components'),
  //     // assets: resolve('src/assets'),
  //     // models: resolve('src/api'),
  //     // utils: resolve('src/utils'),
  //   },
  // },
  // TODO alias

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: (config) => {
    /**{ symlinks: true,
    alias:
   { '@': '/Users/huixisheng/x-scaffold/x-scaffold-vue-admin/template/src',
     'vue$': 'vue/dist/vue.runtime.esm.js' },
  extensions: [ '.js', '.jsx', '.vue', '.json' ],
  modules:
   [ 'node_modules',
     '/Users/huixisheng/x-scaffold/x-scaffold-vue-admin/template/node_modules',
     '/Users/huixisheng/x-scaffold/x-scaffold-vue-admin/template/node_modules/@vue/cli-service/node_modules' ] }
     */
    // TODO development 模式不生成
    config.plugins.push(
      // https://npm.taobao.org/package/webpack-assets-manifest
      new WebpackAssetsManifest({
        output: path.join(__dirname, 'dist/manifest.json'),
        publicPath: 'https://p1.cosmeapp.com/',
        done(manifest) {
          // eslint-disable-next-line
          const { requestAssets } = require('request-assets');
          const manifestPath = path.join(__dirname, 'dist/manifest.json');
          const cacheManifestAssets = manifestPath.replace('.json', '-cache.json');
          // requestAssets({
          //   webpack: JSON.stringify(manifest.assets),
          //   path: path.basename(manifestPath, '.json'),
          //   module: 'test',
          // }, cacheManifestAssets).then((body) => {
          //   console.log(body);
          // }).catch((error) => {
          //   console.log(error);
          // });
        },
      })
    );
  },
};
