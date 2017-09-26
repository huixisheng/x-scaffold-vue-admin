import Vue from 'vue';
import Router from 'vue-router';
import { Layout, Error404 } from 'layout/panjiachen/index';

// 以下子路由自己添加
import childrenAuth from './children/auth';
import childrenHello from './children/hello';
import childrenHome from './children/home';

Vue.use(Router);

// 配置路由前缀
const BASE_PARH = '/f';

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: childrenAuth[0]['component'],
    hidden: true,
  },
  {
    path: 'error',
    name: 'error',
    redirect: '/error/404',
    component: Layout,
    children: [{
      path: '404',
      name: 'error404',
      component: Error404,
    }],
    hidden: true,
  },
  {
    // @todo path : '/' 配置主路由重新打开会为空
    path: '/home',
    alias: '/',
    redirect: '/home/index',
    name: 'index',
    icon: 'dashboard',
    component: Layout,
    meta: { role: ['admin'], title: '控制台' },
    // hidden: false,
    children: childrenHome,
  },
];


export const asyncRouterMap = [
  {
    path: '/demo',
    name: 'Hello',
    icon: 'code',
    meta: {
      role: ['admin'],
      title: '例子',
    },
    component: Layout,
    children: childrenHello,
  },
  { path: '*', redirect: '/error', hidden: true },
];


// if (process.env.NODE_ENV === 'development') {
// }

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  base: BASE_PARH,
  linkActiveClass: 'router-active',
});
