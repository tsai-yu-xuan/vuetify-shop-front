<template>
  <div id="navbar" :class="{ 'hidden-navbar': isHidden }"></div>
  <v-row>
    <v-col class="allImg"><img src="../assets/ParkInfo-img.png"></v-col>
  </v-row>
  <v-container class=""
  data-aos="fade-up"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="3000"
  data-aos-offset="150"
  data-aos-once="true"
  data-aos-delay="0500">
    <div class="text-white text-Chinese parkInfo">園區介紹</div>
    <div class="parkInfo-p text-center" >
      <p class="text-black text-Chinese padding">鼠兔永恆居所園區位於新北市泰山區，佔地約1000坪，環境清幽，空氣清新，是一個專為鼠兔設計的永恆居所。</p>
        <p class="text-black
          text-Chinese padding">園區內設有樹灑葬區、花灑葬區、寵物植栽區和文青追思牆，提供多樣化的葬禮服務，讓每一隻鼠兔都能在這裡找到最適合的安息之所。</p>
        <p class="text-black text-Chinese padding">園區環境寧靜而莊重，為家屬提供一個安靜的告別場所，讓他們能在自然之中與鼠兔作最後的告別。</p>
        <p class="text-black text-Chinese padding">鼠兔永恆居所園區，讓愛與自然共存，讓每一隻鼠兔都能在這裡找到永恆的安息之所。</p>

    </div>
  </v-container>

  <v-container class="slogan-container text-center pt-5">
    <div class="title1 text-grey  text-Chinese">鼠兔永恆居所園區專為鼠兔設計，綠意盎然，提供樹葬、花葬等自然葬禮服務。<br/>
      <br />
      園區內環境莊重簡約，讓鼠兔回歸自然，愛與自然永恆共存。<br /></div>

      <div class="img-two">

      <div>
        <img class="flower" src="../assets/garden-10.png" alt="">
      </div>

      <div>
        <img class="grass" src="../assets/garden-09.png" alt="">
      </div>
    </div>

  </v-container>

<!-- 3個 服務理念 -->
<v-container fluid class="text-center service-philosophy container100">
  <v-container>
    <v-row class="text-yellow card-title">
      <v-col>服務理念</v-col>
    </v-row>
    <v-row  >
      <v-col cols="12" md="4" class="card">
      <v-card class="no-background text-yellow">
        <v-card-item style="display: flex; justify-content: center;">
          <v-img  class="card-img" src="../assets/natural-return.png"></v-img>
        </v-card-item>
        <v-card-item>
          <v-card-title class="padding">自然回饋</v-card-title>

          <v-card-subtitle class="padding">natural return</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          我們秉持尊重生命的理念，提供樹灑葬區與花灑葬區，讓每個小生命得以在自然中延續，並以植栽和綠意回饋大地。
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="no-background">
        <v-card-item style="display: flex; justify-content: center;">
          <v-img  class="card-img" src="../assets/simplicit-and-respect.png"></v-img>
        </v-card-item>
        <v-card-item>
          <v-card-title class="padding">簡約尊重</v-card-title>

          <v-card-subtitle class="padding">simplicity and respect</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          以簡約而富有藝術感的文青追思牆，取代傳統的塔位，營造出溫馨、雅緻的悼念空間，讓每位生命在此得到真正的尊重與紀念。
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="no-background text-yellow ">
        <v-card-item style="display: flex; justify-content: center;">
          <v-img  class="card-img" src="../assets/environmental-sustainability.png"></v-img>
        </v-card-item>
        <v-card-item>
          <v-card-title class="padding">環保永續</v-card-title>

          <v-card-subtitle class="padding">environmental sustainability</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          我們致力於推動環保，倡導簡樸的儀式與紀念方式，減少對資源的消耗，實現對地球的責任與對生命的敬意。
        </v-card-text>
      </v-card>
     </v-col>
  </v-row>
