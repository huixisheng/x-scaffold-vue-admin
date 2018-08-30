# {{ name }}

> {{ description }}


## 生成页面的路由和通用组件
> pages/*.vue 页面组件指定title用于导航标题显示，hidden用于隐藏侧边导航显示，name通用router的name, 可用于router的cache

```
$ npm i x-do-cli -g
# 生成card.vue在src/pages/group下
$ x-do-view card [-o src/pages] -c group
# 生成card.vue在src/components/group
$ x-do-component card [-o src/components] -c group
```