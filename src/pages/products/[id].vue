<template>
    <div id="navbar" :class="{ 'hidden-navbar': isHidden }"></div>
  <v-container class="text-black container">
    <v-row>
    <v-col cols="12" md="6">
      <v-img :src="product.image" height="400"></v-img>
    </v-col>

    <v-col cols="12" md="6" >
      <div class="text-center text">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>

      <v-form class="form" :disabled="isSubmitting" @submit.prevent="submit">
        <v-text-field type="number" v-model.number="quantity.value.value" :error-messages="quantity.errorMessage.value"></v-text-field>
        <v-btn type="submit" prepend-icon="mdi-cart" :loading="isSubmitting">加入購物車</v-btn>
      </v-form>
    </div>
    </v-col>
  </v-row>
  </v-container>
  <v-overlay class="align-center justify-center text-center" :model-value="!product.sell" persistent>
    <h1 class="text-center text-red">已下架</h1>
    <v-btn to="/">回首頁</v-btn>
  </v-overlay>
</template>

<script setup>
// import { ref } from 'vue'
import { definePage } from 'vue-router/auto'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/stores/user'
import { ref, onMounted, onUnmounted } from 'vue'
// import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '購物網 | 商品',
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
const route = useRoute()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const load = async () => {
  try {
    const { data } = await api.get('/product/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = '購物網 | ' + product.value.name
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
load()

const schema = yup.object({
  quantity: yup.number().typeError('數量必填').required('數量必填').min(1, '最少為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  const result = await user.addCart(product.value._id, values.quantity)
  createSnackbar({
    text: result.text,
    snackbarProps: {
      color: result.color
    }
  })
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

.container {
  padding-top: 140px !important;
  padding-bottom: 50px;
  width: 100%;
  height: 100%;
  .text{
    margin: 0 auto;
    align-items: center;
    h1{
    font-size: 2rem;
    margin-bottom: 3vw;
  }
  p{
    font-size: 15px;
    margin-bottom: 3vw;
  }
  .form{
    width: 50%;
    margin: auto;
  }
  }

}

</style>
