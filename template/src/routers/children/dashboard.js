const DashbordIndex = () => import('src/views/dashboard/Index');

/* 使用x-do-cli的命令 x view 自动生成 */

const routerList = [];

routerList.push({
  path: 'index',
  component: DashbordIndex,
  meta: {
    title: '页面标题',
  },
  name: 'dashbordIndex',
  hidden: false,
});


export default routerList;