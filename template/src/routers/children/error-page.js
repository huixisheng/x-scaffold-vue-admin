const ErrorPage401 = () => import('src/views/errorPage/401');
const ErrorPage404 = () => import('src/views/errorPage/404');

/* 使用x-do-cli的命令 x view 自动生成 */

const routerList = [];

routerList.push({
  path: '401',
  component: ErrorPage401,
  meta: {
    title: '',
  },
  name: 'errorPage401',
  hidden: false,
});

routerList.push({
  path: '404',
  component: ErrorPage404,
  meta: {
    title: '',
  },
  name: 'errorPage404',
  hidden: false,
});


export default routerList;