/*
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 09:03:02
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-12 11:00:31
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant,{Lazyload} from 'vant';
import VueCookie from 'vue-cookie'
import store from './store'
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css'
Vue.use(Vant);
Vue.use(Lazyload,
  {
    loading:'/imgs/loading-svg/loading-bars.svg'
  });



// import env from './env'

// 制定开关，可以控制是否mock
const mock = false
if(mock){
  // import是预加载，即项目一开始就加载,这样无论mock是true还是false
  // 都会加载mock,去拦截请求，使得所有请求都用mock
  // require是代码执行需要加载才加载
    require('./mock/api')
}

// axios基础值
// 根据前端的跨域方式做调整
// cors jsonp   前端域名和后端不同： 'http://www.baidu.com'
// 接口代理：当前接口域名和前端域名一致  ： '/api'
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = env.baseURL

// 超时
axios.defaults.timeout = 8000

// 响应错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  // 获取路径
  let path = location.hash;
  if(res.status == 0){
    // 状态码为0表示成功
    return res.data
  }else  if(res.status == 10){
    // 只对非首页的页面进行错误跳转
    if(path != '#/index'){
       // 状态码为10表示未登录
    // main.js用路由跳时没有用的
    // 因为路由挂载在vue实例中，所以在页面中才可以使用this.$axios.push
    window.location.href = '/#/login'
    }
    return Promise.reject(res); // 在具体请求中会在catch中捕获到错误，如果这里没有返回异常默认是正常，在具体请求中还会进入正常代码执行
   
  }else{
    // 真正报错，可以用UI组件库去弹出错误
    // alert(res.msg)
    Message.warning(res.msg)
    // 抛出错误
    return Promise.reject(res);

  }

})
Vue.config.productionTip = false
// VueAxios可以将axios挂载在实例上，以后用this调用
// 而不是每个页面都要独自引入，再使用
Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(Message)
Vue.prototype.$message = Message
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
