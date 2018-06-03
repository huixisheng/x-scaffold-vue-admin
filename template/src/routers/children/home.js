const HomeList = () => import('@/views/home/List');

/* 使用x-do-cli的命令 x view 自动生成 */

const routerList = [];

routerList.push({
  path: 'list',
  component: HomeList,
  meta: {
    roles: ['editor'],
    title: 'homeList',
  },
  name: 'homeList',
  hidden: false,
});


export default routerList;