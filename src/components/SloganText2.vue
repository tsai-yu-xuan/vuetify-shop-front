<template>

  <v-container class="container">
    <v-row>
      <v-col cols="12" class="h2-div">

        <h2 class="text-English-Roboto mission">MISSION</h2>

      </v-col>
    </v-row>
    <v-row>
      <v-col id="img2" cols="12" md="6"
      data-aos="fade-right"
       data-aos-easing="ease-out-cubic"
       data-aos-duration="3000"
       data-aos-offset="200"
       data-aos-delay="000">
       <img src="../assets/index-rabbit-2.png" class="left-bottom-img">
      </v-col>
      <v-col  cols="12" md="6" class="d-flex ">
        <div id="text2">
        <h1>鼠兔永恆居所的使命</h1>
        <br>
        <!-- <h2>打造理想的永恆居所</h2> -->
        <p>我們的使命是推動環保的生命禮儀理念，<br>
          尊重每一個生命的價值，<br>
          並幫助家屬在悲傷中找到心靈的平靜。<br>
          <br>
          我們希望通過我們的服務，<br>
          讓更多人了解並接受自然葬禮的美好，<br>
          並以此尊重和愛護我們的環境。<br>
        </p>
      </div>
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
  // top: -50%;
  left:0%;
  // background: #828080;
  img {
    width: 100%;
    overflow: hidden;
    // left: 20%;
    position: absolute;
    bottom: 7%;
    left: 5px;
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
    padding-left:50px;
    top: 0px;
    // opacity: 0.2;
    z-index: 99;
  }
  p{
    font-size: 16px;
    padding-left:50px;
  }
}

// about 標題做照片背景
.mission{
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
.h2-div{
  display: flex;
  justify-content: end;
  position: relative;
  top:5px;
  left: 70px
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
