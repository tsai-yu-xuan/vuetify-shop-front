<template>
  <v-container>
    <div><hr></div>
  </v-container>
  <!-- 3個 優惠專案 -->
  <v-container class="text-center">
    <v-row class="text-brown card-title">
      <v-col>服務項目</v-col>
    </v-row>
    <v-row class="d-flex m-auto">
     <!-- ----------------------------------- -->
      <v-col
        cols="12"
        v-for="service in services" :key="service._id"
      >
        <!-- <ProductCard v-bind="product"></ProductCard> -->

      <v-card class="card">
        <v-img class="" :src="image" cover height="200"></v-img>
        <v-card-title class="text-center ">
          {{ name }}
        </v-card-title>
        <v-card-subtitle>${{ price }}</v-card-subtitle>
        <v-card-text>
          {{ description }}
        </v-card-text>
        <v-card-actions class="btn">
          <!-- <v-spacer></v-spacer> -->
          <v-btn prepend-icon="mdi-cart" @click="addCart" :loading="loading">加入購物車</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  <!-- -------------------------- -->
      <div class="menu">
      <div>
        <v-btn class="mt-5 btn ">
          <router-link to="/Services" class="menu-btn ">優惠專案</router-link>
        </v-btn>
      </div>
      <div>
        <v-btn class="mt-5 btn ">
          <router-link to="/Services" class="menu-btn">個別火化</router-link>
        </v-btn>
      </div>
      <div>
        <v-btn class="mt-5 btn ">
          <router-link to="/Services" class="menu-btn">團體火化</router-link>
        </v-btn>
      </div>
      <div >
        <v-btn class="mt-5 btn ">
          <router-link to="/Services" class="menu-btn">紀念飾品區</router-link>
        </v-btn>
      </div>
    </div>
    </v-row>
    <v-row  class="card no-background">
      <v-col cols="12" md="4">
        <v-card class="no-background text-brown card-box">
          <v-card-item>
            <v-card-title class="padding">$000</v-card-title>
            <v-card-title class="padding">親密團體火化專案</v-card-title>
            <v-card-subtitle class="padding text-black">專案項目包含</v-card-subtitle>
            <v-card-subtitle class="padding">團體火化</v-card-subtitle>
            <v-card-subtitle class="padding">樹灑葬</v-card-subtitle>
            <v-card-subtitle class="padding">文青追思牆</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-btn class="mt-5 btn ">
              <router-link to="/ContactUs" class="btn-text ">聯絡我們</router-link>
            </v-btn>
          </v-card-text>
          <v-img><img class="img" src="../assets/indexSection03-1.jpeg"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="no-background text-brown card-box">
          <v-card-item>
            <v-card-title class="padding">$000</v-card-title>
            <v-card-title class="padding">親密團體火化專案</v-card-title>
            <v-card-subtitle class="padding text-black">專案項目包含</v-card-subtitle>
            <v-card-subtitle class="padding">團體火化</v-card-subtitle>
            <v-card-subtitle class="padding">樹灑葬</v-card-subtitle>
            <v-card-subtitle class="padding">文青追思牆</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-btn class="mt-5 btn ">
              <router-link to="/ContactUs" class="btn-text ">聯絡我們</router-link>
            </v-btn>
          </v-card-text>
          <v-img><img class="img" src="../assets/indexSection03-1.jpeg"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="no-background text-brown card-box">
          <v-card-item>
            <v-card-title class="padding">$000</v-card-title>
            <v-card-title class="padding">親密團體火化專案</v-card-title>
            <v-card-subtitle class="padding text-black">專案項目包含</v-card-subtitle>
            <v-card-subtitle class="padding">團體火化</v-card-subtitle>
            <v-card-subtitle class="padding">樹灑葬</v-card-subtitle>
            <v-card-subtitle class="padding">文青追思牆</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-btn class="mt-5 btn ">
              <router-link to="/ContactUs" class="btn-text ">聯絡我們</router-link>
            </v-btn>
          </v-card-text>
          <v-img><img class="img" src="../assets/indexSection03-1.jpeg"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref } from 'vue'
// 使用 useSnackbar 鉤子創建一個 Snackbar，用來在頁面上顯示通知訊息

// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'
// ------服務項目的---------------------------------
const { api } = useApi() // 從 useApi 鉤子中取得 api 方法，用來與後端進行 API 通訊
const createSnackbar = useSnackbar()

// 使用 ref 定義一個反應式的空陣列，用來存儲產品資料
const services = ref([])
// 定義一個異步函數 loadServices，用來從伺服器加載產品資料
const loadServices = async () => {
  try {
    // 使用 API 調用，從 '/service' 路徑獲取產品資料
    const { data } = await api.get('/service', {
      // 傳遞的參數包括每頁顯示的產品數量和當前頁碼
      params: {
        itemsPerPage: 0 // 設定 itemsPerPage 為 0，表示獲取所有產品
      }
    })
    // 更新 services 反應式變數，先清空當前的產品列表，再加入新的資料
    services.value.splice(0, services.value.length, ...data.result.data)
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
loadServices()
// -------------------------------------------
// 初始化
AOS.init()
</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件

.card-title{
  font-size: 40px;
  padding-top: 4vw;
  padding-bottom: 0.5vw;
}

.card-box{
  font-size: 40px;
  padding-top: 4vw;
  padding-bottom: 1vw;
  border-radius: 200px 200px 0 0;
  background: $ehp-white !important;
  box-shadow: 0 0 0 0 !important;
}

.btn{
  background-color: $ehp-grey;
  padding: 0px 1vw;
  border-radius: 20px;
  margin: 0.5vw;
}

.btn-text{
  color: $ehp-white;
  text-decoration: none  !important; /* 移除底線 */
  line-height: 16px;
  font-size:15px;
  font-weight: bold;
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
  width: 100%;
  height: 100%;
}
</style>
