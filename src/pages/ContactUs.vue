<template>

<div id="navbar" :class="{ 'hidden-navbar': isHidden }"></div>
  <v-container fluid class="container" >
    <v-row class="text-center" >
      <v-col cols="12" >
        <h1 class="title1 text-black text-Chinese">聯絡我們</h1>
      </v-col>
      <v-col cols="12">
        <p class="text-black text-Chinese padding">服務時間</p>
        <p class="text-black text-Chinese padding">9:00-21:00</p>
        <div class="line padding"></div>
        <p class="text-black text-Chinese padding">聯絡我們</p>
        <p class="text-black text-Chinese padding">02-XXXX-XXXX</p>
        <div class="line padding"></div>
        <p class="text-black text-Chinese padding">聯絡地址</p>
        <p class="text-black text-Chinese padding"> 243新北市泰山區工專路ＸＸ號</p>
      </v-col>
      <v-col cols="12">
        <iframe
                  style="width: 40vw; height: 20vw; border: 2px solid #EEEDEB;"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7023777147806!2d121.416871876079!3d25.0441724378805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A6LK05a2Q6YeM6Ie06YGg5paw5p2RNTXkuYsx6Jmf5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1717729138642!5m2!1szh-TW!2stw"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
      </v-col>
    </v-row>
    <v-row>

    </v-row>
  </v-container>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// 當你有一個名為 XXX.vue 的頁面組件時，你可以使用 definePage 來自動生成對應的 /about 路由。  下面用definePage
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '聯絡我們 | 鼠兔永恆居所',
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

.title1 {
  font-size: 30px;
  color: $ehp-black;
  margin-bottom: 1.5vw;
  font-weight: normal; // 取消原本h1的字體粗細
}

.container {
  padding-top: 8vw !important;
  padding-bottom: 8vw !important;
}

.padding{
  margin-bottom: 1vw;
}
.line{
  width: 250px;
  border-top: 1px solid #000;
  margin-top: 1vw;
  margin-bottom: 1vw;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
