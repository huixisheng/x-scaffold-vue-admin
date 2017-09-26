const HomeIndex = () => import('src/views/home/index');

/* 使用x-do-cli的命令 x view 自动生成 */

const routerList = [];

routerList.push({
  path: 'index',
  component: HomeIndex,
  meta: {
    title: '欢迎',
  },
  name: 'homeIndex',
  hidden: false,
});


export default routerList;
