<template>
  <div class="container" id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- <back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="50"></back-to-top> -->
    <back-to-top></back-to-top>
  </div>
</template>

<script>
// @todo keep-alive
export default {
  name: 'app',
  data() {
    return {
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中
        background: '#e7eaf1',
      },
    };
  },
  // watch: {
  //   $route: (to, from) => {
  //     console.log('App.vue -> watch $route', to, from);
  //   },
  // },
};
</script>

<style>
/* @todo 切换的动画优化 */
.router-fade-enter-active, .router-fade-leave-active { transition: opacity 0.3s; }
.router-fade-enter, .router-fade-leave-active { opacity: 0; }
</style>
