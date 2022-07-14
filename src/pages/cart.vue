<!--
 * @Descripttion: 购物车
 * @Author: znalin
 * @Date: 2022-07-13 15:30:39
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-14 11:10:01
-->
<template>
  <div>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'cart',
  components: {
    OrderHeader,
    NavFooter,
  },
}
</script>
