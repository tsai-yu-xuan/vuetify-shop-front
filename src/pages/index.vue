<template>
  <swiper
    class="mySwiper"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
  >
    <swiper-slide>
      <div class="image-container">
      <div class="img1-1"></div>

      <img class="img1-4" src="../assets/banner-1/banner-1-4.png" alt="">

      <img class="img1-3" src="../assets/banner-1/banner-1-3.png" alt="">
      <img class="img1-2" src="../assets/banner-1/banner-1-2.png" alt="">
    </div>
    </swiper-slide>

  </swiper>

  <div class="floating-content">
    <v-row>
      <v-col cols="12"  class="text-center title-Chinese-position" >
        <div class="text-Chinese text-black ">鼠兔永恆居所</div>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"  class="text-position" >
        <div class="text-English-position text-English ">Eternal Haven of Pikas</div>
        <div class="text-Chinese text-black text-Chinese-position-p text-p"><p> &nbsp; 鼠兔永恆居所是一個專為鼠兔而設的長眠居所，我們提供最舒適的環境&nbsp; ，讓您的鼠兔能夠享受這美好世界。</p></div>
        </v-col>
    </v-row>
  </div>

  <!-- 經營理念------------------- -->
  <indexSection02 />
  <!-- Slogan -->
  <SloganText />
  <!-- 組圖 -->
  <indexSection03 ></indexSection03>
  <div class="watercolour-Circle"></div>
  <!-- Slogan-鼠兔永恆居所的使命 -->
  <SloganText2 />
  <!-- 服務項目 -->
  <indexPrice />

</template>

<script setup>
import indexSection02 from '@/components/indexSection02.vue'
import indexSection03 from '@/components/indexSection03.vue'
import SloganText from '@/components/SloganText.vue'
import SloganText2 from '@/components/SloganText2.vue'
import indexPrice from '@/components/indexPrice.vue'

// 當你有一個名為 XXX.vue 的頁面組件時，你可以使用 definePage 來自動生成對應的 /about 路由。  下面用definePage
import { definePage } from 'vue-router/auto'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// import required modules
import { Autoplay } from 'swiper/modules'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// 解構
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

// 在組件掛載後執行 GSAP 動畫
onMounted(() => {
  gsap.to('.img1-4', {
    // scale: 1.2,
    y: 30, // 向下移動100px
    duration: 3, // 動畫時間1.5秒
    repeat: -1, // 重複播放
    yoyo: true // 反向播放
  })
  gsap.to('.img1-3', {
    scale: 1.7,
    x: 2,
    y: 0,
    duration: 2, // 動畫時間1.5秒
    transformOrigin: '0% 0%' // 設置變換原點為左上角
  })
  gsap.to('.img1-2', {
    scale: 1.7,
    x: 0, // 向左移動100px
    y: 0, // 向下移動100px
    duration: 2, // 動畫時間1.5秒
    transformOrigin: '100% 0%' // 設置變換原點為右上角
  })
  gsap.from('.image-container', {
    scrollTrigger: {
      trigger: '.image-container', // 觸發動畫的元素
      start: '40% 30%', // 當元素的頂部到達視口頂部時開始動畫
      end: '0 60%', // 當元素的底部到達視口底部時結束動畫
      scrub: 10, // 平滑滾動，值越大動畫越慢
      markers: true
    },
    // yPercent: -50, // 元素沿著 y 軸向上移動 50%
    // xPercent: -20, // 元素沿著 x 軸向左移動 40%
    scale: 1.2, // 將元素縮放至 2 倍大小
    // rotation: 50
    duration: 2
  })
})

// Define the modules to be used
const modules = [Autoplay]

definePage({
  meta: {
    title: '鼠兔永恆居所',
    login: false,
    admin: false
  }
})
</script>

<style>

.text-English-position{
  z-index: 99;
  padding-top: 70px; /* 根據需要調整 */
  font-size: 7vw;
  font-weight:400;
  text-shadow: 3px 3px 3px #afaeae;
}
/* 鼠兔永恆居所-標題-------------------------- */
.title-Chinese-position{
  z-index: 99;
  padding-top: 8%; /* 根據需要調整 */
  font-size: 3vw;
  position: relative;
}
/* 副標題------------------------------------- */
.text-position{
position: absolute;
top:75%;
}
.text-Chinese-position-p{
  position: absolute;
  top: 260px;
  z-index: 99;
  font-size: 1.5vw;

}

.floating-content {
  position: absolute;
  top: 0px; /* 根據需要調整 */
  left: 0;
  width: 100%;
  z-index: 99;
  /* background: rgba(255, 255, 255, 0.8); 可選，增加背景色和透明度 */
  padding: 5%; /* 根據需要調整 */
  height:840px
}
/* swiper 第一張組圖----------------------------------- */
.image-container {
    /* position: relative; */
    width: 100%;
    height: 102vh;
    overflow: hidden;
}
/* swiper 第一張組圖-背景------------------------------- */
.img1-1{
  width: 100%;  /* 設置容器寬度為100% */
    height: 100vh;
    background-image: url('../assets/banner-1/banner-1.png') ;  /* 設置圖片的路徑 */
    background-position: center;  /* 使圖片始終居中 */
    background-size: cover;  /* 保持圖片比例且裁切外部多餘部分 */
    background-repeat: no-repeat;  /* 避免圖片重複 */
}

/*  swiper 第一張組圖-中間小島------------------------------ */
.img1-4{
  position: absolute;    /* 使圖片相對於容器進行絕對定位 */
    top: 10%;              /* 定位到容,使圖片在容器的垂直中間 */
    left: 2%;             /* 定位到容器的水平中間 */
    width: 95%;           /* 設置圖片寬度為100% */
    min-width: 90%;       /* 確保圖片不會小於容器寬度 */
    min-height: 90%;      /* 確保圖片不會小於容器高度 */
    object-fit: cover;     /* 保持圖片比例並裁切多餘部分 */
}

/*  swiper 第一張組圖-左邊樹------------------------------ */
.img1-3{
  position: absolute;
  top: 0%;
  left: -5%;
  width: 60%;
  z-index: 97;
}
/*  swiper 第一張組圖-右邊樹------------------------------ */
.img1-2{
  position: absolute;
  top: 0%;
 right: 0%;
  width: 60%;
  /* height: 100%; */
  z-index: 97;
}

.watercolour-Circle{
  width: 500px;
  height: 100px;
  position: relative;
  top: -600px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}

.watercolour-Circle::before {
  content: "";
  position: absolute;
  top: 530%; /* 图片垂直居中 */
  left: -60%; /* 图片水平居中 */
  width: 700px; /* 图片实际展示的宽度，可超出容器宽度 */
  height: 700px; /* 图片实际展示的高度，可超出容器高度 */
  background: url(../assets/index-img/watercolour-Circle.png) no-repeat center;
  background-size: contain;
  transform: translate(-50%, -50%) rotate(100deg);
  z-index: -1; /* 将伪元素置于容器下方 */
}
</style>
