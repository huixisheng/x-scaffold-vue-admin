import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css';
import VueLazyload from 'vue-lazyload';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
import 'src/icons/iconfont';
import Packages from 'components/index';
import { getToken } from 'utils/auth'; // 验权
// @todo-ykq 导致字体无法加载
// import 'element-ui/lib/theme-default/index.css';

import App from './App';
import router from './routers/';
import store from './store';
import './assets/app.css';
import AdminUI from './vendors/adminui';

Vue.use(VueLazyload, {
  preLoad: 2,
  error: '//img0.cosmeapp.com/top/201501/12/10/32/54b3323b470da636.gif',
  loading: '//img0.cosmeapp.com/top/201501/12/10/32/54b3323b470da636.gif',
  attempt: 2,
  filter: {
    // progressive (listener, options) {
    //     const isCDN = /qiniudn.com/
    //     if (isCDN.test(listener.src)) {
    //         listener.el.setAttribute('lazy-progressive', 'true')
    //         listener.loading = listener.src + '?imageView2/1/w/10/h/10'
    //     }
    // },
    webp(listener, options) {
      if (!options.supportWebp) return;
      const isCDN = /[img0|static].cosmeapp.com/;
      if (isCDN.test(listener.src)) {
        // https://developer.qiniu.com/dora/manual/1279/basic-processing-images-imageview2
        // https://developer.qiniu.com/dora/manual/1270/the-advanced-treatment-of-images-imagemogr2

        // http://img0.cosmeapp.com/bbs/upload/201606/16/16/36/5762650087c51822.jpg?imageMogr2/auto-orient/thumbnail/750x/format/JPG%7Cwatermark/1/image/aHR0cDovL3N0YXRpYy5jb3NtZWFwcC5jb20vd2F0ZXJtYXJrLnBuZw==/text/576O5aaG5b-D5b6X/fill/I0IxQjFCMQ==/fontsize/450/dissolve/95

        // http://img0.cosmeapp.com/FgpjUhdrV16uAAAEOHKvTTdpWgGw?imageView2/2/w/750/h/375

        // http://img0.cosmeapp.com/FgpjUhdrV16uAAAEOHKvTTdpWgGw?imageView2/2/w/750/h/375/format/jpg
        listener.src = formatImageToWebp(listener.src);
        // listener.src += '?imageView2/2/format/webp';
      }
    },
  },
});
Vue.use(ElementUI);
Vue.use(AdminUI);
Vue.use(Packages);

function formatImageToWebp(src) {
  // http://static.cosmeapp.com/activity/201703/28/10/50/58d9cf6d0d6a6679.jpg?imageMogr2/auto-orient/thumbnail/750x%3E  @todo
  if (src.indexOf('?imageView2') >= 0 || src.indexOf('?imageMogr2') >= 0) {
    if (src.indexOf('format/') >= 0) {
      return src.replace(/\/format\/jpg/ig, '/format/webp');
    }
    return src + '/format/webp';
  }
  return src + '?imageView2/2/format/webp';
}

// permissiom judge
// function hasPermission(roles, permissionRoles) {
//   if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
//   if (!permissionRoles) return true;
//   return roles.some(role => permissionRoles.indexOf(role) >= 0);
// }

// register global progress.
const whiteList = ['login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  // @todo 添加debug参数用于输出报错
  // console.log('beforeEach: %o', to);
  NProgress.start(); // 开启Progress
  if (getToken()) { // 判断是否有token
    if (to.name === 'login') {
      next({ name: 'index' });
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then((res) => { // 拉取user_info
          const roles = res.data.role;
          // console.log('GetUserInfo %o', JSON.stringify(res.data));
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            next({ ...to }); // hack方法 确保addRoutes已完成
          });
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            next({ name: 'login' });
          });
        });
      } else {
        next();
        // // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        // if (hasPermission(store.getters.roles, to.meta.role)) {
        //   next();//
        // } else {
        //   next({ path: '/401', query: { noGoBack: true } });
        // }
      }
    }
  } else {
    if (whiteList.indexOf(to.name) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next({ name: 'login' }); // 否则全部重定向到登录页
      // NProgress.done();
      // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});


// 生产环境错误日志
if (process.env.NODE_ENV === 'production') {
  // @todo 统计 fundebug
  // Vue.config.errorHandler = (err, vm) => {
  //   console.log(err, vm, window.location.href);
  // };
}
// debugger;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
