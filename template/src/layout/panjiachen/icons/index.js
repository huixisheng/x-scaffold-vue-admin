import Vue from 'vue';
import IconSvg from '../components/Icon-svg'; // svg组件
// import generateIconsView from '../views/svg-icons/generateIconsView.js' // just for views/icons , you can delete it
// register globally

Vue.component('icon-svg', IconSvg);

// @todo webapck2 webpack3 解析的内容不一致
// 没有添加svg的loader
// 3 ["data:image/svg+xml;", "data:image/svg+xml;base64,]
// 2 {"default":{"id":"icon-404","viewBox":"0 0 1024 1024","content":"<","node":{}}}
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./svg', false, /\.svg$/)
// const iconMap = requireAll(req)

// generateIconsView.generate(iconMap) // just for views/icons , you can delete it
