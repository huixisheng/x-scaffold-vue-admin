import Vue from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '@/icons/iconfont';

import App from './App';
import router from './routers/index';
import store from './store/index';

import i18n from './lang';
// import './icons' // icon
import './permission'; // permission control

// import * as filters from './filters' // global filters

Vue.use(Element, {
  size: 'medium'
});

// // register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
