/*
 * @Descripttion: 入口文件
 * @Author: znalin
 * @Date: 2022-08-01 16:14:37
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-10 14:05:58
 */
import Vue from 'vue'
import Vuex from 'vuex'
import  mutations  from './mutations'
import actions from './action'
Vue.use(Vuex)

const state ={
  username:'',// 登陆用户名
  cartCount:0,// 购物车数量
}
export default new Vuex.Store({
  state,
  mutations,
  actions

})