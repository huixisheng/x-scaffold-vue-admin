/* generate by x-do-view */
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