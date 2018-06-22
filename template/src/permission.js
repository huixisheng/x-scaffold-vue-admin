import router from 'src/routers';
import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from 'src/utils/auth'; // getToken from cookie
import store from './store';

function redirectLogin() {
  console.log('redirectLogin');
}


NProgress.configure({ showSpinner: false }); // NProgress Configuration

// permissiom judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('superadmin') >= 0) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some((role) => permissionRoles.indexOf(role) >= 0);
}

const whiteList = ['login']; // no redirect whitelist

router.beforeEach((to, from, next) => {
  // console.log('getToken', getToken());
  NProgress.start(); // start progress bar
  if (getToken()) {
    // determine if there has token
    /* has token */
    if (to.name === 'login') {
      next({ path: '/' });
      NProgress.done(); // if current page is dashboard will not trigger afterEach hook, so manually handle it
    } else {
      console.log('store.getters.roles', store.getters.roles);
      debugger;
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store
          .dispatch('GetUserInfo')
          .then((data) => {
            // 拉取user_info
            const roles = data.roles; // note: roles must be a array! such as: ['editor','develop']
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
              console.log(to);
              next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            });
          })
          .catch((err) => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err || 'Verification failed, please login again');
              redirectLogin();
              // next({ path: '/' });
            });
          });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        // console.log('to.meta.roles', to);
        // console.log(store);
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
    if (whiteList.indexOf(to.path) !== -1) {
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
