<template>
  <el-breadcrumb class="app-breadcrumb" separator="/" v-if="levelList">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index)  in levelList" :key="item.name" v-if='item.meta.title'>
        <span v-if='item.redirect === "noredirect" || index == levelList.length - 1' class="no-redirect" v-text="generateTitle(item.meta.title)"></span>
        <router-link v-else :to="{name: item.name}" v-text="generateTitle(item.meta.title)"></router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { generateTitle } from '../../i18n';

export default {
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => {
        if (item.path.indexOf('/error') === 0) {
          return false;
        }
        return item.name || false;
      });
      const first = matched[0];
      if (first && first.name !== 'dashboard') {
        matched = [{
          name: 'dashboard',
          meta: { title: 'dashboard' },
        }].concat(matched);
      }
      this.levelList = matched;
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
