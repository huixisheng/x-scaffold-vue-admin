import Vue from 'vue';
import BackToTop from './components/BackToTop';
import Hamburger from './components/Hamburger';
import Screenfull from './components/Screenfull';
import Sticky from './components/Sticky';
import IconSvg from './components/Icon-svg';
import Error404 from './components/Error/404';
import Error401 from './components/Error/401';
import Layout from './Layout';
import './styles/index.scss';

Vue.component('back-to-top', BackToTop);
Vue.component('hamburger', Hamburger);
Vue.component('screenfull', Screenfull);
Vue.component('sticky', Sticky);
Vue.component('icon-svg', IconSvg);
Vue.component('error-404', Error404);
Vue.component('errpr-401', Error401);

// export { default as Layout } from './Layout';
export { Error404, Error401, Layout };
