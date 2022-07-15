<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 09:03:02
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-15 10:08:55
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
  mounted() {
    // mock  ---json方式
    this.axios.get('/mock/user/login.json').then((res) => {
      this.res = res
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
