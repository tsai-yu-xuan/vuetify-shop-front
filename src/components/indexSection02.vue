<template>
  <v-container class="container">
    <v-row>
      <v-col cols="12" class="h2-bg">
        <h2 class="text-English-Roboto about">ABOUT</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col  cols="12" md="6" class="d-flex ">
        <div id="text2">
        <h1>打造理想的永恆居所</h1>
        <br>
        <!-- <h2>打造理想的永恆居所</h2> -->
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
      <v-col id="img2" cols="12" md="6"
      data-aos="fade-left"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="3000"
       data-aos-offset="200"
       data-aos-delay="000">
       <img src="../assets/index-img/index-img.png" class="left-bottom-img">
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

#img2 {
  position: relative; /* 設置容器為相對定位 */
  height: 500px !important;
  left: 11%;
  // background: #828080;
  img {
    width: 100%;
    overflow: hidden;
    // left: 20%;
    position: absolute;
    bottom: -10%;
    left: 0;
  }
}

#text2 {
  width: 92%;
  // border: 2px solid #000;
  color: $ehp-black;
  filter: saturate(0.1); // 設定文字飽和度為
  opacity: 0.8; // 設定文字透明度為
  h1{
    font-size: 3.7rem;
    position: relative;
    top: 0px;
    // opacity: 0.2;
    z-index: 99;
  }
  p{
    font-size: 16px;
  }
}
#text2::before {
  content: "2024";
  letter-spacing: 5px; /* 設置字間距，例如 2px */
  display: block; /* 顯示為區塊，使其在數字上方 */
  font-size:15rem; /* 設置文字大小 */
  font-family:'Times New Roman', Times, serif;
  font-style: italic;
  color: $ehp-grey; /* 設置文字顏色 */
  margin-bottom: 50px; /* 調整與後面內容的距離 */
  z-index: -1;
  position: absolute;
  top: 230px;
  left: 210px;
  opacity: 0.5;
}

// about 標題做照片背景
.about{
  font-size: 7rem;
  color: $ehp-black;
  letter-spacing: 30px; /* 設置字間距，例如 2px */
  // text-align: center;
  padding-top: 150px;
  position: relative;
  z-index: 99;
  background: url(../assets/index-img/about-bg-03.png);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 30%;
}

// .about::before{
//   content: "";
//   position: absolute;
//   top: 0%;
//   left: 0%;
//   width: 50rem;
//   height: 30%;
//   transform: translate(-60%,200%);
//   background: #fff;
//   // opacity: 0.5;
//   z-index: -1;
// }

</style>
