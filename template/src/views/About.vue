<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import modelInstance from '@/models/index';

export default {
  name: 'about',
  components: {

  },
  mounted() {
    modelInstance.run('addVueSource', {}).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log('error', error);
    });
    modelInstance.run('docsList', {}).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log('error', error);
    });
  },
};

</script>