/* 使用x-do-view自动生成，修改会被覆盖 */
const ErrorPage401 = () => import('src/pages/errorPage/401');
const ErrorPage404 = () => import('src/pages/errorPage/404');

const routerList = [];

routerList.push({
  path: '401',
  component: ErrorPage401,
  meta: {
    title: '',
  },
  name: 'page401',
  hidden: false,
});

routerList.push({
  path: '404',
  component: ErrorPage404,
  meta: {
    title: '',
  },
  name: 'page404',
  hidden: false,
});


export default routerList;