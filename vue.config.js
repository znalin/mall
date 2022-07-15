/*
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 10:25:52
 * @LastEditors: znalin
 * @LastEditTime: 2022-07-15 16:22:30
 */
module.exports={

  devServer:{
    // 本地访问主机  /a
    host:'localhost',
    // 本地默认端口，也是访问端口   /a
    port:8080,
    // 代理，我访问/a接口  代理到/b  实际访问/b接口
    proxy:{
      // 当访问/api  执行拦截，代理到慕课网/b,内部访问慕课网
      '/api':{
        target:'https://www.imooc.com', // /b网站头部主要url
        changeOrigin:true, // 我/a --在上面访问/a,/a迷惑变成/b---去访问/b
        pathRewrite:{
          '/api':''
        }

      }

    }

  }
}