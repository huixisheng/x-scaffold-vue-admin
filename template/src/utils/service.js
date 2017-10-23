import axios from 'axios';
// import { Toast } from 'mint-ui';
import Qs from 'qs';
import router from 'src/routers';
import { Message } from 'element-ui';
import { setStoreMhomeTicket, getStoreMhomeTicket } from './ticket';

// const STORE_TICKET = 'mhome_admin_ticket';

// // const CancelToken = axios.CancelToken;
// // const source = CancelToken.source();
// // source.cancel('Operation canceled by the user.');

// function setStoreMhomeTicket(authorization) {
//   const token = getStoreMhomeTicket();
//   if (authorization !== token && authorization) {
//     // @todo-ykq 储存慢的情况处理
//     localStorage.setItem(STORE_TICKET, authorization);
//   }
// }

// // setStoreMhomeTicket(CONFIG.authorization);

// function getStoreMhomeTicket() {
//   return localStorage.getItem(STORE_TICKET);
// }

// 创建axios实例
const service = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000, // 请求超时时间
});

// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// request拦截器
service.interceptors.request.use((config) => {
  const token = getStoreMhomeTicket();
  // @todo-ykq 下发的token与原来不一样，去获取用户信息
  if (token) {
    config.headers['authorization'] = token || '';
  }
  return config;
}, (error) => {
  // Do something with request error
  // console.log(error); // for debug
  Promise.reject(error);
});

// respone 拦截器
/* eslint consistent-return: "off" */
service.interceptors.response.use(
  (response) => {
    const authorization = response.headers.authorization;
    setStoreMhomeTicket(authorization);
    const code = response.data.code;
    const msg = response.data.msg;
    // const href = location.href;
    if (code === 10100 || code === 10090 || code === 10140 || code === 10130) {
      // http://apidoc.cosmeapp.com/mhome/#/api?id=common
      if (code === 10100) {
        Message.notice(msg);
        router.push({
          name: 'login',
        });
        // Toast(msg);
        // redirectLogin(href);
      }
      // const searchQuery = F.unparamQuery(location.href);
      // // 没有绑定手机号
      // if (code === 10090) {
      //   // Toast(msg);
      //   // router.push({
      //   //   name: 'memberCreate',
      //   //   query: {
      //   //     sku_id: searchQuery['sku_id'] || '',
      //   //   },
      //   // });
      // }
      // // 未开通会员和会员已过期
      // if (code === 10140 || code === 10130) {
      //   // Toast(msg);
      //   // router.push({
      //   //   name: 'memberIndex',
      //   // });
      // }
    } else {
      return response;
    }
  },
  (error) => {
    const config = error['config'];
    if (config['method'] === 'post') {
      Message.error('服务器开了个小差，请稍后再试');
      // Toast('服务器开了个小差，请稍后再试');
    }
    // debugger;
    // {"0":{"config":{"transformRequest":{},"transformResponse":{},"timeout":10000,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded","Authorization":"Authorization"},"method":"get","url":"/api/user/info","data":"{}"},"request":{},"response":{"data":"...","status":404,"statusText":"Not Found","headers":{"date":"Wed, 16 Aug 2017 16:04:32 GMT","content-encoding":"gzip","server":"cosmeapp/2015","x-powered-by":"PHP/7.1.0","vary":"Accept-Encoding","content-type":"text/html; charset=UTF-8","access-control-allow-origin":"http://h5.cosmeapp.com, https://h5.cosmeapp.com, https://test.h5.cosmeapp.com","cache-control":"no-cache, private","transfer-encoding":"chunked"},"config":{"transformRequest":{},"transformResponse":{},"timeout":10000,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"headers":{"Accept":"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded","Authorization":"Authorization"},"method":"get","url":"/api/user/info","data":"{}"},"request":{}}}}
    // console.log('err' + error);// for debug
    return Promise.reject(error);
  },
);

export default service;