<!--
 * @Descripttion: 主页面
 * @Author: znalin
 * @Date: 2022-07-13 15:09:12
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-14 10:50:21
-->
<template>
  <div>
    home
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'home',
  components: {
    NavHeader,
    NavFooter,
  },
}
</script>