</v-container>
  </v-container>
    <v-container class="container text-center">
      <v-row >
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="../assets/tree01.png"
              data-aos="zoom-out-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>
        <v-col id="text2" cols="12" md="6" class="d-flex align-center text-grey">
          <div>
            <h1>樹灑葬區</h1>
            <br />
            <p>
              鼠兔樹灑葬區位於綠意盎然的園區內，提供環保的樹葬服務。<br />
              將鼠兔的骨灰灑在樹下，讓生命以自然形式延續。<br />
              這種方式不僅促進樹木生長，象徵生命的循環與延續。<br />
              園區環境安靜莊重，讓家屬在自然中為鼠兔送行，感受寧靜與和諧。<br />
              鼠兔樹灑葬區，讓愛與自然共存，讓每一隻鼠兔都能回歸大自然的懷抱。<br />
              <v-btn class="mt-5 btn ">
               <router-link to="/ContactUs" class="btn-text ">立即預約</router-link>
              </v-btn>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="container text-center">
  <v-row>
    <!-- 在大螢幕上，文本在左，圖片在右 -->
    <!-- 在小螢幕上，調換順序，圖片在上，文本在下 -->
    <v-col id="img2" cols="12" md="6" class="d-flex align-center order-md-2 order-sm-1">
      <div>
        <img
          src="../assets/garden01.png"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          data-aos-offset="200"
          data-aos-delay="000"
          height="500px"
        />
      </div>
    </v-col>

    <v-col id="text2" cols="12" md="6" class="d-flex align-center text-grey order-md-1 order-sm-2">
      <div>
        <h1>花灑葬區</h1>
        <br />
        <p>
          鼠兔花灑葬區是一個專為鼠兔設計的自然葬禮區域。<br />
          這裡提供花葬服務，將鼠兔的骨灰灑在美麗的花卉中，<br />
          讓生命回歸自然，促進花卉生長，象徵生命的延續和循環。<br />
          園區環境寧靜而莊重，為家屬提供一個安靜的告別場所，<br />
          讓他們能在自然之中與鼠兔作最後的告別。<br />
          鼠兔花灑葬區，讓愛與自然相融，讓每一隻鼠兔都能在花卉的懷抱中安息。<br />
          <v-btn class="mt-5 btn">
            <router-link to="/ContactUs" class="btn-text">立即預約</router-link>
          </v-btn>
        </p>
      </div>
    </v-col>
  </v-row>
</v-container>

    <v-container class="container text-center">
      <v-row >
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="../assets/pottedPlant.png"
              data-aos="zoom-out-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>

        <v-col id="text2" cols="12" md="6" class="d-flex align-center text-grey">
          <div>
            <h1>寵物植栽</h1>
            <br />
            <p>
              鼠兔寵物植栽提供一種獨特的方式來紀念您的鼠兔。<br />
              我們將鼠兔的骨灰與植物土壤混合，並栽種在精美的植栽容器中，<br />
              讓生命以綠意延續。<br />
              每一個植栽都是專門設計的，既美觀又富有意義，能夠在您的家庭中成為一個永恆的回憶。<br />
              這種方式不僅環保，還能促進植物的生長，象徵著鼠兔生命的延續和循環。<br />
              鼠兔寵物植栽，讓愛與自然共生，記錄您與鼠兔的珍貴時光。<br />
              <v-btn class="mt-5 btn ">
               <router-link to="/ContactUs" class="btn-text ">立即預約</router-link>
              </v-btn>
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="text-center">
      <v-row>
        <v-col id="photo-wall" cols="12" class="d-flex align-center">
          <div class="img">
            <img
              src="../assets/photo-wall.png"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col id="text2" cols="12"  class="d-flex align-center text-grey text-center w-100">
          <div class=" w-100">
            <h1>追思牆</h1>
            <br />
            <p>
              當我們在追思牆前駐足，每一面牆都是一段生命的畫布。<br />
              這裡沒有冰冷的石碑，只有溫暖的故事與記憶。<br />
              每一個名字，每一段文字，都是對鼠兔永恆居所內每個生命的致敬。<br />
              以簡約而富有藝術感的方式，讓愛與記憶在此延續，<br />
              讓來訪的主人感受到這裡是靈魂的家園，充滿愛與寧靜。<br />
              <br />
              文青追思牆，不只是紀念，更是心靈的慰藉與回憶的綿延。<br />
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn class="mt-5 btn ">
            <router-link to="/ContactUs" class="btn-text ">聯絡我們</router-link>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 當你有一個名為 XXX.vue 的頁面組件時，你可以使用 definePage 來自動生成對應的 /about 路由。  下面用definePage
