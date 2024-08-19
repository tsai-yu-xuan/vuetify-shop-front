<template>
  <div class="bg">
  <v-container>
    <v-row>
      <v-col cols="12" class="title">
        <h1 class="text-center">訂單查詢</h1>
      </v-col>
      <v-divider ></v-divider>
      <v-col cols="12">
         <!-- 使用 Vuetify 的數據表格來顯示訂單資料 -->
        <v-data-table
          :items="items"
          :headers="headers"
          class="tableBg"
        >
        <!-- 自定義商品列的顯示樣式 -->
          <template #[`item.cart`]="data">
            <ul>
              <li v-for="item in data.item.cart" :key="item._id">
                <!-- 顯示商品名稱及其數量 -->
                {{ item.p_id.name }} * {{ item.quantity }}
              </li>
            </ul>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '訂單查詢 | 鼠兔永恆居所',
    login: true,
    admin: false
  }
})

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const items = ref([])
const headers = [
  { title: '編號', key: '_id' },
  { title: '日期', key: 'createdAt', value: item => new Date(item.createdAt).toLocaleString() },
  { title: '商品', key: 'cart', sortable: false },
  {
    title: '金額',
    key: 'price',
    value: item => {
      return item.cart.reduce((total, current) => {
        return total + current.quantity * current.p_id.price
      }, 0)
    }
  }
]

const loadItems = async () => {
  try {
    const { data } = await apiAuth.get('/order')
    items.value.push(...data.result)
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
loadItems()
</script>

<style>
.bg {
  background: url('../assets/bg_black.png') repeat;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
.title{
 margin-top: 8vw;
}
.tableBg{
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
  color: #263A4F;
}
</style>

<route lang="yaml">
  meta:
    layout: user
</route>
