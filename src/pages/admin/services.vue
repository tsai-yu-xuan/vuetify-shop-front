<template>
  <v-container class="w-100">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center text-white">服務項目管理</h1>
      </v-col>
      <v-divider></v-divider>
      <div class="border">
      <v-col cols="12">
        <v-btn class="btn" @click="openDialog(null)">新增服務項目</v-btn>
      </v-col>
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
          <!-- <template #top>
            <v-text-field
              label="搜尋"
              v-model="tableSearch"
              append-icon="mdi-magnify"
              @click-append="tableLoadItems(true)"
              @keydown.enter="tableLoadItems(true)"
            ></v-text-field>
          </template> -->
          <template #[`item.image`]="{ value }">
            <v-img :src="value" height="50px"></v-img>
          </template>
          <template #[`item.sell`]="{ value }">
            <v-icon icon="mdi-check" v-if="value"></v-icon>
          </template>
          <template #[`item.action`]="{ item }">
            <v-btn icon="mdi-pencil" variant="text" color="white" @click="openDialog(item)"></v-btn>
          </template>
        </v-data-table-server>
      </v-col>
    </div>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog.open" persistent width="500">
    <v-form @submit.prevent="submit" :disabled="isSubmitting">
      <v-card>
        <v-card-title>{{ dialog.id ? '編輯商品' : '新增商品' }}</v-card-title>
        <v-card-text>
          <v-text-field
            label="名稱"
            v-model="name.value.value"
            :error-messages="name.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="價格"
            type="number" min="0"
            v-model="price.value.value"
            :error-messages="price.errorMessage.value"
          ></v-text-field>
          <v-select
            label="分類"
            :items="categories"
            v-model="category.value.value"
            :error-messages="category.errorMessage.value"
          ></v-select>
          <v-checkbox
            label="上架"
            v-model="sell.value.value"
            :error-messages="sell.errorMessage.value"
          ></v-checkbox>
          <v-textarea
            label="說明"
            v-model="description.value.value"
            :error-messages="description.errorMessage.value"
          ></v-textarea>
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
          <v-btn color="red" :loading="isSubmitting" @click="closeDialog">取消</v-btn>
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
    title: '購物網 | 服務項目管理',
    login: true,
    admin: true
  }
})

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const fileAgent = ref(null)

const dialog = ref({
  // 編輯對話框的狀態
  open: false,
  // 紀錄編輯中的 id，沒有就是新增，有就是編輯
  id: ''
})

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

const closeDialog = () => {
  dialog.value.open = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

const categories = ['優惠專案', '個別火化', '團體火化']
const schema = yup.object({
  name: yup
    .string()
    .required('服務項目名稱必填'),
  price: yup
    .number()
    .typeError('服務項目價格格式錯誤')
    .required('服務項目價格必填')
    .min(0, '服務項目價格不能小於 0'),
  description: yup
    .string()
    .required('服務項目說明必填'),
  category: yup
    .string()
    .required('服務項目分類必填')
    .test('isCategory', '商品分類錯誤', value => {
      return categories.includes(value)
    }),
  sell: yup
    .boolean()
})
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
const name = useField('name')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const sell = useField('sell')

const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return
  if (dialog.value.id.length === 0 && fileRecords.value.length < 1) return

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

    if (dialog.value.id === '') {
      await apiAuth.post('/service', fd)
    } else {
      await apiAuth.patch('/service/' + dialog.value.id, fd)
    }

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
// 定義一個異步函數 tableLoadItems，用於從 API 獲取所有服務項目數據。
const tableLoadItems = async () => {
  // 設置加載狀態為 true，表示開始加載數據。
  tableLoading.value = true
  try {
    // 向 API 發送 GET 請求以獲取所有服務項目數據。
    // 使用 apiAuth 認證請求。
    const { data } = await apiAuth.get('/service/all', {
      // 請求的參數包括排序字段、排序順序以及搜索關鍵字。
      params: {
        sortBy: tableSortBy.value[0]?.key || 'createdAt', // 默認按 'createdAt' 排序。
        sortOrder: tableSortBy.value[0]?.order || 'desc', // 默認按降序排列。
        search: tableSearch.value // 根據搜索框中的輸入進行搜索。
      }
    })
    // 清空 tableItems，然後將新獲取的數據添加到 tableItems 中。
    tableItems.value.splice(0, tableItems.value.length, ...data.result.data)
    // 設置表格項目的總數量，這可以用於顯示數據條目總數。
    tableItemsLength.value = data.result.total
  } catch (error) {
    // 如果請求失敗，捕獲錯誤並在控制台打印錯誤信息。
    console.log(error)
    // 創建一個紅色的錯誤提示條，用於顯示給用戶。
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤', // 顯示服務器返回的錯誤消息或默認錯誤消息。
      snackbarProps: {
        color: 'red' // 設置提示條的顏色為紅色。
      }
    })
  }
  // 請求結束後，無論成功或失敗，都將加載狀態設置為 false。
  tableLoading.value = false
}

// 調用 tableLoadItems 函數以加載數據。
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
