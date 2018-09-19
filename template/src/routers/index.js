import Vue from 'vue';
import Router from 'vue-router';
import Layout from 'src/layouts/PanJiaChen/Layout';
import routerConfig from './config';

import childrenSnippet from './children/snippet';
import childrenErrorPage from './children/error-page';
import childrenDashboard from './children/dashboard';
import childrenAuth from './children/auth';


// 以下子路由自己添加
Vue.use(Router);

// 配置路由前缀。根据后端修改
export const BASE_PATH = '/';

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
    children: routerConfig.setRouter(childrenDashboard),
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
      title: 'snippet',
      icon: 'homepage',
      roles: ['editor', 'admin'],
      noCache: true,
    },
    name: 'dev',
    children: routerConfig.setRouter(childrenSnippet),
  },
  {
    path: '/login',
    name: 'login',
    component: childrenAuth[0]['component'],
    hidden: true,
  },
];

export const asyncRouterMap = [
  { path: '*', redirect: '/error/404', hidden: true },
];

export const routes = constantRouterMap;

const router = new Router({
  mode: 'history',
  base: BASE_PATH,
  routes,
});

export default router;