<template>
   <v-container fluid class="container ">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center title1 text-black text-Chinese">線上購物</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="5" class="no-padding image-container">
        <div class="image-container">
          <v-img class="text" src="https://picsum.photos/300/200/?random=10"></v-img>
          <h1 class="text-overlay">寵物紀鑰匙圈</h1>
        </div>
      </v-col>
      <v-col
        cols="12" md="2" lg="2" class="pl-5 pr-3"
        v-for="product in products" :key="product._id"
      >
        <ProductCard v-bind="product"></ProductCard>
      </v-col>
      <v-col cols="12" class="text-grey">
        <v-pagination v-model="page" :length="pages" rounded="circle" @update:model-value="loadProducts"></v-pagination>
      </v-col>

    </v-row>
  </v-container>
  <onlineWorships />
</template>

<script setup>
import { ref } from 'vue'
import { definePage } from 'vue-router/auto'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
import onlineWorships from '@/components/onlineWorships.vue'

definePage({
  meta: {
    title: '線上祭祀 | 鼠兔永恆居所',
    login: true,
    admin: false
  }
})

// ------商品的---------------------------------
const { api } = useApi() // 從 useApi 鉤子中取得 api 方法，用來與後端進行 API 通訊
const createSnackbar = useSnackbar()
// 使用 useSnackbar 鉤子創建一個 Snackbar，用來在頁面上顯示通知訊息
// 定義一個響應式變數 page，預設值為 1，表示當前的頁碼
const page = ref(1)
// 定義一個響應式變數 page，預設值為 1，表示當前的頁碼
const pages = ref(1)
// 定義每頁顯示的產品數量，這裡設定為 20
const ITEMS_PER_PAGE = 20

// 使用 ref 定義一個反應式的空陣列，用來存儲產品資料
const products = ref([])
// 定義一個異步函數 loadProducts，用來從伺服器加載產品資料
const loadProducts = async () => {
  try {
    // 使用 API 調用，從 '/product' 路徑獲取產品資料
    const { data } = await api.get('/product', {
      // 傳遞的參數包括每頁顯示的產品數量和當前頁碼
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value
      }
    })
    // 計算總頁數並設置到 pages 反應式變數中
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE)
    // 更新 products 反應式變數，先清空當前的產品列表，再加入新的資料
    products.value.splice(0, products.value.length, ...data.result.data)
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
loadProducts()

</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件
</style>

<route lang="yaml">
meta:
  layout: user
</route>
