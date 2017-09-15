<template>
  <div class="container" id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// @todo keep-alive
export default {
  name: 'app',
  watch: {
    $route: (to, from) => {
      console.log('App.vue -> watch $route', to, from);
    },
  },
};
</script>

<style>
/* @todo 切换的动画优化 */
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
