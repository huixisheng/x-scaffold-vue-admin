<template>
  <div class="about">
    <ul>
      <li v-for="item in list">
        <a :href="item.url">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import modelInstance from '@/models/index';

export default {
  name: 'list',
  title: '列表',
  data() {
    return {
      list: []
    }
  },
  components: {},
  mounted() {
    const self = this;
    modelInstance
      .run('docsList', {})
      .then(data => {
        this.list = data.data;
        console.log(data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }
};
</script>
