<template>
  <div class="box">
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
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const user = useUserStore()

const navItems = [
  { to: '/admin/products', text: '商品管理', icon: 'mdi-shopping' },
  { to: '/admin/services', text: '服務項目管理', icon: 'mdi-cog' },
  { to: '/admin/orders', text: '訂單管理', icon: 'mdi-list-box' },
  { to: '/', text: '回首頁', icon: 'mdi-home' }
]

const avatar = computed(() => {
  return `https://api.multiavatar.com/${user.account}.png`
})
</script>

<style scoped lang="scss">
@import '@/styles/settings'; // 導入變數文件

// .v-main {
//   backgrosund: url('../assets/bg_black.png') repeat;
// }
.box{
  margin: 30px !important;
}
.bg{
  background: url('../assets/bg_black.png') repeat;
  margin: 30px !important;
}

</style>
