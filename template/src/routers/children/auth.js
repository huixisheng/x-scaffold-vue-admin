const AuthLogin = () => import('src/views/auth/login');

/* 使用x-do-cli的命令 x view 自动生成 */

const routerList = [];

routerList.push({
  path: 'login',
  component: AuthLogin,
  meta: {
    title: '登录页面',
  },
  name: 'authLogin',
  hidden: false,
});


export default routerList;