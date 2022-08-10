/*
 * @Descripttion: actions
 * @Author: znalin
 * @Date: 2022-08-10 10:44:43
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-10 11:46:42
 */
export default {
  saveUserName(context,username){
    context.commit('saveUserName',username)
  },
  saveCartCount(context,count){
    context.commit('saveCartCount',count)
  }
}