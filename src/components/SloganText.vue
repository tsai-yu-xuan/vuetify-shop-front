<template>
  <div class="container">
   <h1>鼠兔的永恆居所，讓幸福常駐心間</h1>
   <v-row class="img-two">
    <v-col>
      <div>
        <img class="flower" src="../assets/flower-img.png" alt="">
      </div>
    </v-col>
    <v-col>
      <div>
        <img class="grass" src="../assets/grass.png" alt="">
      </div>
    </v-col>
   </v-row>

  </div>
</template>

<script setup>
// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// 解構
import { onMounted } from 'vue'
// 初始化
AOS.init()

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // 第一區塊
  gsap.to('.flower', {
    scrollTrigger: {
      trigger: '.flower', // 觸發動畫的元素
      start: 'top -40%', // 當元素的頂部到達視口頂部時開始動畫
      end: 'bottom 60%', // 當元素的底部到達視口底部時結束動畫
      scrub: 5 // 平滑滾動，值越大動畫越慢
    },
    yPercent: -50, // 元素沿著 y 軸向上移動 50%
    xPercent: -40, // 元素沿著 x 軸向左移動 40%
    scale: 1, // 將元素縮放至 2 倍大小
    rotation: 50
  })
  gsap.to('.grass', {
    scrollTrigger: {
      trigger: '.grass', // 觸發動畫的元素
      start: 'top -45%x', // 當元素的頂部到達視口頂部時開始動畫
      end: 'bottom 60%', // 當元素的底部到達視口底部時結束動畫
      scrub: 5 // 平滑滾動，值越大動畫越慢
    },
    yPercent: -100, // 元素沿著 y 軸向上移動 50%
    xPercent: 10, // 元素沿著 x 軸向左移動 40%
    scale: 1, // 將元素縮放至 2 倍大小
    rotation: -50, // 將元素旋轉 50 度
    duration: 1.5 // 動畫持續 1.5 秒
  })
}
)

</script>

<style scoped lang="scss">
@import '@/styles/settings'; // 導入變數文件
.container{
  color: $ehp-brown;
  margin-bottom: 2rem;
  padding-top: 10vw;
  padding-bottom: 10vw;
  text-align: center;
}
@media (max-width: 768px) {
  .container{
  h1{
    font-size: 4vw;
    font-weight: 700;
    padding-bottom: 5vw;
  }
  .img-two{
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    img{
      position: relative;
      top: -60px;
      width: 50%;
    }
  }
}
}
@media (min-width: 768px) {
  .container{
  h1{
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 2vw;
  }
  .img-two{
    width:60vw;
    display: flex;
    margin: auto;
    justify-content: space-between;
    img{
      position: relative;
      top: -120px;
      width: 50%;
    }
  }
}
}

</style>
