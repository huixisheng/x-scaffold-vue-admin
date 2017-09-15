<style scoped>

</style>

<template>
  <div>
    <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: {

  },
  methods: {
    handleLogin() {
      this.$store.dispatch('LoginByUsername', { username: 'huixisheng', password: '123456' }).then(() => {
        // this.loading = false
        this.$router.push({ path: '/' });
        // this.showDialog = true
      }).catch(() => {
        // this.loading = false
      });
    },
  },
};
</script>
