/*
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-08-01 16:14:36
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-12 10:24:26
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
