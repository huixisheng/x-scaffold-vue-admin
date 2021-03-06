import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import 'normalize.css/normalize.css';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AdminUI from '@x-scaffold/adminui';
import Packages from 'components/index';
import 'src/assets/app.css';
import apiInstance from 'src/models/index';
import store from 'src/layouts/vue-element-admin/store/index';
import i18n from 'src/layouts/vue-element-admin/lang';
import '@/styles/index.scss';
import 'src/icons/';

import App from './App';
import router from './routers/index';

import './permission'; // permission control

Vue.prototype.$http = apiInstance;
// import * as filters from './filters' // global filters

Vue.use(VueLazyload, {
  preLoad: 2,
  error: '//img0.cosmeapp.com/top/201501/12/10/32/54b3323b470da636.gif',
  loading: '//img0.cosmeapp.com/top/201501/12/10/32/54b3323b470da636.gif',
  attempt: 2,
  filter: {
    webp(listener, options) {
      if (!options.supportWebp) return;
    },
  },
});
Vue.use(Element, {
  size: 'medium',
});
Vue.use(AdminUI);
Vue.use(Packages);

// // register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false;

store.dispatch('settings/changeSetting', {
  key: 'sidebarLogo',
  value: true,
});

store.dispatch('settings/changeSetting', {
  key: 'fixedHeader',
  value: true,
});

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: (h) => h(App),
});