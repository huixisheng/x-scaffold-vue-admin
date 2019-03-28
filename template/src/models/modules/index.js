/**
 * ajax请求的url链接配置
 * @author huixisheng
 */
import authUrls from './auth';
import testUrls from './test';

const BASE_PATH = '/v1';


const URL = {
  ...testUrls,
  ...authUrls,
};

// eslint-disable-next-line
for (const i in URL) {
  // TODO
  URL[i]['url'] = BASE_PATH + URL[i]['url'];
}

export default URL;