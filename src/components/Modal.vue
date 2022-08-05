<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-08-05 14:42:24
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-05 15:04:06
-->
<template>
  <div class="modal" v-show="showModal">
    <!-- 遮罩层 -->
    <div class="mask"></div>
    <!-- 弹框 -->
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="javascript:;" class="btn">确定</a>
        <a href="javascript:;" class="btn">取消</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modal',
  props: {
    // 弹框类型：小small、中middle、大large、表单form
    modalTypt: {
      type: String,
      default: 'form',
    },
    // 弹框标题
    title: String,
    // 按钮类型： 1：确定按钮 2：取消按钮 3：确定取消都有
    btnType: String,
    // 确定按钮内容
    sureText: {
      type: String,
      default: '确定',
    },
    // 取消按钮内容
    cancelText: {
      type: String,
      default: '取消',
    },
    // 弹框是否展示
    showModal: Boolean,
  },
}
</script>
