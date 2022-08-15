<!--
 * @Descripttion: 
 * @Author: znalin
 * @Date: 2022-07-13 15:09:12
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-15 14:31:40
-->
<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登陆</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"
            ><span class="icon-cart"></span>购物车({{ cartCount }})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a :herf="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMin红米</span>
            <div class="children">
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-1.png'" />
                  </div>
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">1799</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-2.png'" />
                  </div>
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">1799</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-3.png'" />
                  </div>
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">1799</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-4.png'" />
                  </div>
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">1799</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-5.png'" />
                  </div>
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">1799</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-6.png'" />
                  </div>
                  <div class="pro-name">小米CC9</div>
                  <div class="pro-price">1799</div>
                </a>
              </li>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" />
                  </div>
                  <div class="pro-name">小米壁画电视</div>
                  <div class="pro-price">699</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" />
                  </div>
                  <div class="pro-name">小米全面电视</div>
                  <div class="pro-price">1999</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-3-3.png'" />
                  </div>
                  <div class="pro-name">小米壁画电视</div>
                  <div class="pro-price">699</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" />
                  </div>
                  <div class="pro-name">小米壁画电视</div>
                  <div class="pro-price">699</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" />
                  </div>
                  <div class="pro-name">小米壁画电视</div>
                  <div class="pro-price">699</div>
                </a>
              </li>
              <li class="product">
                <a herf="" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="'/imgs/nav-img/nav-3-6.jpg'" />
                  </div>
                  <div class="pro-name">小米壁画电视</div>
                  <div class="pro-price">699</div>
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascrip:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Message } from 'element-ui'

export default {
  name: 'nav-header',
  data() {
    return {
      phoneList: [],
    }
  },
  computed: {
    username() {
      // 原是放在data里：username：this.$store.state.username
      // 此时username不可以放在data里，
      // 因为当页面刷新，app中请求usename是异步，这里获取是同步，先渲染
      // 再异步加载回数据，所以数据显示不出
      // 用computed,当数据改变会重新执行，渲染到页面
      return this.$store.state.username
    },
    cartCount() {
      return this.$store.state.cartCount
    },
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    },
  },
  mounted() {
    this.getProductList()
    // 如果是从登陆页跳过来就调这个接口
    if (this.$route.params && this.$route.params.from == 'login') {
      this.getCartCount()
    }
  },
  methods: {
    // 获取头部数据
    getProductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012',
            pageSize: 6,
          },
        })
        .then((res) => {
          this.phoneList = res.list
        })
    },
    // 跳转到购物车
    goToCart() {
      Message.info('成功跳转到购物车')
      this.$router.push('/cart')
    },
    // 跳转到登陆页
    login() {
      this.$router.push('/login')
    },
    // 获取购物车数量
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        // to-do 保存到vuex里
        this.$store.dispatch('saveCartCount', res)
      })
    },
    // 退出
    logout() {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('退出成功')
        // userId清空
        this.$cookie.set('userId', '', { expires: '-1' })
        // store里保存的清空
        this.$store.dispatch('saveUserName', '')
        this.$store.dispatch('saveCartCount', 0)
        // 跳转到登陆页
        this.$router.push('/login')
      })
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            content: '';
            @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
            transition: margin 0.2s;
          }
          &::after {
            content: '';
            display: inline-block;
            @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: 600;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
              transition: height 0.5s;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 220px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            background-color: #fff;
            height: 0;
            opacity: 0;
            overflow: hidden;

            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              &::before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }

              a {
                display: inline-block;
              }
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png', 18px);
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