import { definePage } from 'vue-router/auto'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// 解構
// import { onMounted } from 'vue'

// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'

definePage({
  meta: {
    title: '園區介紹 | 鼠兔永恆居所',
    login: false,
    admin: false
  }
})
// ---navbar-------------------------------
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

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // 第一區塊
  gsap.to('.flower', {
    scrollTrigger: {
      trigger: '.flower', // 觸發動畫的元素
      start: 'top 70%', // 當元素的頂部到達視口頂部時開始動畫
      end: 'bottom 80%', // 當元素的底部到達視口底部時結束動畫
      scrub: 5 // 平滑滾動，值越大動畫越慢
      // markers: 'true'
    },
    yPercent: -50, // 元素沿著 y 軸向上移動 50%
    xPercent: -40, // 元素沿著 x 軸向左移動 40%
    scale: 1, // 將元素縮放至 2 倍大小
    rotation: 50
  })
  gsap.to('.grass', {
    scrollTrigger: {
      trigger: '.grass', // 觸發動畫的元素
      start: 'top 70%', // 當元素的頂部到達視口頂部時開始動畫
      end: 'bottom 80%', // 當元素的底部到達視口底部時結束動畫
      scrub: 5, // 平滑滾動，值越大動畫越慢
      markers: 'true'
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
@import "@/styles/settings"; // 導入變數文件
// ---navbar-------------------------------
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
  padding-top: 12vw !important;
  padding-bottom: 12vw;
}
// 園區介紹文字
.parkInfo{
  font-size: 5rem;
  position: absolute;
  top: -650px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.parkInfo-p{
  width: 75%;
  background: rgba($color: $ehp-grey, $alpha: 0.7);
  padding: 1rem;
  position: absolute;
  top: -1200%;
  left: 50%;
  transform:translate(-50%, -50%);
  // z-index: 99;
}
@media (max-width: 1280px) {
  .parkInfo{
    font-size: 3rem;
    top: -500px;
  }
  .parkInfo-p{
    width: 100%;
    top: -1000%;
  }
}
@media (max-width: 959px) {
  .parkInfo{
position: relative;
    font-size: 2rem;
    top: -300px;
    left: 90%;
  }
  .parkInfo-p{
    position: relative;
    width: 100%;
    top: -200px;
    font-size: 0.6rem;
  }
}
.slogan-container{
  padding-top: 10vw !important;
  padding-bottom: 10vw;
}

@media (max-width: 768px) {
  .img-two{
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    img{
      position: relative;
      // top: 0px;
      // left: 10%;
      width: 100%;
    }
  }
}

@media (min-width: 768px) {
  .img-two{
    width:70vw;
    display: flex;
    margin: auto;
    justify-content: space-between;
    img{
      position: relative;
      top: -100px;
      // left: 40%;
      width: 100%;
    }
  }
}

// 第一行的
.title1 {
  font-size: 20px;
  color: $ehp-black;
  margin-bottom: 1.5vw;
}
@media (max-width: 768px) {
  .title1 {
  font-size: 15px;
  color: $ehp-black;
  margin-bottom: 1.5vw;
}
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
    width: 100%;
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
.card-img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
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

.tree01{
  width: 120%;
  height: 120%;
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

.service-philosophy{
  background-image: url(../assets/bg_black.png) ;
  background: url(../assets/bg_black.png) repeat;
  // background-size: cover;
  // background-position: center;
}
.allImg{
  img{
    width: 100%;
  }
}

.img{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#photo-wall{
  width: 100%;
  height:500px;
  img{
    width: 100%;
    height: 500px;
  }
}
</style>
