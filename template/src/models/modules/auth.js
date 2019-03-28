// 后台用户模块
const url = {
  authCaptcha: {
    method: 'GET',
    url: '/auth/captcha',
  },
  authLogin: {
    method: 'POST',
    url: '/auth/login',
  },
  authLogout: {
    method: 'POST',
    url: '/auth/logout',
  },
  /**
    {
      "status": 1,
      "data": {
        "roles": [
          "superadmin"
        ],
        "introduction": "含有所有的操作权限",
        "avatar": "//img0.cosmeapp.com/FhpqzjdxM_FKKyzXxI8QNpprxUsu",
        "name": "超级管理员"
      }
    }
  */
  authUser: {
    method: 'GET',
    url: '/user/info',
  },
};

export default url;