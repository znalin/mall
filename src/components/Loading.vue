<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-08-15 09:10:45
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-15 09:10:47
-->
<template>
  <div class="loading">
    <img src="/imgs/loading-svg/loading-bars.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: 'loading',
}
</script>
<style lang="scss">
.loading {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 30px 0;
  img {
    height: 100%;
  }
}
</style>
