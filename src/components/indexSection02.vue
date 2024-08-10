<template>
  <v-container class="container">
    <v-row>
      <v-col id="text2" cols="12" md="5" class="d-flex align-center">
        <div>
        <h1>經營理念標題</h1>
        <br>
        <p>生活型態與觀念轉變「視寵物如子女」相當盛行，<br>
          當心愛的寵物往生，對寵物後事也會慎重處理<br>
          <br>
          寵物生命禮儀大多是所有寵物放一起<br>
          是不是鼠兔跟狗貓放一起牠會害怕?<br>
          如果他們有自己的永恆住所...<br>
          <br>
          於是萌生了想要專門為小動物而服務的永恆住所...<br>
        </p>
      </div>
      </v-col>
      <v-col id="img2" cols="12" md="7">
       <img src="../assets/rabbit02.png" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-offset="200" data-aos-delay="000">
      </v-col>
    </v-row>
  </v-container>

  <!-- <div id="img">
    <img src="https://jo-zu-works.site/img/pc/jozu_philosophy02.jpg" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-offset="200" data-aos-delay="1000">
    <img src="https://jo-zu-works.site/img/pc/jozu_philosophy01.jpg" data-aos="fade-up-left" data-aos-easing="ease-out-quad" data-aos-duration="3000" data-aos-offset="100" data-aos-delay="2000">
  </div> -->
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
  padding: 80px !important;
}

// #text {
//   margin: 20px;
//   color: rgb(66, 66, 66);
//   h1 {
//     font-size: 30px;
//   }
//   p {
//     font-size: 12px;
//     font-weight: bold;
//   }
// }

// #img {
//   display: flex;
//   justify-content: start;
//   img {
//     &:nth-child(1) {
//       width: 240px;
//       height: 320px;
//       margin-top: 0px;
//       left: 10px;
//     }
//     &:nth-child(2) {
//       width: 590px;
//       height: 400px;
//       margin-top: -130px;
//       margin-left: 50px;
//     }
//   }
// }

#img2 {
  // width: 600px !important;
  height: 600px !important;
  // background: #828080;
  img {
    width: 90%;
    position: relative;
    overflow: hidden;
    top: 20%;
    left: 20%;
  }
}

#text2 {
  color: $ehp-black;
  filter: saturate(0.1); // 設定文字飽和度為
  opacity: 0.5; // 設定文字透明度為
}
</style>
