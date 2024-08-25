<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto card"
        color="grey-lighten-5"
        max-width="500"
        v-bind="props"
      >
      <router-link class="card-title" :to="'/products/' + _id" >
        <v-img
  :aspect-ratio="16/13"
  :src="image"
  cover
>
  <v-expand-transition>
    <div
      v-if="isHovering"
      class="d-flex flex-column transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
      style="height: 100%;"
    >
      <div>
        <p class="price-text">${{ price }}</p>
      </div>
      <br>
      <div class="description-text">
{{ description }}
      </div>
    </div>
  </v-expand-transition>
</v-img>

        <v-card-text class="pt-6">
          <!-- <div class="font-weight-light text-grey text-h6 mb-2">
            For the perfect meal
          </div> -->

          <h3 class="text-h4 font-weight-light text-orange mb-2 text-center" >
            <router-link class="card-title" :to="'/products/' + _id" >{{ name }}</router-link>
          </h3>

        </v-card-text>
      </router-link>
      <v-card-actions class="btn">
      <v-btn prepend-icon="mdi-cart" @click="addCart" :loading="loading">加入購物車</v-btn>
    </v-card-actions>
      </v-card>

    </v-hover>

  </div>
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
  background: #d0cece !important;
  // width: 90%;
  // height: 45vh;
}
.card-title{
  font-size: 18px;
  font-weight: bold;
  color: $ehp-black !important;
  text-decoration: none !important;
}
.btn{
  display: flex;
  justify-content: center;
}
.v-card-text{
height: 8vh;
padding-top: 10px !important;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;

  }
  p{
    font-size: 2rem;
    width: 100%;
    padding: 3px;
  }
  .description-text{
    font-size: 0.8rem;
    padding: 15px !important;
  }
</style>
