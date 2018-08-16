/* 使用x-do-view自动生成，修改会被覆盖 */
const AuthLogin = () => import('src/pages/auth/Login');

const routerList = [];

routerList.push({
  path: 'login',
  component: AuthLogin,
  meta: {
    title: '登录',
  },
  name: 'authLogin',
  hidden: true,
});


export default routerList;