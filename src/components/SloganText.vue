<template>
  <div class="container">
   <h1>鼠兔的永恆居所，讓幸福常駐心間</h1>
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
// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'
// 初始化
AOS.init()
</script>

<style scoped lang="scss">
@import '@/styles/settings'; // 導入變數文件

.container{
  color: $ehp-brown;
  margin-bottom: 2rem;
  padding-top: 10vw;
  padding-bottom: 10vw;
  text-align: center;
  h1{
    font-size: 2.5rem;
    font-weight: 700;
    padding-bottom: 5vw;
  }
}
</style>
