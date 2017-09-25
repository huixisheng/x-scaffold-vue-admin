import Vue from 'vue';

import App from './App';
import router from './router';
import { i18n } from  'theme/index';

Vue.config.debug = true;

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App),
  i18n,
});
