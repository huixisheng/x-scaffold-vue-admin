import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layouts/PanJiaChen/Layout';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

/* Layout */

export const constantRouterMap = [{
    path: '',
    name: 'home',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: 'dashboard',
      icon: 'dashboard',
      noCache: true
    },
    children: [{
      name: 'index',
      path: 'index',
      component: Home,
      meta: {
        title: '首页',
        icon: 'dashboard',
        noCache: true
      }
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    meta: {
      title: '关于',
      icon: 'dashboard',
      noCache: true
    },
    children: [{
      name: 'about',
      path: 'about',
      component: About,
      meta: {
        title: '关于',
        icon: 'dashboard',
        noCache: true
      }
    }]
  }
];

export const asyncRouterMap = [];

const router = new Router({
  routes: constantRouterMap,
});

export default router;