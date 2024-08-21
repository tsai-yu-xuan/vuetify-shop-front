<template>
  <v-container >
    <v-row>
      <v-col cols="12" class="title">
        <h1 class="text-center text-white">線上祭祀</h1>
        </v-col>
      <div class="onlineWorships-box">
         <!-- 新增商品按鈕 -->
         <v-btn class="addBtn" @click="openDialog(null)">新增祭祀寶貝</v-btn>

      <swiper
        class="swiper"
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
      >
        <swiper-slide swiper-slide v-for="item in cardItems" :key="item._id">
      <!-- 商品卡片 -->
      <v-col  class="card no-background text-center" >
        <v-card class="no-background card-box">
          <!-- 商品圖片 -->
          <v-img class="img" :src="item.image" height="200px"></v-img>

          <!-- <v-card-item> -->
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-subtitle>忌日 {{ newDate(item.date) }}</v-card-subtitle>
            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
            <!-- 編輯按鈕 -->
            <v-btn class="btn" icon="mdi-pencil" w-25 variant="text" color="white" @click="openDialog(item)"></v-btn>
          <!-- </v-card-item> -->
        </v-card>
    </v-col>
  </swiper-slide>
</swiper>
<v-row>
    <v-col>
      <onlineWorshipProduct class="overlay"></onlineWorshipProduct>
    </v-col>
  </v-row>
    </div>
    </v-row>
  </v-container>

  <!-- 編輯或新增商品的對話框 -->
  <v-dialog v-model="dialog.open" persistent width="500">
    <v-form @submit.prevent="submit" :disabled="isSubmitting">
      <v-card>
        <v-card-title>{{ dialog.id ? '編輯商品' : '新增商品' }}</v-card-title>
        <!-- 根據對話框的狀態決定是新增還是編輯 -->
        <v-card-text>
            <!-- 照片上傳組件 -->
          <vue-file-agent
            v-model="fileRecords"
            v-model:raw-model-value="rawFileRecords"
            accept="image/jpeg,image/png"
            deletable
            max-size="1MB"
            help-text="選擇檔案或拖曳到這裡"
            :error-text="{ type: '檔案格式不支援', size: '檔案大小不能超過 1MB' }"
            ref="fileAgent"
          ></vue-file-agent>
          <!-- 商品名稱輸入框 -->
          <v-text-field
            label="名稱"
            v-model="name.value.value"
            :error-messages="name.errorMessage.value"
          ></v-text-field>
              <!-- 日期輸入框 -->
              <!-- 日期有錯 -->
              <v-text-field
              type="date"
              v-model="date.value.value"
              label="輸入寶貝忌日"
              :error-messages="date.errorMessage.value"
             ></v-text-field>

          <v-textarea
            label="說明"
            v-model="description.value.value"
            :error-messages="description.errorMessage.value"
          ></v-textarea>

        </v-card-text>
        <v-card-actions>
           <!-- 取消按鈕 -->
          <v-btn color="red" :loading="isSubmitting" @click="closeDialog">取消</v-btn>
          <!-- 送出按鈕 -->
          <v-btn color="green" type="submit" :loading="isSubmitting">送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
import { ref } from 'vue'
// yap 驗證套件
import * as yup from 'yup'
// vee-validate 表單驗證套件
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

import onlineWorshipProduct from '@/components/onlineWorshipProduct.vue'

// ---Swiper-------------------------------------
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper/modules'

// 引入 Swiper 的模組
const modules = [EffectCoverflow, Pagination]

// ----------------------------------------------
definePage({
  meta: {
    title: '線上祭祀 | 商品管理',
    login: true,
    admin: false
  }
})

// 初始化 API 函數和 Snackbar 函數
const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

// 對話框的狀態和控制
const fileAgent = ref(null)
const dialog = ref({
  // 編輯對話框的狀態
  open: false,
  // 紀錄編輯中的 id，沒有就是新增，有就是編輯
  id: ''
})

// 打開編輯或新增對話框
const openDialog = (item) => {
  if (item) {
    dialog.value.id = item._id
    name.value.value = item.name
    description.value.value = item.description
    // 日期有錯
    date.value.value = newDate(item.date)
    console.log('item', item)
  } else {
    dialog.value.id = '' // 先去dialog找id為空 所以是新增
  }
  dialog.value.open = true // 打開對話框
}
const newDate = (dateString) => {
  return new Date(dateString).toISOString().split('T')[0]
}
// 關閉對話框
const closeDialog = () => {
  dialog.value.open = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}
// 商品分類選項
// const categories = ['鑰匙圈', '生態瓶', '盆栽']

// 使用 yup 定義表單的驗證規則
const schema = yup.object({
  name: yup
    .string()
    .required('商品名稱必填'),
  description: yup
    .string()
    .required('商品說明必填'),
  // 日期有錯
  date: yup
    .string()
    .required('日期必填')
    .typeError('無效的日期格式')

})

