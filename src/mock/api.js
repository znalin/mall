/*
 * @Descripttion: 定义mock文件
 * @Author: znalin
 * @Date: 2022-07-15 10:22:38
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-15 10:24:21
 */
// 导入插件库
import Mock from  'mockjs'
// 第一个参数是请求地址，第二个参数是返回数据
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id": 12,
    "username": "admin",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})