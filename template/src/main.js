// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");
import Vue from 'vue'

// import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import '@/styles/index.scss' // global css

import App from './App'
import router from './routers/index'
import store from './store/index';


// import i18n from './lang' // Internationalization
// import './icons' // icon
// import './errorLog'// error log
// import './permission' // permission control
// import './mock' // simulation data

// import * as filters from './filters' // global filters

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  // i18n: (key, value) => i18n.t(key, value)
})

// // register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  // i18n,
  // template: '<App/>',
  // components: { App }
})