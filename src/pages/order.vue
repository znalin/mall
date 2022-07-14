<!--
 * @Descripttion: 订单主视图
 * @Author: znalin
 * @Date: 2022-07-13 15:09:12
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-14 11:06:19
-->
<template>
  <div>
    <order-header></order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter,
  },
}
</script>
