<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 09:03:02
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-08 16:59:53
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      res: {},
    }
  },
  mounted() {},
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
