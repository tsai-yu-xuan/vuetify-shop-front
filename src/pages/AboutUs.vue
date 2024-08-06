<template>
  <div id="navbar" :class="{ 'hidden-navbar': isHidden }"></div>
  <v-container class="container text-center pt-5">
    <div class="title1 text-Chinese">鼠兔永恆居所</div>
    <div class="title2 text-English">Eternal Haven of Pikas</div>
    <!-- <p>鼠兔永恆居所是一個專為鼠兔而設的長眠居所，我們提供最舒適的環境，讓您的鼠兔能夠享受這美好世界。</p> -->
  </v-container>
  <div class="bg-grey">
    <v-container class="text-center">
      <v-row class="bg-grey">
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="https://picsum.photos/800/500/?random=10"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>

        <v-col id="text2" cols="12" md="6" class="d-flex align-center">
          <div>
            <h1>為什麽想成立<br />鼠兔永恆居所？</h1>
            <br />
            <p>
              生活型態與觀念轉變「視寵物如子女」相當盛行，<br />
              當心愛的寵物往生，對寵物後事也會慎重處理<br />
              <br />
              寵物生命禮儀大多是所有寵物放一起<br />
              是不是鼠兔跟狗貓放一起牠會害怕?<br />
              如果他們有自己的永恆住所...<br />
              <br />
              於是萌生了想要專門為小動物而服務的永恆住所...<br />
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-container>
    <v-row>
      <v-col id="text3" cols="12" md="7" class="d-flex align-center">
        <div class="pl-5 ">
          <h1>台灣唯一鼠兔服務的生命禮儀</h1>
          <br />
          <p class="text-grey">
            鼠兔永恆居所是台灣唯一專注於提供鼠兔生命禮儀服務的品牌。<br />
            我們了解鼠兔在家庭中的重要性，並致力於為鼠兔提供尊重且環保的告別儀式。<br />
            透過我們的專業服務，<br />
            讓每一隻鼠兔都能以最自然和尊嚴的方式離開，回歸大自然的懷抱。<br />
          </p>
        </div>
      </v-col>
      <v-col id="img2" cols="12" md="5" class="d-flex align-center">
        <div>
          <img
            src="https://picsum.photos/496/600/?random=10"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-delay="000"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
<!-- 3個 服務理念 -->
  <v-container class="text-center">
    <v-row class="text-brown card-title">
      <v-col>服務理念</v-col>
    </v-row>
    <v-row  class="card">
      <v-col cols="12" md="4">
      <v-card class="no-background text-brown">
        <v-card-item>
          <v-card-title class="padding">專業用心</v-card-title>

          <v-card-subtitle class="padding">This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          我們的團隊擁有豐富的經驗，專門處理鼠兔的生命禮儀，確保每一個環節都莊重且尊重，讓每一隻鼠兔都能得到最貼心和專業的照顧。
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="no-background text-brown">
        <v-card-item>
          <v-card-title class="padding">環保永續</v-card-title>

          <v-card-subtitle class="padding">This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          我們提倡自然葬禮，減少對環境的負擔，讓鼠兔的生命能夠以另一種形式延續在自然中，促進生態平衡，保護我們共同的家園。
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="no-background text-brown">
        <v-card-item>
          <v-card-title class="padding">簡約慎重</v-card-title>

          <v-card-subtitle class="padding">This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          我們摒棄繁複的儀式和大量金紙的燃燒，追求簡單而莊重的告別儀式，讓逝者和家屬都能感受到心靈的安寧和溫暖。
        </v-card-text>
      </v-card>

      <div class="text-center text-caption">Using Markup Only</div>
    </v-col>
  </v-row>
  </v-container>

  <v-container class="text-center">
      <v-row>
        <v-col id="img2" cols="12" class="d-flex align-center">
          <div>
            <img
              src="https://picsum.photos/1200/500/?random=10"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 當你有一個名為 XXX.vue 的頁面組件時，你可以使用 definePage 來自動生成對應的 /about 路由。  下面用definePage
import { definePage } from 'vue-router/auto'

// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'

definePage({
  meta: {
    title: '關於我們 | 鼠兔永恆居所',
    login: false,
    admin: false
  }
})

// 引入 ref 來定義響應式變量
const isHidden = ref(false)

// 定義處理滾動事件的函數
const handleScroll = () => {
  // 獲取當前滾動位置
  const scrollPosition = window.scrollY
  // 設置隱藏位置（根據實際情況調整）
  const hidePosition = 80
  // 如果滾動位置大於隱藏位置，設置 isHidden 為 true，否則設置為 false
  isHidden.value = scrollPosition > hidePosition
}

// 當組件掛載時，添加滾動事件監聽器
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 當組件卸載時，移除滾動事件監聽器
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 初始化
AOS.init()
</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件

// 定義隱藏導航欄的樣式 這裡是隱藏
// 首頁因為被設定透明背景 所以其他頁面都要設定這個
#navbar {
  height: 64px;
  background: $ehp-grey;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: opacity 0.5s ease;
  filter: saturate(0.1); // 設定文字飽和度為
  // opacity: 0.7; // 設定文字透明度為
}

.container {
  padding-top: 140px !important;
  padding-bottom: 50px;
}

// 第一行的
.title1 {
  font-size: 30px;
  color: $ehp-black;
  margin-bottom: 1.5vw;
}
.title2 {
  font-size: 18px;
  color: $ehp-grey;
  margin-bottom: 3vw;
}

#img2 {
  height: 600px !important;
  // background: #ce9a9a;
  img {
    width: 90%;
    position: relative;
    overflow: hidden;
  }
}

#text2 {
  text-align: left;
  // color: $ehp-black;
  // filter: saturate(0.2); // 設定文字飽和度為
  // opacity: 0.5; // 設定文字透明度為
}
#text3 {
  // text-align: left;
  color: $ehp-black;
  p {
    color: $ehp-brown;
  }
  // filter: saturate(0.2); // 設定文字飽和度為
  // opacity: 0.5; // 設定文字透明度為
}

.card-title{
  font-size: 40px;
  padding-top: 5vw;
  padding-bottom: 1vw;

}

.card{
  padding-bottom:10vw ;
}
.padding{
  padding: 1vw 0;
}

.line {
  border-top: 1px solid $ehp-grey;
  margin: 20px 0;

}
</style>
