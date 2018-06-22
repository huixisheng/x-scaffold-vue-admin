const DevAbout = () => import('src/views/dev/About');
const DevHome = () => import('src/views/dev/Home');
const DevList = () => import('src/views/dev/List');

/* 使用x-do-cli的命令 x view 自动生成 */

const routerList = [];

routerList.push({
  path: 'about',
  component: DevAbout,
  meta: {
    title: '',
  },
  name: 'devAbout',
  hidden: false,
});

routerList.push({
  path: 'home',
  component: DevHome,
  meta: {
    title: '',
  },
  name: 'devHome',
  hidden: false,
});

routerList.push({
  path: 'list',
  component: DevList,
  meta: {
    title: '',
  },
  name: 'devList',
  hidden: false,
});


export default routerList;