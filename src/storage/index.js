/*
 * @Descripttion: 功能存储的工具箱
 * @Author: znalin
 * @Date: 2022-07-13 15:04:28
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-14 15:50:18
 */
const STORAGE_KEY = 'mall';
export default{
  // 存储值 
  setItem(key,value,module_name){
    // 往（user:{username:'xxx',age:18})里面添加username同级值
    // module_name 是user   key 是username
    if(module_name){
      let val = this.getItem(module_name)
      val[key] =value
      this.setItem(module_name,val)
    }else{
    //  往（user:{username:'xxx',age:18})里面添加user同级值
    let val = this.getStorage();
    val[key] = value;
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
  },

  // 获取某一个模块下面的属性
  getItem(key,module_name){
    // （user:{username:'xxx',age:18}) 获取user.username
    // module_name 是user   key 是username
    if(module_name){
      let val = this.getItem(module_name)
      if(val) return val[key];
    }
    // （user:{username:'xxx',age:18}) 获取user
   return this.getStorage()[key];
    
  },

  getStorage(){
   return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    
  },
  
  clear(key,module_name){
    let val = this.getStorage();
    if(module_name){
      delete val[module_name][key]
    }else{
      delete val[key]
    }
    this.setItem(val)
  }
}