import HttpService from 'pack-axios';

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isString(o) {
  return typeof o === 'string';
}

const service = new HttpService({
  timeout: 10000,
  before(config) {
    // 请求前统一处理，比如添加jwt
    return config;
  },
  success(response) {
    const data = response.data;
    if (data.status === '1') {
      return data;
    } else {
      return Promise.reject(data);
    }
  },
  error(error) {
    // TODO 返回统一
    return Promise.reject(error);
  },
});


export default class Model {
  constructor(urls, httpService = service) {
    this.urls = urls;
    this.service = httpService;
    this.list = {};
    this.init();
  }

  init() {
    const urls = this.urls;
    const list = this.list;

    Object.entries(urls).forEach(([key, value]) => {
      let method = 'GET';
      let url;
      if (isObject(value)) {
        method = (value.method || 'GET').toUpperCase();
        url = value.url;
      } else if (isString(value)) {
        url = value;
      }
      const methodParamsKey = method === 'POST' ? 'data' : 'params';
      // TODO key 转换
      list[key] = {
        method,
        methodParamsKey,
        url,
      };
    });
  }

  run(modelName, params) {
    const httpService = this.service;
    const modelNameItem = this.list[modelName];
    const serviceParams = {
      url: modelNameItem.url,
      method: modelNameItem.method,
    };
    serviceParams[modelNameItem.methodParamsKey] = params;
    console.log('serviceParams', serviceParams);
    return httpService(serviceParams);
  }

  addModel() {
    // TODO
  }

}


// model.run(modelName, params).then(() => {

// }).catch((error) => {

// });