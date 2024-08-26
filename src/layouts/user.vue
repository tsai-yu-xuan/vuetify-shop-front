<template>

  <v-navigation-drawer permanent class="bg">
    <v-list>
      <v-list-item :prepend-avatar="avatar" :title="user.account"></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="item in navItems" :key="item.to"
        :to="item.to" :title="item.text" :prepend-icon="item.icon"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>

</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const user = useUserStore()

const navItems = [
  { to: '/user/orders', text: '訂單查詢', icon: 'mdi-list-box' },
  { to: '/user/onlineWorships', text: '線上祭祀', icon: 'mdi-hands-pray' },
  // { to: '/user/online', text: '測試', icon: 'mdi-hands-pray' },
  { to: '/', text: '回首頁', icon: 'mdi-home' }
]

const avatar = computed(() => {
  return `https://api.multiavatar.com/${user.account}.png`
})
</script>

<style scoped lang="scss">
@import '@/styles/settings'; // 導入變數文件

.v-main {
  background: url('../assets/bg_black.png') repeat;
}

.bg{
  background: url('../assets/bg_black.png') repeat;
}
</style>
