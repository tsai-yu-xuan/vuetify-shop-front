<template>
  <v-container class="text-left text-padding "
  data-aos="fade-right"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="3000"
  data-aos-offset="150"
  data-aos-once="true"
  data-aos-delay="0500">
    <h1>環保改念園區</h1>

  </v-container>
<v-container class="bg-img">
</v-container>
<!--
data-aos="fade-right"               使用 AOS 庫為元素添加從右側滑入的動畫效果
data-aos-easing="ease-out-cubic"    動畫緩動效果設置為 'ease-out-cubic'
  data-aos-duration="3000"          動畫持續時間設置為 3000 毫秒（3 秒）
  data-aos-offset="200"             當元素距離視口頂部 200 像素時觸發動畫
  data-aos-delay="000">             動畫延遲時間設置為 0 毫秒
-->
<v-container class=" text-center">
  <div>
    <v-row class="GroupImghight d-lg-flex">
      <v-col cols="12" md="4" class="p-img"><v-img :src="images[0]"></v-img></v-col>
      <v-col cols="12" md="4" class="flex-column">
        <v-row cols="12" xl="6">
          <v-col class="p-img-2"><v-img :src="images[1]"></v-img></v-col>
        </v-row>
        <v-row cols="12" xl="6">
          <v-col cols="12" xl="4">
            <v-row>
              <v-col xl="6" class="s-img p-img"><v-img :src="images[2]"></v-img></v-col>
              <v-col xl="6" class="s-img p-img"><v-img :src="images[3]"></v-img></v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" class="p-img"><v-img :src="images[4]"></v-img></v-col>
    </v-row>
  </div>
    <v-row class="d-lg-none">
      <v-col class="d-flex justify-content-center" style="margin: auto; ">
        <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide v-for="(image, index) in images" :key="index">
            <v-img :src="image"></v-img>
          </swiper-slide>
  </swiper>
      </v-col>
    </v-row>

    <v-btn class="mt-5 btn">
      <router-link to="/ParkInfo" class="btn-text">更多園區介紹</router-link>
    </v-btn>
  </v-container>
</template>

<script setup>
// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'

import { ref, onMounted } from 'vue'
import img01 from '../assets/indexSection03-7.jpg'
import img02 from '../assets/indexSection03-1.jpeg'
import img03 from '../assets/indexSection03-2.jpg'
import img04 from '../assets/indexSection03-3.jpg'
import img05 from '../assets/indexSection03-5.jpg'
import img06 from '../assets/indexSection03-6.jpg'

import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import './style.css'

// import required modules
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules'

// Define the modules to be used
// const modules = [Autoplay]

// 定義響應式的 modules
const modules = ref([Mousewheel, Pagination, Autoplay])

// 定義圖片來源
const images = ref([
  img01,
  img02,
  img03,
  img04,
  img05,
  img06
])

// 初始化 AOS
onMounted(() => {
  AOS.init()
})
</script>

<style scoped lang="scss">
@import '@/styles/settings'; // 導入變數文件

/* 針對1280px以下的螢幕尺寸隱藏原有的圖片佈局 */
@media (max-width: 1280px) {
  .GroupImghight {
    display: none;
  }
}

.GroupImghight{
  height: 34vw;
  margin: 5px;
  padding: 2px;
}

.text-padding {
  color: $ehp-grey;
  font-size:2.3rem;
  padding: 5px;
  padding-left: 20px;
}
h1{
  position: relative;
}
h1::before{
  content: "ParkInfo";
  font-size: 10rem;
  background: url(../assets/index-img/about-bg-03.png);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 30%;
  opacity: 0.7;
  filter: drop-shadow(8px 8px #4e4e4e);
  font-style: italic;
  position: absolute;
  left: 45%;
  top: -50px;
  z-index: -1;
}

.img{
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.p-img{
  padding: 5px !important;
  width: 100%;
  height: 545px;
}
.p-img-2{
  padding: 5px !important;
  width: 100%;
  // height: 540px;
}

.btn{
  background-color: $ehp-grey;
  padding: 0px 1vw;
  border-radius: 20px;
  margin-top: 20 !important;
  // margin: 4vw 0;
}
.btn-text{
  color: $ehp-white;
  text-decoration: none  !important; /* 移除底線 */
  line-height: 16px;
  font-size:15px;
  font-weight: bold;
}
//swiper 內的樣式----------------------
.swiper {
  width: 100%;
  // padding-top: 50px;
  // padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 500px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>
