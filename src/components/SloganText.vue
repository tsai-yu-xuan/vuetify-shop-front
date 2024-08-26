<template>
  <div class="container">
    <h2>鼠兔的永恆居所，讓幸福常駐心間</h2>
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
   <Marquee class="text-English-small" loop="-1"> Eternal Haven of Pikas</Marquee>

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
  gsap.to('.flower', {
    scrollTrigger: {
      trigger: '.flower', // 觸發動畫的元素
      start: '-80% 40%', // 當元素的頂部到達視口頂部時開始動畫
      end: '0 60%', // 當元素的底部到達視口底部時結束動畫
      scrub: 5 // 平滑滾動，值越大動畫越慢
      // markers: true
    },
    yPercent: -50, // 元素沿著 y 軸向上移動 50%
    xPercent: -20, // 元素沿著 x 軸向左移動 40%
    scale: 1, // 將元素縮放至 2 倍大小
    rotation: 50
  })
  gsap.to('.grass', {
    scrollTrigger: {
      trigger: '.grass', // 觸發動畫的元素
      start: '-80% 40%x', // 當元素的頂部到達視口頂部時開始動畫
      end: '0 60%', // 當元素的底部到達視口底部時結束動畫
      scrub: 5 // 平滑滾動，值越大動畫越慢
    },
    yPercent: -50, // 元素沿著 y 軸向上移動 50%
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

.container {
  width: 100%;
  margin: auto;
  color: $ehp-brown;
  margin-top: 15vh;
  margin-bottom: 1rem;
  padding-top: 1vw;
  // padding-bottom: vw;
  text-align: center;
  h2{
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 2vw;
    color: $ehp-black;
    opacity: 0.5;
    position: relative;
    top: 80px; /* 調整為正值，使文字在 h2 標題下面 */
    z-index: 1;
  }

  Marquee {
    font-size: 15rem;
    font-weight: 700;
    padding-bottom: 2vw;
    color: $ehp-yellow;
    opacity: 0.5;
    position: relative;
    top: -160px; /* 调整为正值，使文字在 h2 标题下面 */
    z-index: 1;
  }
}

@media (max-width: 992px){
  .container>h2{
    font-size: 1.5rem;
}
.flower,
.grass {
      width: 30%;
      padding-bottom: 3rem;
    }
}
@media (max-width: 640px) {
  .container {
    margin-top: 5%;
  }
}

</style>
