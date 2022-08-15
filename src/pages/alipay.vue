<!--
 * @Descripttion: 支付宝支付--中间页（从支付到支付宝支付）
 * @Author: znalin
 * @Date: 2022-07-13 15:30:39
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-15 09:54:37
-->
<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from './../components/Loading'
export default {
  name: 'alipay',
  components: {
    Loading,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true,
    }
  },
  mounted() {
    this.paySubmit()
  },
  methods: {
    paySubmit() {
      this.axios
        .post('/pay', {
          orderId: this.orderId,
          orderName: 'Vue高仿小米商城',
          amount: 0.01, //单位元
          payType: 1, //1支付宝，2微信
        })
        .then((res) => {
          // 从后端获取一个html渲染到页面中的表单上，然后里面有script,不能自己
          // 提交，需要手动submit表单提交跳转到支付宝支付页面
          this.content = res.content
          // form中html渲染需要时间，所以这里触发的时候要等一段时间
          setTimeout(() => {
            // 获取forms,然后手动提交
            document.forms[0].submit()
          }, 100)
        })
    },
  },
}
</script>
