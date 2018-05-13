/**
 * ajax请求的url链接配置
 * @author huixisheng
 */
const BASE_PATH = 'https://www.easy-mock.com/mock/5ad8a552f3464d4f566fe012';
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
  }
};

// eslint-disable-next-line
for (const i in URL) {
  // TODO
  URL[i]['url'] = BASE_PATH + URL[i]['url'];
}


export default URL;