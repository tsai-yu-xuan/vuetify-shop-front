<template>
  <v-container class="">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center text-white">商品管理</h1>
      </v-col>
      <v-divider></v-divider>
      <div class="border">
         <!-- 新增商品按鈕 -->
      <v-col cols="12">
        <v-btn class="btn" @click="openDialog(null)">新增商品</v-btn>
      </v-col>
       <!-- 新增商品按鈕商品資料表 -->
      <v-col cols="12">
        <v-data-table-server
          v-model:items-per-page="tableItemsPerPage"
          v-model:sort-by="tableSortBy"
          v-model:page="tablePage"
          :items="tableItems"
          :headers="tableHeaders"
          :loading="tableLoading"
          :items-length="tableItemsLength"
          :search="tableSearch"
          @update:items-per-page="tableLoadItems(false)"
          @update:sort-by="tableLoadItems(false)"
          @update:page="tableLoadItems(false)"
          hover
          class="no-background"
        >
        <!-- 表格頂部的搜尋框 -->
          <template #top>
            <v-text-field
              label="搜尋"
              v-model="tableSearch"
              append-icon="mdi-magnify"
              @click-append="tableLoadItems(true)"
              @keydown.enter="tableLoadItems(true)"
            ></v-text-field>
          </template>
          <!-- 顯示商品圖片的插槽 -->
          <template #[`item.image`]="{ value }">
            <v-img :src="value" height="50px"></v-img>
          </template>
          <!-- 顯示商品上架狀態的插槽 -->
          <template #[`item.sell`]="{ value }">
            <v-icon icon="mdi-check" v-if="value"></v-icon>
          </template>
          <!-- 編輯按鈕的插槽 -->
          <template #[`item.action`]="{ item }">
            <v-btn icon="mdi-pencil" variant="text" color="white" @click="openDialog(item)"></v-btn>
          </template>
        </v-data-table-server>
      </v-col>
    </div>
    </v-row>
  </v-container>
  <!-- 編輯或新增商品的對話框 -->
  <v-dialog v-model="dialog.open" persistent width="500">
    <v-form @submit.prevent="submit" :disabled="isSubmitting">
      <v-card>
        <v-card-title>{{ dialog.id ? '編輯商品' : '新增商品' }}</v-card-title>
        <v-card-text>
          <!-- 商品名稱輸入框 -->
          <v-text-field
            label="名稱"
            v-model="name.value.value"
            :error-messages="name.errorMessage.value"
          ></v-text-field>
           <!-- 商品價格輸入框 -->
          <v-text-field
            label="價格"
            type="number" min="0"
            v-model="price.value.value"
            :error-messages="price.errorMessage.value"
          ></v-text-field>
          <!-- 商品分類選擇框 -->
          <v-select
            label="分類"
            :items="categories"
            v-model="category.value.value"
            :error-messages="category.errorMessage.value"
          ></v-select>
          <!-- 商品上架狀態選擇框 -->
          <v-checkbox
            label="上架"
            v-model="sell.value.value"
            :error-messages="sell.errorMessage.value"
          ></v-checkbox>
          <!-- 商品說明輸入框 -->
          <v-textarea
            label="說明"
            v-model="description.value.value"
            :error-messages="description.errorMessage.value"
          ></v-textarea>
          <!-- 文件上傳組件 -->
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
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

definePage({
  meta: {
    title: '購物網 | 商品管理',
    login: true,
    admin: true
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
    price.value.value = item.price
    description.value.value = item.description
    category.value.value = item.category
    sell.value.value = item.sell
  } else {
    dialog.value.id = ''
  }
  dialog.value.open = true
}
// 關閉對話框
const closeDialog = () => {
  dialog.value.open = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}
// 商品分類選項
const categories = ['鑰匙圈', '生態瓶', '盆栽']

// 使用 yup 定義表單的驗證規則
const schema = yup.object({
  name: yup
    .string()
    .required('商品名稱必填'),
  price: yup
    .number()
    .typeError('商品價格格式錯誤')
    .required('商品價格必填')
    .min(0, '商品價格不能小於 0'),
  description: yup
    .string()
    .required('商品說明必填'),
  category: yup
    .string()
    .required('商品分類必填')
    .test('isCategory', '商品分類錯誤', value => {
      return categories.includes(value)
    }),
  sell: yup
    .boolean()
})

// 使用 vee-validate 處理表單
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    price: 0,
    description: '',
    category: '',
    sell: true
  }
})
// 定義表單欄位
const name = useField('name')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const sell = useField('sell')

// 文件上傳相關狀態
const fileRecords = ref([])
const rawFileRecords = ref([])
// 提交表單數據
const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return // 驗證上傳文件是否有錯誤
  if (dialog.value.id.length === 0 && fileRecords.value.length < 1) return // 若為新增商品，必須上傳文件

  try {
    const fd = new FormData()
    // fd.append(key, value)
    fd.append('name', values.name)
    fd.append('price', values.price)
    fd.append('description', values.description)
    fd.append('category', values.category)
    fd.append('sell', values.sell)

    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    // 根據對話框的狀態決定是新增還是編輯
    if (dialog.value.id === '') {
      await apiAuth.post('/product', fd)
    } else {
      await apiAuth.patch('/product/' + dialog.value.id, fd)
    }

    // 顯示操作成功的提示
    createSnackbar({
      text: dialog.value.id === '' ? '新增成功' : '編輯成功',
      snackbarProps: {
        color: 'green'
      }
    })
    closeDialog()
    tableLoadItems(true)
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

const tableItemsPerPage = ref(10)
const tableSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
const tablePage = ref(1)
const tableItems = ref([])
const tableHeaders = [
  { title: '圖片', align: 'center', sortable: false, key: 'image' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '價格', align: 'center', sortable: true, key: 'price' },
  { title: '分類', align: 'center', sortable: true, key: 'category' },
  { title: '上架', align: 'center', sortable: true, key: 'sell' },
  { title: '操作', align: 'center', sortable: false, key: 'action' }
]
const tableLoading = ref(true)
const tableItemsLength = ref(0)
const tableSearch = ref('')
const tableLoadItems = async (reset) => {
  if (reset) tablePage.value = 1
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/product/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order || 'desc',
        search: tableSearch.value
      }
    })
    tableItems.value.splice(0, tableItems.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
  tableLoading.value = false
}
tableLoadItems()
</script>

<style scoped lang="scss">
.bg {
  width: 75vw !important;
  margin: 3vw auto;
}

.border{
  margin: 20px;
  width: 100%;
  border-radius: 20px;
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.5)
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
