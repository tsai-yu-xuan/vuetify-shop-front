<template>
  <div class="bg">
  <v-container class="h-100">
    <v-row class="h-100">
      <v-col cols="12">
        <h1 class="text-center text-white">請選擇使用者管理項目</h1>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '使用者管理 | 鼠兔永恆居所',
    login: true,
    admin: false
  }
})
</script>
<style>

</style>

<route lang="yaml">
  meta:
    layout: user
</route>
