<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 09:03:02
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-05 14:44:45
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

<style>
@import './assets/scss/reset.scss';
@import './assets/scss/modal.scss';
/* 只对modal组件的样式，全局使用 */

/* @import './assets/scss/config.scss'; */
/* @import './assets/scss/button.scss'; */
</style>
