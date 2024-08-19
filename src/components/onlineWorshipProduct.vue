<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="product-position"></div>
      </v-col>
    </v-row>
    <v-row class="product-div">
      <v-col >
        <swiper :watchSlidesProgress="true" :slidesPerView="3" class="mySwiper">
    <swiper-slide class="img"><v-img src="../assets/onlineWorships/onlineWorshipProduct-1.png"></v-img></swiper-slide>
    <swiper-slide class="img"><v-img src="../assets/onlineWorships/onlineWorshipProduct-2.png"></v-img></swiper-slide>
    <swiper-slide class="img"><v-img src="../assets/onlineWorships/onlineWorshipProduct-3.png"></v-img></swiper-slide>
    <swiper-slide class="img"><v-img src="../assets/onlineWorships/onlineWorshipProduct-4.png"></v-img></swiper-slide>
    <swiper-slide class="img"><v-img src="../assets/onlineWorships/onlineWorshipProduct-5.png"></v-img></swiper-slide>
    <swiper-slide class="img"><v-img src="../assets/onlineWorships/onlineWorshipProduct-6.png"></v-img></swiper-slide>
  </swiper>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import '../styles/settings.scss'
</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件
.product-position{
  width: 100%;
  height: 300px;
  border: 2px solid $ehp-yellow;
  position: relative;

}
.product-div{
  position: absolute;
  top: 45%;
  width: 100%;
  // height: 100%;
  border: 2px solid $ehp-yellow;
}
.mySwiper{
  width: 500px;
  height: 100px;
}
.img{
  width: 100px !important;
  // height: 80px;
  // position: relative;
  margin: auto;
}
</style>
