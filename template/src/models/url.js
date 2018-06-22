/**
 * ajax请求的url链接配置
 * @author huixisheng
 */
const BASE_PATH = 'https://easy-mock.com/mock/59ba562fe0dc663341aa54c3/v1';

// 后台用户模块
const authUrl = {
  authLogin: {
    method: 'POST',
    url: '/auth/login',
  },
  authLogout: {
    method: 'GET',
    url: '/auth/logout',
  },
  authUser: {
    method: 'GET',
    url: '/user/info',
  },
};

const URL = {
  // 返回相关文档列表
  docsList: {
    method: 'GET',
    url: '/docs-list',
  },
  // 新增Vue资源
  addVueSource: {
    method: 'POST',
    url: '/add-vue-source',
  },
  ...authUrl,
};

// eslint-disable-next-line
for (const i in URL) {
  // TODO
  URL[i]['url'] = BASE_PATH + URL[i]['url'];
}

export default URL;
