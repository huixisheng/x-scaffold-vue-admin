import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layouts/PanJiaChen/Layout';
import childrenHome from './children/home';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import ErrorPage404 from '@/views/errorPage/404';
import ErrorPage401 from '@/views/errorPage/401';

// 以下子路由自己添加

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
    name: 'home',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: 'dashboard',
      icon: 'homepage',
      roles: ['editor', 'admin'],
      noCache: true,
    },
    children: [
      {
        name: 'index',
        path: 'index',
        component: Home,
        meta: {
          roles: ['admin', 'editor'],
          title: 'index',
          icon: 'homepage',
          noCache: true
        }
      }
    ].concat(childrenHome)
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    meta: {
      title: 'about',
      icon: 'homepage',
      noCache: true
    },
    children: [
      {
        name: 'about',
        path: 'about',
        component: About,
        meta: {
          title: 'about',
          icon: 'homepage',
          noCache: true
        }
      }
    ]
  }
];

export const asyncRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
];

const router = new Router({
  mode: 'history',
  // TODO base
  routes: constantRouterMap
});

export default router;
