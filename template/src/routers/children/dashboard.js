/* generate by x-do-view */
const DashboardIndex = () => import('src/pages/dashboard/Index');

const routerList = [];

routerList.push({
  path: 'index',
  component: DashboardIndex,
  meta: {
    title: '页面标题',
  },
  name: 'dashboardIndex',
  hidden: false,
});

export default routerList;