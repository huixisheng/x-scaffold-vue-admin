import Vue from 'vue';
import Router from 'vue-router';
import Layout from 'src/layouts/PanJiaChen/Layout';
// import ErrorPage404 from 'src/views/errorPage/404';
// import ErrorPage401 from 'src/views/errorPage/401';
import routerConfig from './config';

// 以下子路由自己添加
import childrenDev from './children/dev';
import childrenErrorPage from './children/error-page';
import childrenDashbord from './children/dashboard';

Vue.use(Router);

/* Layout */

export const constantRouterMap = [
  {
    path: '/error',
    name: 'errorPage404',
    component: Layout,
    children: routerConfig.setRouter(childrenErrorPage),
    hidden: true,
  },
  // {
  //   path: '/401',
  //   component: ErrorPage401,
  //   name: 'errorPage401',
  //   hidden: true,
  // },
  {
    path: '/dashboard',
    component: Layout,
    alias: '/',
    redirect: '/dashboard/index',
    hidden: true,
    name: 'dashboard',
    children: routerConfig.setRouter(childrenDashbord),
    meta: {
      title: 'dashboard',
    },
  },
  {
    path: '/dev',
    component: Layout,
    alwaysShow: true,
    hidden: false,
    meta: {
      title: 'dev',
      icon: 'homepage',
      roles: ['editor', 'admin'],
      noCache: true,
    },
    name: 'dev',
    children: routerConfig.setRouter(childrenDev),
  },
];

export const asyncRouterMap = [
  { path: '*', redirect: '/error/404', hidden: true },
];

const router = new Router({
  mode: 'history',
  // TODO base
  routes: constantRouterMap,
});

export default router;
