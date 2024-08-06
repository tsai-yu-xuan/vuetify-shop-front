<template>
  聯絡我們
</template>

<script setup>
// 當你有一個名為 XXX.vue 的頁面組件時，你可以使用 definePage 來自動生成對應的 /about 路由。  下面用definePage
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '聯絡我們 | 鼠兔永恆居所',
    login: false,
    admin: false
  }
})
</script>
