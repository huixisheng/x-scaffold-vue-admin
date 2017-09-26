<style scoped>

</style>

<template>
  <div>
    <h1>Hello 后台管理模板</h1>
    <div class="flex">
      <div class="flex-item">flex-item</div>
      <div class="flex-item">flex-item</div>
    </div>
    <div class="flex">
      <div>
        <img v-for="item in imgs" v-lazy="item"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: '欢迎',
  data() {
    return {
      imgs: ['http://img0.cosmeapp.com/Fn31NNytMC4JLm-Gd2zVnLM3mGXg', 'http://img0.cosmeapp.com/bbs/upload/201606/16/16/36/5762650087c51822.jpg?imageMogr2/auto-orient/thumbnail/750x/format/JPG%7Cwatermark/1/image/aHR0cDovL3N0YXRpYy5jb3NtZWFwcC5jb20vd2F0ZXJtYXJrLnBuZw==/text/576O5aaG5b-D5b6X/fill/I0IxQjFCMQ==/fontsize/450/dissolve/95', 'http://img0.cosmeapp.com/FgpjUhdrV16uAAAEOHKvTTdpWgGw?imageView2/2/w/750/h/375'],
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
