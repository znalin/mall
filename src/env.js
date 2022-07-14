/*
 * @Descripttion: en环境缩写
 * @Author: znalin
 * @Date: 2022-07-14 17:40:26
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-14 18:41:04
 */
let baseURL;
// 因为项目本身就在node中运行,node.js中有个process进程
// process.env.NODE_ENV可以获取当前node.js进程里面的一些环境变量
// 这些环境变量最终写入node.js中去，即在package.json中的--mode
// --modexxx让webpack在npm run serve后告诉项目自己在哪个环境中运行
switch (process.env.NODE_ENV) {
    // 开发环境
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break;
    // 测试
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break;
    // 线上
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break;
}
export default {
  baseURL
}