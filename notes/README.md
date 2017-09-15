# x-scaffold-vue-admin

> 相关问题记录

## 图表 ##

- https://antv.alipay.com/g2/doc/index.html
- https://zhuanlan.zhihu.com/p/26578927
- https://github.com/oguzzkilic/awesome-charts
- https://github.com/fireyy/g2-vue
- https://www.zhihu.com/question/28687373/answer/42175712
- https://github.com/jobbole/awesome-javascript-cn
- https://www.zhihu.com/question/19929609
- http://web.jobbole.com/13671/
- http://echarts.baidu.com/feature.html
- https://github.com/xlsdg/vue-echarts-v3
- http://vue-chartjs.org/#/home
- https://github.com/hchstera/vue-charts
- https://npm.runkit.com/vue-echarts3
- https://github.com/miaolz123/vue-chart
- https://www.npmjs.com/package/vue-echarts3
- http://open.omwteam.com/sChart/
- https://elemefe.github.io/v-charts/#/

## 问题汇总
- webpack 插件 svg-sprite-loader https://cisy.me/webpack-svg-sprite/
- https://github.com/cenkai88/vue-svg-icon
- https://zhuanlan.zhihu.com/p/20753791



## 问题记录 ##

### todo 研究vue-router的什么周期
```
<template>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route: (to, from) => {
      console.log('App.vue -> watch $route');
    },
  },
  // 无效果
  // afterEach() {
  //   console.log('App.vue -> afterEach');
  //   // debugger;
  // },
};
</script>

<style>
</style>

```
