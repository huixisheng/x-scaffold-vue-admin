<template>
  <div class="home">
    <img src="~src/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'src/components/dev/HelloWorld.vue';

export default {
  title: 'Demo',
  name: 'snippetDemo',
  components: {
    HelloWorld,
  },
};
</script>
