<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 09:03:02
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-12 16:29:52
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
    // 只有页面刷新才调用，如果退出登陆再登陆没有页面刷新这个接口不调用
    // 刷新的时候需要判断有无token，有才调接口
    if (this.$cookie.get('userId')) {
      this.getCartCount()
      this.getUser()
    }
  },
  methods: {
    // 获取用户信息
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        // to-do 保存到vuex里
        this.$store.dispatch('saveUserName', res.username)
      })
    },

    // 获取购物车数量
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
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
