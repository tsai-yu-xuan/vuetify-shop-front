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
      <v-col cols="12">
        <h2>Eternal Haven of Pikas</h2>
        <h1 class="text">鼠兔永恆居所</h1>
        <p>鼠兔永恆居所是一個專為鼠兔而設的長眠居所，我們提供最舒適的環境，讓您的鼠兔能夠享受這美好世界。</p>
      </v-col>
    </v-row>
  </div>
  <!-- 經營理念------------------- -->
  <indexSection02/>
  <!-- Slogan -->
  <SloganText />
  <!--  -->
  <indexSection03 />

</template>

<script setup>
import indexSection02 from '@/components/indexSection02.vue'
import indexSection03 from '@/components/indexSection03.vue'
// import SloganText from '@/components/SloganText.vue'

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

.text{
  font-size: xx-large;
  color: black;
}
.floating-content {
  position: absolute;
  top: 300px; /* 根據需要調整 */
  left: 0;
  width: 100%;
  z-index: 99;
  /* background: rgba(255, 255, 255, 0.8); 可選，增加背景色和透明度 */
  padding: 20px; /* 根據需要調整 */
}
</style>
