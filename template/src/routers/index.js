import Vue from 'vue';
import Router from 'vue-router';
import Layout from 'src/layouts/vue-element-admin/layout/Layout';
import routerConfig from './config';

import childrenSnippet from './modules/snippet';
import childrenErrorPage from './modules/error-page';
import childrenDashboard from './modules/dashboard';
import childrenAuth from './modules/auth';


// 以下子路由自己添加
Vue.use(Router);

// 配置路由前缀。根据后端修改
export const BASE_PATH = '/';

/**
 * note: sub-menu only appear when children.length>=1
 * detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 */

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
*/

export const constantRoutes = [
  {
    path: '/error',
    name: 'errorPage404',
    component: Layout,
    children: routerConfig.setRouter(childrenErrorPage),
    hidden: true,
  },
  // 添加 ice 路由的地址
  // {
  //   path: '',
  //   component: Layout,
  //   redirect: '/page6/xx',
  //   meta: {
  //     title: 'page6',
  //     icon: 'tree',
  //   },
  //   children: [{
  //     path: 'page6',
  //     meta: {
  //       title: 'page6xx',
  //       noCache: true,
  //       affix: true,
  //       icon: 'product',
  //     },
  //     name: 'dashboardIndex',
  //     hidden: false,
  //     component: require('../pages/Page6/index').default,
  //   }],
  //   name: 'errorPage401',
  //   hidden: false,
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
      icon: 'product',
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
      icon: 'fenlei',
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

export const asyncRoutes = [
  { path: '*', redirect: '/error/404', hidden: true },
];

export const routes = constantRoutes;

const router = new Router({
  mode: 'history',
  base: BASE_PATH,
  routes,
});

export function resetRouter() {

}

export default router;