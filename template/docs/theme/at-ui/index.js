import Vue from 'vue';

import DemoBox from './components/demobox';
import IconList from './components/iconlist';
import VueClipboard from './directives/clipboard';

Vue.use(VueClipboard);
Vue.component('demo-box', DemoBox);
Vue.component('icon-list', IconList);

