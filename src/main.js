/*
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 09:03:02
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-14 17:02:31
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// axios基础值
// 根据前端的跨域方式做调整
// cors jsonp   前端域名和后端不同： 'http://www.baidu.com'
// 接口代理：当前接口域名和前端域名一致  ： '/api'
axios.defaults.baseURL = '/api'
// 超时
axios.defaults.timeout = 8000

// 响应错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    // 状态码为0表示成功
    return res.data
  }else  if(res.status == 10){
    // 状态码为10表示未登录
    // main.js用路由跳时没有用的
    // 因为路由挂载在vue实例中，所以在页面中才可以使用this.$axios.push
    window.location.href = '/#/login'
  }else{
    // 真正报错，可以用UI组件库去弹出错误
    alert(res.msg)
  }

})



Vue.config.productionTip = false
// VueAxios可以将axios挂载在实例上，以后用this调用
// 而不是每个页面都要独自引入，再使用
Vue.use(VueAxios,axios)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
