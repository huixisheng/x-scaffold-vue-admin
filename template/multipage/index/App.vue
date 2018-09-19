<template>
<div>

  <div>
    <div>页面入口列表</div>
    <ul>
      <li v-for="page in pages" :key="page.path">
        <a :href="'/' + page.path" v-text="page.title"></a>
      </li>
    </ul>
  </div>

  <div>
    <h2>单页入口</h2>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <a :href="spaLink(route)" v-text="showSpaTitile(route)"></a>
        <ol v-if="route.children && route.children.length">
          <li v-for="subRoute in route.children" :key="subRoute.path">
            <a :href="spaSubLink(route, subRoute)" v-text="showSpaTitile(subRoute)"></a>
          </li>
        </ol>
      </li>
    </ul>
  </div>

</div>
</template>

<script>
import pages from 'src/config/pages.json5';
import { routes, BASE_PATH } from 'src/routers/index';

export default {
  title: '所有页面入口',
  data() {
    return {
      pages,
      routes,
      routerBase: BASE_PATH,
    };
  },
  created() {

  },
  props: {

  },
  methods: {
    showSpaTitile(route) {
      if (route.meta && route.meta.title) {
        return route.meta.title;
      }
      return route.path;
    },
    spaLink(route) {
      return BASE_PATH + '/' + route.name;
    },
    spaSubLink(route, subRoute) {
      return BASE_PATH + '/' + route.name + '/' + subRoute.path;
    },
  },
};
</script>

<style scoped>
</style>