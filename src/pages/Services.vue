<template>
  <div id="navbar" :class="{ 'hidden-navbar': isHidden }"></div>

  <v-container class="container text-center pt-5">
    <div class="title1 text-Chinese">鼠兔永恆居所</div>
    <div class="title2 text-English">Eternal Haven of Pikas</div>
    <!-- <p>鼠兔永恆居所是一個專為鼠兔而設的長眠居所，我們提供最舒適的環境，讓您的鼠兔能夠享受這美好世界。</p> -->
  </v-container>

<!-- 3個 優惠專案 -->
<indexPrice :pageName />

<!-- 服務流程------------------------------------ -->
  <v-container class="text-center">
    <v-row class="text-brown card-title">
      <v-col>服務流程</v-col>
    </v-row>
    <v-row class="text-brown process-img ">
      <v-img src="../assets/flowChart.png"></v-img>
    </v-row>
  </v-container>
<!-- 個別火化 -->
    <v-container class="text-center">
      <v-row >
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="../assets/rabbit-04.png"
              data-aos="zoom-out-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>

        <v-col id="text2" cols="12" md="6" class="d-flex align-center text-brown">
          <div>
            <h2 class="text-h2 ">個別火化</h2>
            <br>
            <h1>專案價</h1>
            <h3>NT$ 3,000（適用於250g以內）</h3>
            <h4 class="text-grey ">（超過250g後）單價：每增加1g NT$ 1（超過250g後，每增加1g）</h4>
            <br />
            <div class="div-ul">
              <ul>
              <li>附贈環保骨灰罐</li>
              <li>個別火化享有10天免費冰存</li>
            </ul>
            </div>

            <div class="div-p">
              <p>專屬為每隻鼠兔提供尊重且環保的告別方式，並可選擇樹灑葬/花灑葬<br>
                另可加購 居家植栽/生態瓶</p>
            </div>
            <v-row>
        <v-col cols="12">
          <v-btn class="mt-5 btn ">
            <router-link to="/ContactUs" class="btn-text ">聯絡我們</router-link>
          </v-btn>
        </v-col>
      </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>

  <v-container class="text-center">
    <v-row>
    <!-- 在大螢幕上，文本在左，圖片在右 -->
    <!-- 在小螢幕上，調換順序，圖片在上，文本在下 -->
    <v-col id="img2" cols="12" md="6" class="d-flex align-center order-md-2 order-sm-1">
      <div>
        <img
          src="../assets/rabbit-mouse.png"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          data-aos-offset="200"
          data-aos-delay="000"
          height="500px"
        />
      </div>
    </v-col>

    <v-col id="text2" cols="12" md="6" class="d-flex align-center text-brown">
          <div>
            <h2 class="text-h2 ">團體火化</h2>
            <br>
            <h1>專案價</h1>
            <h3>NT$ 2,000（適用於1000g以內）</h3>
            <h4 class="text-grey ">（超過250g後）單價：每增加1g NT$ 1（超過250g後，每增加1g）</h4>
            <br />
            <div class="div-ul">
              <ul>
              <li>可選擇樹灑葬/花灑葬，無法加購 居家植栽/生態瓶</li>
              <li>團體火化為每週五中午14點</li>
            </ul>
            </div>

            <div class="div-p">
              <p>提供經濟實惠且環保的選擇，讓多隻鼠兔一起告別，<br>
                火化後可選擇樹花灑葬，回歸自然。</p>
            </div>
            <v-row>
        <v-col cols="12">
          <v-btn class="mt-5 btn ">
            <router-link to="/ContactUs" class="btn-text ">聯絡我們</router-link>
          </v-btn>
        </v-col>
      </v-row>
          </div>
        </v-col>
  </v-row>

    </v-container>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import indexPrice from '@/components/indexPrice.vue'

// 當你有一個名為 XXX.vue 的頁面組件時，你可以使用 definePage 來自動生成對應的 /about 路由。  下面用definePage
import { definePage } from 'vue-router/auto'

// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'

definePage({
  meta: {
    title: '服務項目 | 鼠兔永恆居所',
    login: false,
    admin: false
  }
})
const pageName = 'services'

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
  // height: 500px !important;
  // background: #ce9a9a;
  img {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
}
.text-h2{
  text-align: start;
  font-weight: 900;
  background: url(../assets/index-img/about-bg-03.png);
  -webkit-background-clip: text;
  color: transparent;
  background-size: 30%;
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
  font-size: 32px;
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.card-box{
  font-size: 40px;
  padding-top: 4vw;
  padding-bottom: 1vw;
  border-radius: 200px 200px 0 0;
  // border: 1px solid $ehp-grey;
  background: $ehp-white !important;
  box-shadow: 0 0 0 0 !important;
}

.btn{
  background-color: $ehp-grey;
  padding: 0px 1vw;
  border-radius: 20px;
  margin: 1vw 0;
}

.btn-text{
  color: $ehp-white;
  text-decoration: none  !important; /* 移除底線 */
  line-height: 16px;
  font-size:15px;
  font-weight: bold;
}

//卡片區做RWD
 @media (min-width: 576px) {
  .card{
  padding-bottom:10vw ;
  width:60%;
  margin: 0 auto;
  }
 }

 @media (min-width: 960px) {
  .card{
  padding-bottom:5vw ;
  width:100%;
  margin: 0 auto;
  }
 }

.padding{
  padding: 0.5vw 0;
}

.process-img{
  width: 100%;
  height: 30vw;
  margin: auto !important;
}
.img{
  padding: 1vw;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}
// 價目表介紹區
.div-ul{
  padding-left: 20px;
}
.div-p{
  background: $ehp-brown !important;
  color: azure;
  margin-top: 16px;
  padding: 10px;
}
// 按鈕
.btn{
  background-color: $ehp-grey;
  padding: 0px 1vw;
  border-radius: 20px;
  // margin-left: 25vw;
}
.btn-text{
  color: $ehp-white;
  text-decoration: none  !important; /* 移除底線 */
  line-height: 16px;
  font-size:15px;
  font-weight: bold;
}
</style>
