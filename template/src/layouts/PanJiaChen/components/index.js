import Vue from 'vue';
import IconSvg from './SvgIcon';
import BackToTop from './BackToTop';
import '../styles/index.scss';

export { default as Navbar } from './Navbar';
export { default as Sidebar } from './Sidebar/index.vue';
export { default as TagsView } from './TagsView';
export { default as AppMain } from './AppMain';

Vue.component('svg-icon', IconSvg);
Vue.component('back-to-top', BackToTop);
