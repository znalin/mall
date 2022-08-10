<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 09:03:02
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-10 11:47:09
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
    this.getCartCount()
    this.getUser()
  },
  methods: {
    // 获取用户信息
    getUser() {
      this.axios.get('/user').then((res) => {
        // to-do 保存到vuex里
        this.$store.dispatch('saveUserName', res.username)
      })
    },

    // 获取购物车数量
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        // to-do 保存到vuex里
        this.$store.dispatch('saveCartCount', res)
      })
    },
  },
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
