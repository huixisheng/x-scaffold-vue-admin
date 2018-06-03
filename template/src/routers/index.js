import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from './config';
import Layout from '@/layouts/PanJiaChen/Layout';
import ErrorPage404 from '@/views/errorPage/404';
import ErrorPage401 from '@/views/errorPage/401';

// 以下子路由自己添加
import childrenDev from './children/dev';
// import childrenErrorPage from './children/error-page';

Vue.use(Router);

/* Layout */

export const constantRouterMap = [
  {
    path: '/404',
    component: ErrorPage404,
    hidden: true,
  },
  {
    path: '/401',
    component: ErrorPage401,
    hidden: true,
  },
  {
    path: '',
    name: 'dev',
    component: Layout,
    alwaysShow: true,
    hidden: false,
    meta: {
      title: 'dashboard',
      icon: 'homepage',
      roles: ['editor', 'admin'],
      noCache: true,
    },
    children: routerConfig.setRouter(childrenDev),
  },
];

export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true },
];

const router = new Router({
  mode: 'history',
  // TODO base
  routes: constantRouterMap
});

export default router;
