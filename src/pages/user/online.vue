<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="title">
        <h1 class="text-center text-white">線上祭祀</h1>
        <v-btn class="addBtn" @click="openDialog(null)">新增祭祀寶貝</v-btn>
      </v-col>
      <div class="onlineWorships-box">
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
          <SwiperSlide v-for="item in cardItems" :key="item._id">
            <v-col class="card no-background text-center">
              <v-card class="no-background card-box">
                <v-img class="img" :src="item.image" height="200px"></v-img>
                <v-card-title>{{ item.name }}</v-card-title>
                <v-card-subtitle>忌日 {{ item.date }}</v-card-subtitle>
                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                <v-btn class="btn" icon="mdi-pencil" variant="text" color="white" @click="openDialog(item)"></v-btn>
              </v-card>
            </v-col>
          </SwiperSlide>
        </swiper>
      </div>
    </v-row>
  </v-container>

  <v-dialog v-model="dialog.open" persistent width="500">
    <v-form @submit.prevent="submit" :disabled="isSubmitting">
      <v-card>
        <v-card-title>{{ dialog.id ? '編輯商品' : '新增商品' }}</v-card-title>
        <v-card-text>
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
          <v-text-field
            label="名稱"
            v-model="name.value"
            :error-messages="name.errorMessage.value"
          ></v-text-field>
          <v-date-input
            v-model="date.value"
            label="輸入寶貝忌日"
            :error-messages="date.errorMessage.value"
          ></v-date-input>
          <v-textarea
            label="說明"
            v-model="description.value"
            :error-messages="description.errorMessage.value"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" :loading="isSubmitting" @click="closeDialog">取消</v-btn>
          <v-btn color="green" type="submit" :loading="isSubmitting">送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { VDateInput } from 'vuetify/labs/VDateInput'

import { zonedTimeToUtc } from 'date-fns-tz'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'

const modules = [EffectCoverflow, Pagination]
const timeZone = 'Asia/Taipei'
const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const dialog = ref({
  open: false,
  id: ''
})

const schema = yup.object({
  name: yup.string().required('商品名稱必填'),
  description: yup.string().required('商品說明必填'),
  date: yup.string().required('日期必填').typeError('無效的日期格式')
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    description: ''
  }
})

const name = useField('name')
const description = useField('description')
const date = useField('date')

const fileRecords = ref([])
const rawFileRecords = ref([])

const openDialog = (item) => {
  if (item) {
    dialog.value.id = item._id
    name.value = item.name
    description.value = item.description
    date.value = item.date
  } else {
    dialog.value.id = ''
  }
  dialog.value.open = true
}
const fileAgent = ref(null) // 定義 fileAgent
const closeDialog = () => {
  dialog.value.open = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return
  if (dialog.value.id.length === 0 && fileRecords.value.length < 1) return

  try {
    const fd = new FormData()
    fd.append('name', values.name)
    fd.append('description', values.description)
    fd.append('date', zonedTimeToUtc(values.date, timeZone).toISOString())
    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    if (dialog.value.id === '') {
      await apiAuth.post('/onlineWorship', fd)
    } else {
      await apiAuth.patch('/onlineWorship/' + dialog.value.id, fd)
    }

    createSnackbar({
      text: dialog.value.id === '' ? '新增成功' : '編輯成功',
      snackbarProps: {
        color: 'green'
      }
    })
    closeDialog()
    cardLoadItems(true)
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
})

const cardItemsPerPage = ref(10)
const cardSortBy = ref([{ key: 'createdAt', order: 'desc' }])
const cardPage = ref(1)
const cardItems = ref([])
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
    cardItems.value.splice(0, cardItems.value.length, ...data.result.data)
    cardItemsLength.value = data.result.total
  } catch (error) {
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
  margin: 3vw auto;
}
.title{
  width: 100%;
  height: 65px;
  margin: 0;
}

.addBtn{
  margin: 10px;
  background: $ehp-black;
  color: $ehp-yellow;
  position: relative;
  top: 20px;
  left: 4%;
}

.onlineWorships-box{
  margin: 5px 40px;
  width: 92%;
  height: 768px;
  border-radius: 20px;
  padding: 90px 0;
  background: url(../../assets/onlineWorships/onlineWorships-bg.png) no-repeat;
  background-size: 100%;
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
  height: 52%;
}

.img{
  width: 200px;
  height: 200px;
  // position: relative;
  margin: auto;
}
.btn{
  // background-color: $brown;
  // color: white;
  margin-bottom: 10px;
  position: relative;
  top:-120px;
  left:20%;
  z-index:99;
}
</style>

<route lang="yaml">
meta:
  layout: user
</route>
