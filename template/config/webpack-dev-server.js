const portFinderSync = require('portfinder-sync');
const deepExtend = require('deep-extend');
const IP = require('ip').address();

const PORT = portFinderSync.getPort(8080);
const defaultProxyOption = {
  xfwd: false,
  // target,
  changeOrigin: true,
  secure: true,
  cookieDomainRewrite: {
    '*': IP,
  },
  pathRewrite: {

  },
};

// 配置见 https://webpack.docschina.org/configuration/dev-server/#devserver
const defaultDevServer = {
  // contentBase: path.join(__dirname, 'public'),
  watchOptions: {
    poll: true,
  },
  progress: true,
  open: true,
  openPage: './',
  // TDOO fix socket实时预览的问题 https://github.com/vuejs/vue-cli/pull/2230
  // 见/node_modules/@vue/cli-service/lib/commands/serve.js const sockjsUrl = publicUrl | '0.0.0.0',
  host: IP,
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
  proxy: {}, // string | Object
  before: (app) => {
    // console.log(app.request);
    // console.log(app.response);
  },
};

class DevServer {
  constructor(options) {
    if (Array.isArray(options.proxy)) {
      options.proxy = this.setProxy(options.proxy);
    }
    return deepExtend(defaultDevServer, options);
  }

  setProxy(proxyArray) {
    const proxy = {};
    proxyArray.forEach((item) => {
      proxy[item.path] = deepExtend(defaultProxyOption, {
        target: item.target,
      });
    });
    return proxy;
  }
}

module.exports = DevServer;