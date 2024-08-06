<template>
  <swiper
    class="mySwiper"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
  >
    <swiper-slide><v-img src="../assets/banner-01.png"></v-img></swiper-slide>
    <swiper-slide><v-img src="../assets/banner-02.png"></v-img></swiper-slide>
    <swiper-slide><v-img src="../assets/banner-03.png"></v-img></swiper-slide>
  </swiper>

  <div class="floating-content">
    <v-row>
      <v-col cols="12"  class="text-English-position text-center" >
        <div class="text-English ">Eternal Haven of Pikas</div>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"  class="text-Chinese-position text-left" >
        <div class="text-Chinese text-white">鼠兔永恆居所</div>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"  class="text-p text-Chinese-position-p text-left" >
        <div class="text-Chinese text-white"><p>鼠兔永恆居所是一個專為鼠兔而設的長眠居所，我們提供最舒適的環境，讓您的鼠兔能夠享受這美好世界。</p></div>
        </v-col>
    </v-row>
  </div>

  <!-- <h2 class="text-English text-English-position">Eternal Haven of Pikas</h2>
        <h1 class="text text-Chinese text-black">鼠兔永恆居所</h1>
        <p>鼠兔永恆居所是一個專為鼠兔而設的長眠居所，我們提供最舒適的環境，讓您的鼠兔能夠享受這美好世界。</p>
       -->
  <!-- 經營理念------------------- -->
  <indexSection02 />
  <!-- Slogan -->
  <SloganText />
  <!-- 組圖 -->
  <indexSection03 />
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
  padding-top: 90px; /* 根據需要調整 */
  font-size: 3vw;
  font-weight: bold;
}

.text-Chinese-position{
  z-index: 99;
  padding-top: 28%; /* 根據需要調整 */
  font-size: 5vw;
}
.text-Chinese-position-p{
  z-index: 99;
  font-size: 1.5vw;
}

.text-p>.text-black{
  opacity: 0.5; /* 設置透明度 */

}
/* .text{
  font-size: xx-large;
  color: black;
} */
.floating-content {
  position: absolute;
  top: 0px; /* 根據需要調整 */
  left: 0;
  width: 100%;
  z-index: 99;
  /* background: rgba(255, 255, 255, 0.8); 可選，增加背景色和透明度 */
  padding: 75px; /* 根據需要調整 */
  height:840px
}
</style>
