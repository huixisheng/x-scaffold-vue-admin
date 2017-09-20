import Vue from 'vue';
import Router from 'vue-router';
import { Layout, Error404 } from 'layout/panjiachen/index';

const HomeIndex = () => import('views/home/index');
const authLogin = () => import('views/auth/login');

const demosDemo = () => import('views/demos/demo');
Vue.use(Router);

export const constantRouterMap = [
  { path: '/login', component: authLogin, hidden: true },
  { path: '/401', component: Error404, hidden: true },
  {
    // @todo path : '/' 配置主路由重新打开会为空
    path: '/home',
    alias: '/',
    name: 'index',
    icon: 'dashboard',
    component: Layout,
    meta: { role: ['admin'], title: '首页' },
    // hidden: false,
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      icon: 'user',
      meta: {
        role: ['admin'],
        title: '控制台',
      },
      component: HomeIndex,
    }],
  },
  {
    path: '/icon',
    component: Layout,
    icon: 'task',
    name: 'icon',
    noDropdown: false,
    meta: { role: ['admin'], title: '图标' },
    children: [{
      path: 'index',
      meta: {
        role: ['admin'],
        title: '图标',
      },
      component: HomeIndex,
      name: 'task',
    }],
  },
];


export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: 'permissionIndex',
    icon: 'huodong',
    meta: { role: ['admin'], title: '权限测试' },
    noDropdown: true,
    children: [
      {
        path: 'index',
        icon: 'tools',
        name: 'homeIndex',
        meta: {
          role: ['admin'],
          title: '权限测试',
        },
        component: HomeIndex,
      },
    ],
  },
  { path: '*', redirect: '/404', hidden: true, name: 'error404' },
];


if (process.env.NODE_ENV === 'development') {
  constantRouterMap.push({
    path: '/demo',
    name: 'Hello',
    icon: 'code',
    meta: {
      role: ['admin'],
      title: '例子',
    },
    component: Layout,
    children: [
      {
        icon: 'jubao',
        path: 'index',
        name: 'demoIndex',
        meta: {
          title: '例子',
        },
        // eslint-disable-next-line
        component: require('views/hello/hello').default,
      },
    ],
  });
}

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  linkActiveClass: 'router-active',
});
