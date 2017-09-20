const URL = {};

URL['authLogin'] = '/store/api/auth/sms-login';
URL['authLogout'] = '/store/api/user/logout';
// 后台登录用户的信息
URL['userInfo'] = '/store/api/user/get-user-info';

// 开发环境的模拟数据
if (process.env.NODE_ENV === 'development') {
  URL['authLogin'] = 'https://easy-mock.com/mock/59ba562fe0dc663341aa54c3/v1/user/info';
  URL['authLogout'] = 'https://easy-mock.com/mock/59ba562fe0dc663341aa54c3/v1/auth/logout';
  URL['userInfo'] = 'https://easy-mock.com/mock/59ba562fe0dc663341aa54c3/v1/user/info';
}

export default URL;
