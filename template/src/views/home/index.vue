<style scoped>

</style>

<template>
  <div>
    <h1>Hello 后台管理模板</h1>
    <div class="flex">
      <div class="flex-item">flex-item</div>
      <div class="flex-item">flex-item</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    // debugger;
  },
  // 属于组件内的钩子
  // https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
  // https://segmentfault.com/a/1190000008879966
  beforeRouteEnter(to, from, next) {
    // debugger;
    console.log('home/index.vue -> beforeRouteEnter');
    // 必须添加next方法
    next();
    // debugger;
  },
  beforeRouteUpdate(to, from, next) {
    debugger;
    console.log('home/index.vue -> beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, next) {
    // debugger;
    console.log('home/index.vue -> beforeRouteLeave');
    next();
  },
  props: {

  },
  methods: {

  },
};
</script>
