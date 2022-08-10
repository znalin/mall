<!--
 * @Descripttion: 首页
 * @Author: znalin
 * @Date: 2022-07-13 15:09:12
 * @LastEditors: znalin
 * @LastEditTime: 2022-08-10 14:41:54
-->
<template>
  <div class="index">
    <div class="container">
      <!-- 轮播 -->
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="o in item" :key="o.id">
                    <a :href="'/#/product/' + o.id"
                      ><img :src="o.img" />{{ o.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product' + item.id"><img :src="item.img" /></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a :href="'/#/product' + item.id" v-for="item in adsList" :key="item.id"
          ><img v-lazy="item.img"
        /></a>
      </div>
      <div class="banner">
        <a href="'/#/product/30'"><img v-lazy="'/imgs/banner-1.png'" /></a>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img src="/imgs/mix-alpha.jpg" /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, index) in phoneList" :key="index">
              <div class="item" v-for="(i, y) in item" :key="i.id">
                <span :class="{ 'new-pro': y % 2 == 0 }">新品</span>
                <div class="item-img"><img :src="i.mainImage" /></div>
                <div class="item-info">
                  <h3>{{ i.name }}</h3>
                  <p>{{ i.subtitle }}</p>
                  <p class="price" @click="addCart">{{ i.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal = false"
    >
      <template v-slot:body><p>商品添加成功！</p></template>
    </modal>
  </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar.vue'
import Modal from '../components/Modal.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true, // 自动播放
        loop: true, // 循环播放
        effect: 'cube', // 动画效果
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // 导航前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg',
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg',
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg',
        },
        {
          id: '47',
          img: '/imgs/slider/slide-4.jpg',
        },
        {
          id: '48 ',
          img: '/imgs/slider/slide-1.jpg',
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9',
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro',
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区',
          },
        ],
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png',
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg',
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png',
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg',
        },
      ],
      phoneList: [],
      showModal: false,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.axios
        .get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14)
          this.phoneList = [res.list?.slice(0, 4), res.list?.slice(4, 8)]
        })
    },
    addCart() {
      this.showModal = true
      // return
      //   this.axios
      //     .post('/carts', {
      //       productId: id,
      //       selected: true,
      //     })
      //     .then(() => {})
      //     .catch(() => {})
    },
    goToCart() {
      this.$router.push('/cart')
    },
  },
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.index {
  .swiper-box {
    position: relative;

    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 8;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &::after {
              position: absolute;
              right: 30px;
              top: 18.5px;
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
                a {
                  height: 75px;
                  color: $colorB;
                  font-size: 14px;
                  img {
                    height: 42px;
                    width: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
          .swiper-container {
            height: 451px;
            .swiper-button-prev {
              left: 274px;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 41px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              color: #fff;
              font-size: 14px;
              &.new-pro {
                background-color: #7ece68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              P {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &::after {
                  content: '';
                  margin-left: 5px;
                  vertical-align: middle;
                  @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
