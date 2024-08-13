<template>
  <v-card class="card">
    <v-img class="" :src="image" cover height="200"></v-img>
    <v-card-title class="text-center ">
      <router-link class="card-title" :to="'/products/' + _id" >{{ name }}</router-link>
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
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref } from 'vue'
// 初始化用戶狀態、路由和 Snackbar 函數
const user = useUserStore()
const router = useRouter()
const createSnackbar = useSnackbar()
// 定義 props 來接收父組件傳遞的資料
const props = defineProps(['_id', 'category', 'description', 'image', 'name', 'price', 'sell'])
// 定義一個反應式變數 loading 用於控制按鈕的加載狀態
const loading = ref(false)

// 定義一個異步函數 addCart，用於將產品加入購物車
const addCart = async () => {
  // 如果用戶未登入，則跳轉到登入頁面
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  // 設置按鈕為加載狀態
  loading.value = true

  // 調用用戶狀態管理中的 addCart 函數來將產品加入購物車
  const result = await user.addCart(props._id, 1)
  // 顯示 Snackbar 提示用戶操作結果
  createSnackbar({
    text: result.text,
    snackbarProps: {
      color: result.color
    }
  })
  // 加載完成，取消按鈕的加載狀態
  loading.value = false
}
</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件

.card{
  background: #bcbcbc;
}
.card-title{
  font-size: 20px;
  font-weight: bold;
  color: $ehp-black !important;
  text-decoration: none !important;
}
.btn{
  display: flex;
  justify-content: center;
}
</style>
