<template>
  <div id="navbar" :class="{ 'hidden-navbar': isHidden }"></div>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { definePage } from 'vue-router/auto'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'

definePage({
  meta: {
    title: '線上購物 | 鼠兔永恆居所',
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
// ------商品的---------------------------------
const { api } = useApi()
const createSnackbar = useSnackbar()

const page = ref(1)
const pages = ref(1)
const ITEMS_PER_PAGE = 20

const products = ref([])
const loadProducts = async () => {
  try {
    const { data } = await api.get('/product', {
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value
      }
    })
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE)
    products.value.splice(0, products.value.length, ...data.result.data)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
loadProducts()
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

.image-container {
  // width: 60%;
  position: relative;
  // display: inline-block;
  margin-right: 10%;
  // display: block;
  margin: 0 auto;
}

.text-overlay {
  position: absolute;
  top: 10%;
  left: 15%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

v-img {
  display: block;
}
</style>
