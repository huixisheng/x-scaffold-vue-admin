<template>
  <div class="about">
    <h2>list</h2>
    <ul>
      <li v-for="item in list" :key="item.title">
        <a :href="item.url" v-text="item.title"></a>
      </li>
    </ul>
  </div>
</template>
<script>
import modelInstance from '@/models/index';

export default {
  name: 'list',
  data() {
    return {
      list: [],
    };
  },
  components: {},
  mounted() {
    const self = this;
    modelInstance
      .run('docsList', {})
      .then((data) => {
        this.list = data.data;
        console.log(data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  },
};
</script>
