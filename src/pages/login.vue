<template>

<div id="navbar" :class="{ 'hidden-navbar': isHidden }"></div>
  <v-container fluid class="text-black bg-img container100">
    <div class="container">
    <v-row class="bg box">
      <v-col cols="12">
        <h1 class="text-center">登入</h1>
      </v-col>
      <v-divider></v-divider>
      <br>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            label="帳號"
            minlength="4" maxlength="20" counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="密碼"
            minlength="4" maxlength="20" counter
            type="password"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
          ></v-text-field>
          <div class="text-center">
            <v-btn type="submit" color="green" :loading="isSubmitting">登入</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import validator from 'validator'
import { definePage } from 'vue-router/auto'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

import { ref, onMounted, onUnmounted } from 'vue'
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

definePage({
  meta: {
    title: '登入 | 鼠兔永恆居所',
    login: false,
    admin: false
  }
})

const router = useRouter()
const user = useUserStore()
const createSnackbar = useSnackbar()

const schema = yup.object({
  account: yup
    .string()
    .required('使用者帳號必填')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符')
    .test(
      // .test(自訂驗證名稱, 錯誤訊息, 驗證 function)
      'isAlphanumeric', '使用者帳號格式錯誤',
      (value) => {
        return validator.isAlphanumeric(value)
      }
    ),
  password: yup
    .string()
    .required('使用者密碼必填')
    .min(4, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})
const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  const result = await user.login(values)
  if (result === '登入成功') {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'green'
      }
    })
    router.push('/')
  } else {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'red'
      }
    })
  }
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

.bg-img{
  width: 100% !important;
  height: 100% !important;
  background: url(../assets/flower.png) no-repeat;
  background-size: cover;
  background-position: center;
  padding: 0;
}

@media (min-width: 1000px) {
  .box {
  width: 40vw;
  height: 80%;
  padding-top: 4vw !important;
  padding-bottom: 8vw !important;
  }
}
@media (max-width: 999px) {
  .box {
  width: 80vw;
  height: 80%;
  padding-top: 4vw !important;
  padding-bottom: 8vw !important;
 }
}

.bg{
  background-color: rgba($color: $ehp-white, $alpha: 0.8);
  // opacity: 0.5;
  border-radius: 10px;
  padding: 20px;
  margin: 5vw auto;

}
.container{
  margin: 50px auto !important;
  padding: 40px;
}
</style>
