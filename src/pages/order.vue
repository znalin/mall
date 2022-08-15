<!--
 * @Descripttion: 订单主视图
 * @Author: znalin
 * @Date: 2022-07-13 15:09:12
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-15 11:40:35
-->
<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'order',
  components: {
    NavFooter,
    ServiceBar,
  },
}
</script>
