<template>
  <div class="home">
    <img src="~@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/dev/HelloWorld.vue';

export default {
  title: '首页',
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
