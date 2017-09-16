import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css';
import VueLazyload from 'vue-lazyload';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
import 'src/icons/iconfont';
import { getToken } from 'utils/auth'; // 验权
// @todo-ykq 导致字体无法加载
// import 'element-ui/lib/theme-default/index.css';

import App from './App';
import router from './routers/';
import store from './store';
import './assets/app.css';
// import AdminUI from './vendors/adminui';

// @todo-ykq 支持webp
Vue.use(VueLazyload, {
  preLoad: 2,
  error: '//img0.cosmeapp.com/top/201501/12/10/32/54b3323b470da636.gif',
  loading: '//img0.cosmeapp.com/top/201501/12/10/32/54b3323b470da636.gif',
  attempt: 2,
});
Vue.use(ElementUI);
// Vue.use(AdminUI);

// permissiom judge
// function hasPermission(roles, permissionRoles) {
//   if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
//   if (!permissionRoles) return true;
//   return roles.some(role => permissionRoles.indexOf(role) >= 0);
// }

// register global progress.
const whiteList = ['/login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  // @todo 添加debug参数用于输出报错
  // console.log('beforeEach: %o', to);
  NProgress.start(); // 开启Progress
  if (getToken()) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' });
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
            next({ path: '/login' });
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
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
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

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
