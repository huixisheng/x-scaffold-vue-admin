import Vue from 'vue';
import VueI18n from 'vue-i18n';
import 'at-ui-style/css/at.min.css';

import App from './App';
import router from './router';
import 'theme/index';

// @todo 提取
import zhLocale from 'theme/locale/lang/zh-CN';
import enLocale from 'theme/locale/lang/en-US';

Vue.use(VueI18n);


const matchArr = window.location.href.match(/#\/(zh|en)/);
const urlLang = matchArr && matchArr[1];
let navigatorLang = window.navigator.language.slice(0, 2);

if (['en', 'zh'].indexOf(navigatorLang) <= -1) {
  navigatorLang = '';
}

const userLang = urlLang || window.localStorage.getItem('at-ui-language') || navigatorLang || 'zh';


const i18n = new VueI18n({
  locale: userLang,
  messages: {
    en: {
      ...enLocale,
    },
    zh: {
      ...zhLocale,
    },
  },
});

Vue.config.debug = true;

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App),
  i18n,
});
