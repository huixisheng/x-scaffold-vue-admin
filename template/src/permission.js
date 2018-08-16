import router from 'src/routers';
import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from 'src/utils/auth'; // getToken from cookie
import store from './store';

function redirectLogin() {
  // TODO 根据自己的登录系统自行处理
  router.push({
    name: 'login',
  });
}


NProgress.configure({ showSpinner: false });

// TODO
// permissiom judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('superadmin') >= 0) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some((role) => permissionRoles.indexOf(role) >= 0);
}

const whiteList = ['login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  if (getToken()) {
    // determine if there has token
    /* has token */
    if (to.name === 'login') {
      // TODO 当前是登录页，已经登录的直接跳转到首页
      next({ path: '/' });
      NProgress.done(); // if current page is dashboard will not trigger afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch('GetUserInfo')
          .then((data) => {
            // 拉取user_info
            const roles = data.roles; // note: roles must be a array! such as: ['editor','develop']
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
              next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            });
          })
          .catch((err) => {
            store.dispatch('FedLogOut').then(() => {
              redirectLogin();
            });
          });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (!to.matched.length) {
          next({
            name: 'errorPage404',
          });
          return;
        }
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next();
        } else {
          // TODO 什么逻辑走入
          next({
            name: 'errorPage401',
            replace: true,
            query: { noGoBack: true },
          });
        }
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.name) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      redirectLogin(); // 否则全部重定向到登录页
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
