<template>

<v-container>
    <div class="flower"><img class="flower-yellow" src="../assets/flower-yellow.png" alt=""></div>
  </v-container>

  <div id="section01-btns" class="container">
   <h1>鼠兔永恆居所的使命</h1>
   <p>我們的使命是推動環保的生命禮儀理念，尊重每一個生命的價值，並幫助家屬在悲傷中找到心靈的平靜。<br>
    我們希望通過我們的服務，讓更多人了解並接受自然葬禮的美好，並以此尊重和愛護我們的環境。</p>
    <!--
    「鼠兔永恆居所，舒適生活的理想選擇」
    「與鼠兔共享每一刻，居住永恆幸福」
    「鼠兔永恆居所，溫暖舒適每一天」
    「鼠兔的永恆居所，讓幸福常駐心間」
    「選擇鼠兔永恆居所，擁抱溫馨生活」
    -->
  </div>
</template>

<script setup>
// 解構
import { onMounted } from 'vue'
// 引入gsap
import { gsap } from 'gsap'
// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'

onMounted(() => {
  gsap.from('#section01-btns', {
    opacity: 0,
    x: -1000,
    duration: 6
  })
})
// 初始化
AOS.init()
</script>

<style scoped lang="scss">
@import '@/styles/settings'; // 導入變數文件
.container{
padding: 30px;
 color: $ehp-brown;
 text-align: center;
}

.container{
  color: $ehp-brown;
  margin-bottom: 2rem;
  padding-top: 10vw;
  padding-bottom: 8vw;
  h1{
    font-size: 2.5rem;
    font-weight: 700;
    padding-bottom: 5vw;
  }
}

.flower-yellow {
  width: 10%;
  animation: moveAndRotate 4s infinite alternate; /* 應用動畫 */
}

@keyframes moveAndRotate {
  0% {
    transform: translateX(0) rotate(0deg); /* 初始位置和旋轉角度 */
  }
  100% {
    transform: translateX(1000px) rotate(-40deg); /* 向右移動600px並向下移動500px並旋轉-270度 */
  }
}

</style>
