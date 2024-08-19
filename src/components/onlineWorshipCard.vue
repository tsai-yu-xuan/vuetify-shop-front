<template>

  <!-- 3個 優惠專案 -->
  <v-container class="text-center">
    <!-- effect 屬性被設置為 'cards'，這意味著滑動效果將模仿卡片翻轉的效果。 -->
     <!-- modules 屬性：傳入一個模組數組，這裡使用了 EffectCards 來實現卡片效果。 -->
   <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
    <swiper-slide swiper-slide v-for="onlineWorship in onlineWorships" :key="onlineWorship._id">
      <v-row  class="card no-background" >
      <!-- <v-col cols="12" md="4"> -->
        <v-card class="no-background text-brown card-box">
          <v-img :src="onlineWorship.image" cover height="200" max="300px"></v-img>
          <v-card-item>
            <v-card-title class="padding"> {{ onlineWorship.name }}</v-card-title>
            <v-card-subtitle class="padding"><p v-html="onlineWorship.description"></p></v-card-subtitle>
          </v-card-item>
          <v-btn icon="mdi-pencil" variant="text" color="white" @click="openDialog(item)"></v-btn>

        </v-card>
      <!-- </v-col> -->
    </v-row>
    </swiper-slide>

  </swiper>

  </v-container>
</template>

<script setup>
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref } from 'vue'

// 使用 useSnackbar 鉤子創建一個 Snackbar，用來在頁面上顯示通知訊息

// 引入 AOS 动画库---------------------------------
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper/modules'

// 設定模組
const modules = [EffectCards]
// ----------------------------------------------

// ------服務項目的---------------------------------
const { api } = useApi() // 從 useApi 鉤子中取得 api 方法，用來與後端進行 API 通訊
// console.log(api)
const createSnackbar = useSnackbar()

// 使用 ref 定義一個反應式的空陣列，用來存儲產品資料
const onlineWorships = ref([])
// 定義一個異步函數 loadServices，用來從伺服器加載產品資料
const loadOnlineWorships = async () => {
  try {
    // 使用 API 調用，從 '/service' 路徑獲取產品資料
    const { data } = await api.get('/onlineWorship', {
      // 傳遞的參數包括每頁顯示的產品數量和當前頁碼
      params: {
        itemsPerPage: 0 // 設定 itemsPerPage 為 0，表示獲取所有產品
      }
    })

    // 更新 services 反應式變數，先清空當前的產品列表，再加入新的資料
    onlineWorships.value.splice(0, onlineWorships.value.length, ...data.result.data)
  } catch (error) {
    // 如果出現錯誤，打印錯誤訊息並顯示 Snackbar 提示用戶
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤', // 顯示伺服器返回的錯誤訊息，或者使用預設訊息
      snackbarProps: {
        color: 'red'// 設置 Snackbar 顏色為紅色
      }
    })
  }
}
console.log(onlineWorships.value)

// 初始化
AOS.init()

loadOnlineWorships()

</script>

<style scoped lang="scss">
@import "@/styles/settings.scss"; // 導入變數文件

.card-title{
  font-size: 40px;
  padding-top: 4vw;
  padding-bottom: 0.5vw;
}

.card-box{
  font-size: 40px;
  width: 300px;
background: #000 !important;
}

.menu{
  width: 100%;
  display: flex;
  justify-content: center;
}
.menu-btn{
  color: $ehp-white;
  text-decoration: none  !important; /* 移除底線 */
  line-height: 16px;
  font-size:15px;
  font-weight: bold;
}

.card{
  margin:2vw 0 !important;
}
//卡片區做RWD
 @media (min-width: 959px) {
  .card{
  padding-bottom:5vw ;
  width:50%;
display: flex;
justify-content: center;
  }
 }

 @media (min-width: 960px) {
  .card{
  padding-bottom:3vw ;
  width:100%;
  margin: 0;
  }
 }

.padding{
  padding: 0.5vw 0;
}

.img{
  padding: 1vw;
  width: 400%;
  height: 140%;
}
.swiper {
  // border: 2px solid $ehp-brown;
  width: 100%;

}

</style>
