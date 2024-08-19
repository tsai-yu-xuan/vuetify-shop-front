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
    <v-row class="text-brown process-img">
      <v-img src="https://picsum.photos/1920/800/?random=10"></v-img>
    </v-row>
  </v-container>

    <v-container class="text-center">
      <v-row >
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="https://picsum.photos/800/500/?random=10"
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
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

  <v-container class="text-center">
      <v-row >
        <v-col id="text2" cols="12" md="6" class="d-flex align-center text-grey">
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
            </p>
          </div>
        </v-col>
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="https://picsum.photos/800/500/?random=10"
              data-aos="zoom-out-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="text-center">
      <v-row >
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="https://picsum.photos/800/500/?random=10"
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
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

  <v-container class="text-center">
      <v-row >
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
            </p>
          </div>
        </v-col>
        <v-col id="img2" cols="12" md="6" class="d-flex align-center">
          <div>
            <img
              src="https://picsum.photos/800/500/?random=10"
              data-aos="zoom-out-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-offset="200"
              data-aos-delay="000"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  <v-container>
    <v-row>
      <v-col id="text3" cols="12" md="7" class="d-flex align-center">
        <div>
          <img
            src="https://picsum.photos/496/600/?random=10"
            data-aos="zoom-out-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            data-aos-offset="200"
            data-aos-delay="000"
          />
        </div>
      </v-col>
      <v-col id="img2" cols="12" md="5" class="d-flex align-center">
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
    </v-row>
  </v-container>

  <!-- <v-container class="text-center">
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
    </v-container> -->
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
  height: 500px !important;
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
}
.img{
  padding: 1vw;
  width: 100%;
  height: 100%;
}
</style>
