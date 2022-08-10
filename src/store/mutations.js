/*
 * @Descripttion: mutations
 * @Author: znalin
 * @Date: 2022-08-10 10:44:43
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-10 11:45:47
 */
export default {
  saveUserName(state,username){
    state.username = username
  },
  saveCartCount(state,count){
    state.cartCount = count
  }
}