// 使用 vee-validate 處理表單
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    description: ''
    // 日期有錯
    // date: ''
  }
})
// 定義表單欄位
const name = useField('name')
const description = useField('description')
// 日期有錯
const date = useField('date')

// 文件上傳相關狀態
const fileRecords = ref([])
const rawFileRecords = ref([])
// 提交表單數據
const submit = handleSubmit(async (values) => {
  // console.log(values) // 打印表單數據，包括 date 欄位的值
  if (fileRecords.value[0]?.error) return // 驗證上傳文件是否有錯誤
  if (dialog.value.id.length === 0 && fileRecords.value.length < 1) return // 若為新增商品，必須上傳文件

  try {
    const fd = new FormData()
    // fd.append(key, value)
    fd.append('name', values.name)
    fd.append('description', values.description)

    // const newDate = (dateString) => {
    //   new Date(dateString).toISOString().split('T')[0]
    // }
    fd.append('date', values.date)

    // 日期有錯
    // const taipeiDate = new Date(values.date).toLocaleString('en-US', { timeZone: 'Asia/Taipei' })
    // console.log(taipeiDate)

    // fd.append('date', new Date(taipeiDate).toISOString())
    // console.log(values.date)

    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    // 根據對話框的狀態決定是新增還是編輯
    if (dialog.value.id === '') {
      await apiAuth.post('/onlineWorship', fd)
    } else {
      await apiAuth.patch('/onlineWorship/' + dialog.value.id, fd)
    }

    // 顯示操作成功的提示
    createSnackbar({
      text: dialog.value.id === '' ? '新增成功' : '編輯成功',
      snackbarProps: {
        color: 'green'
      }
    })
    closeDialog()
    cardLoadItems()
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
})

const cardItemsPerPage = ref(10)
const cardSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
const cardPage = ref(1)
const cardItems = ref([])
// const tableHeaders = [
//   { title: '圖片', align: 'center', sortable: false, key: 'image' },
//   { title: '名稱', align: 'center', sortable: true, key: 'name' },
// { title: '價格', align: 'center', sortable: true, key: 'price' },
// { title: '分類', align: 'center', sortable: true, key: 'category' },
// { title: '上架', align: 'center', sortable: true, key: 'sell' },
//   { title: '操作', align: 'center', sortable: false, key: 'action' }
// ]
const cardLoading = ref(true)
const cardItemsLength = ref(0)
const cardSearch = ref('')
const cardLoadItems = async (reset) => {
  if (reset) cardPage.value = 1
  cardLoading.value = true
  try {
    const { data } = await apiAuth.get('/onlineWorship/all', {
      params: {
        page: cardPage.value,
        itemsPerPage: cardItemsPerPage.value,
        sortBy: cardSortBy.value[0]?.key || 'createdAt',
        sortOrder: cardSortBy.value[0]?.order || 'desc',
        search: cardSearch.value
      }
    })
    // 取出date的前10碼
    const processedItems = data.result.data.map(item => {
      return {
        ...item,
        createdAt: item.createdAt.slice(0, 10) // 截取日期的前10碼
      }
    })

    cardItems.value.splice(0, cardItems.value.length, ...processedItems)
    console.log('cardItems', cardItems.value)

    cardItemsLength.value = data.result.total
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
  cardLoading.value = false
}
cardLoadItems()
</script>
<style scoped lang="scss">
@import "../../styles/settings.scss"; // 導入變數文件

.bg {
  width: 75vw !important;
  // height: 80vh;
  margin: 3vw auto;
}
.title{
  width: 100%;
  height: 65px;
  margin: 0;
}

.onlineWorships-box{
  margin: 5px 40px;
  width: 92%;
  height: 740px;
  border-radius: 20px;
  padding: 80px 0;
  background: url(../../assets/onlineWorships/onlineWorships-bg.png) no-repeat;
  background-size: 100%;
  position: relative;
}

.addBtn{
  margin: 10px;
  background: $ehp-black;
  color: $ehp-yellow;
  position: absolute;
  top: 10px;
  left: 1%;
}

.card{
  margin: auto;
  width: 30vw;
  border-radius: 20px;
  padding: 0px;
}
.card-box{
  color: $ehp-yellow;
}

.swiper{
  width: 30%;
  height: 55%;
}

.img{
  width: 200px;
  height: 200px;
  // position: relative;
  margin: auto;
}
.btn{
  margin-bottom: 10px;
  // position: relative;
  top:-125px;
  // left:1%;
  z-index:99;
}
.overlay{
  position: absolute;
  top:32%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 65%;
  height: 65%;
  // background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>

<route lang="yaml">
meta:
  layout: user
</route>
