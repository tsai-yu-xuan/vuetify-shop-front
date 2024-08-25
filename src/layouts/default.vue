<template >
  <!-- 手機版側欄 -->
  <v-navigation-drawer v-if="mobile" v-model="drawer" class="mobile">
    <v-list nav>
      <template v-for="item in navItemsMobile" :key="item.to">
        <v-list-item
          :prepend-icon="item.icon" :to="item.to"
          :title="item.text"
          v-if="item.show"
        >
          <template #append>
            <v-badge color="error" :content="user.cart" v-if="item.to === '/cart' && user.cart > 0" inline></v-badge>
          </template>
        </v-list-item>
      </template>
      <v-list-item prepend-icon="mdi-account-arrow-right" v-if="user.isLogin" title="登出" @click="logout"></v-list-item>
    </v-list>
    <!-- <v-list nav> -->
      <!-- 手機版（電腦版左側的） -->
      <!-- <template v-for="item in navItemsMobile" :key="item.to"> -->

  </v-navigation-drawer>
  <!-- 導覽列 ------------------------------------------->
  <v-app-bar :class="{'transparent-navbar': isTransparent, 'white-navbar': !isTransparent}">
    <v-container class="d-flex align-center">
      <!-- 手機版 logo------------------------------- -->
      <div ma-3>
        <a v-if="mobile" href="/"  class="logo">
        <v-img  width="250" height="64"  src="../assets/logo2.png"></v-img>
        </a>
      </div>
      <v-spacer />
      <template v-if="mobile">
        <!-- 手機板漢堡按鈕 -->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </template>

        <!-- 電腦版選單 -->
      <template v-else>
        <v-container fluid>
          <v-row align="center" justify="space-between">
            <!-- 電腦版選單左側 -->
            <v-col cols="auto">
              <v-row align="center" no-gutters>
                <template v-for="item in navItemsLeft" :key="item.to">
                  <v-btn v-if="item.show" :prepend-icon="item.icon" :to="item.to">
                    {{ item.text }}
                    <v-badge color="red" :content="user.cart" v-if="item.to === '/cart' && user.cart > 0" floating></v-badge>
                  </v-btn>
                 </template>
               </v-row>
            </v-col>
            <!-- 中間logo -->
            <a href="/index"><v-img width="250" height="64" src="../assets/logo2.png"></v-img></a>
            <!-- 電腦版選單右側 -->
            <v-col cols="auto">
              <v-row align="center" no-gutters>
                <template v-for="item in navItemsRight" :key="item.to">
                  <v-btn v-if="item.show" :prepend-icon="item.icon" :to="item.to">
                 {{ item.text }}
                  </v-btn>
                </template>
                <!-- 電腦版選單右側沒有文字只有icon -->
                <!-- 沒有登入登入顯示 -->
                <div v-if="!user.isLogin">
                  <!-- 註冊 -->
                  <v-btn to="/register" icon><v-icon>mdi-account-plus</v-icon></v-btn>
                  <!-- 登入 -->
                  <v-btn to="/login" icon><v-icon>mdi-account</v-icon></v-btn>
                </div>
                <!-- 一般使用者登入顯示 -->
                <div v-if="user.isLogin && !user.isAdmin">
                  <!-- 購物車 -->
                  <v-btn to="/cart" icon><v-icon>mdi-cart</v-icon>
                    <v-badge color="red" :content="user.cart" v-if="'/cart' && user.cart > 0" floating></v-badge>
                  </v-btn>

                   <!-- 使用者管理頁面 -->
                  <v-btn to="/user" icon><v-icon>mdi-account</v-icon></v-btn>
                </div>
                <!-- 管理者登入顯示 -->
                <div v-if="user.isAdmin">
                  <v-btn to="/cart" icon><v-icon>mdi-cart</v-icon>
                    <v-badge color="red" :content="user.cart" v-if="'/cart' && user.cart > 0" floating></v-badge>
                  </v-btn>
                  <!-- 訂單 -->
                  <v-btn to="/admin/orders" icon><v-icon>mdi-list-box</v-icon></v-btn>
                  <!-- 管理 -->
                  <v-btn to="/admin" icon><v-icon>mdi-cog</v-icon></v-btn>
                </div>
                <div><v-btn v-if="user.isLogin" @click="logout" icon><v-icon>mdi-account-arrow-right</v-icon></v-btn></div>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-container>
  </v-app-bar>

    <v-main class="main-content">
     <router-view></router-view>
    </v-main>
<!-- 頁尾區---------------------------------------- -->
    <v-footer class="footer" padless >
      <v-container>
        <v-row >
          <v-col cols="12" md="3" class="text-center no-padding" >
            <a href="/"><img src="../assets/logo2.png" alt="" style="width: 200px;"></a>
            <v-row justify="center" class="mt-3 mb-3">
              <v-col md="5" class="text-right  text-Chinese">鼠兔永恆居所</v-col>
              <v-col md="7" class="text-left  text-English">Eternal Haven of Pikas</v-col>
            </v-row>
            <v-icon>mdi-facebook</v-icon>
            <v-icon>mdi-twitter</v-icon>
            <v-icon>mdi-linkedin</v-icon>
            <v-icon>mdi-instagram</v-icon>
          </v-col>

          <v-col cols="12" md="9" class="text-center">
            <v-row>
              <v-col cols="6" md="2" class="no-padding ">
                <v-list class="no-background brown  item">
                  <p class="text-black">頁面連結</p>
                  <v-list-item> <router-link to="/AboutUs" class="no-text-decoration">關於我們</router-link></v-list-item>
                  <v-list-item> <router-link to="/ParkInfo" class="no-text-decoration">園區介紹</router-link></v-list-item>
                  <v-list-item> <router-link to="/Services" class="no-text-decoration">服務項目</router-link></v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="2" class="no-padding">
                <v-list class="no-background text-brown item">
                  <p class="text-black">服務項目</p>
                  <v-list-item > <router-link to="/Services" class="no-text-decoration">優惠專案</router-link></v-list-item>
                  <v-list-item> <router-link to="/Services" class="no-text-decoration">團體火化</router-link></v-list-item>
                  <v-list-item> <router-link to="/Services" class="no-text-decoration">個人火化</router-link></v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="4" class="no-padding">
                <v-list class="no-background text-brown text-left">
                  <!-- <p class="text-black">聯絡我們</p> -->
                  <v-list-item class="footer-textSize no-padding">聯絡電話:02-0000-0000</v-list-item>
                  <v-list-item class="footer-textSize no-padding">服務時間:9:00-21:00</v-list-item>
                  <v-list-item class="footer-textSize no-padding">聯絡地址: <br>243新北市泰山區貴子里致遠新村55之1號</v-list-item>
                </v-list>
              </v-col>
              <v-col cols="6" md="4" class="no-padding">
                <v-list class="no-background text-brown ">
                  <iframe
                  style="width: 100%; border: 2px solid #EEEDEB;"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7023777147806!2d121.416871876079!3d25.0441724378805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bed3dc9b59%3A0x57e6439a2db0fa2a!2zMjQz5paw5YyX5biC5rOw5bGx5Y2A6LK05a2Q6YeM6Ie06YGg5paw5p2RNTXkuYsx6Jmf5rOw5bGx6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1717729138642!5m2!1szh-TW!2stw"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </v-list>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

const { mobile } = useDisplay()
const user = useUserStore()
const createSnackbar = useSnackbar()

const drawer = ref(false)

// 左導覽列
const navItemsLeft = computed(() => {
  return [
    { to: '/AboutUs', text: '關於我們', icon: undefined, show: true },
    { to: '/ParkInfo', text: '園區介紹', icon: undefined, show: true },
    { to: '/Services', text: '服務項目', icon: undefined, show: true }
  ]
})
// 右導覽列的線上購物、聯絡我們
const navItemsRight = computed(() => {
  return [
    { to: '/ProductPage', text: '線上購物', icon: undefined, show: true },
    { to: '/ContactUs', text: '聯絡我們', icon: undefined, show: true }
    // ICON網站  https://pictogrammers.com/library/mdi/
  ]
})

//  手機版側欄 ---------------------------------------------------
const navItemsMobile = computed(() => {
  return [
    { to: '/AboutUs', text: '關於我們', icon: undefined, show: true },
    { to: '/ParkInfo', text: '園區介紹', icon: undefined, show: true },
    { to: '/Services', text: '服務項目', icon: undefined, show: true },
    { to: '/ProductPage', text: '線上購物', icon: undefined, show: true },
    { to: '/ContactUs', text: '聯絡我們', icon: undefined, show: true },
    { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !user.isLogin },
    { to: '/login', text: '登入', icon: 'mdi-account-arrow-left', show: !user.isLogin },
    { to: '/cart', text: '購物車', icon: 'mdi-cart', show: user.isLogin },
    { to: '/user', text: '個人首頁', icon: 'mdi-account', show: user.isLogin },
    { to: '/admin', text: '管理', icon: 'mdi-cog', show: user.isLogin && user.isAdmin }
  ]
})

// 登出--------------------------------
const logout = async () => {
  await user.logout()
  createSnackbar({
    text: '登出成功',
    snackbarProps: {
      color: 'green'
    }
  })
}

// <v-app-bar :class="{'transparent-navbar': isTransparent, 'white-navbar': !isTransparent}">
// navbar原本背景透明 畫面到圖片高度時背景變白色
// 引入 ref 來定義響應式變量
const isTransparent = ref(true)

// 定義處理滾動事件的函數
const handleScroll = () => {
  // 獲取當前滾動位置
  const scrollPosition = window.scrollY
  // 設置圖片的高度（根據實際情況調整）
  const imageHeight = 800
  // 如果滾動位置小於圖片高度，設置 isTransparent 為 true，否則設置為 false
  isTransparent.value = scrollPosition < imageHeight
}

// 當組件掛載時，添加滾動事件監聽器
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// 當組件卸載時，移除滾動事件監聽器
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped lang="scss">
@import '@/styles/settings'; // 導入變數文件
// 手機版側欄
.mobile{
  background: $ehp-grey;
}
.brown{

  color: $ehp-brown; // 自定義顏色
}
// 透明 navbar
.transparent-navbar {
  background-color: transparent;
  transition: background-color 0.3s;
  box-shadow: none !important;
}
// 白色 navbar
.white-navbar {
  background-color: white;
  color: black;
  transition: background-color 0.3s;
}
// 背景圖片
.v-main {
  background: url('../assets/bg.png') ;
}
// main 往上推navbar高度
.main-content {
  position: relative;
  top: -64px; /* 根據你的 navbar 高度調整 */
  background-color: white; /* 確保背景顏色與 navbar 一致 */
  min-height: 100vh ; /* 確保內容區域足夠高 */
  margin-bottom: -64px;
}
// logo
.logo v-img {
  max-width: 100%;
  height: auto;
}
// footer 設定
.footer {
  background-image: url('../assets/bg.png');
  /* background: #804f4f; */
  // background-size: cover;
  background-position: center;
  position: relative;
  color: $ehp-brown;
  padding: 0; /* 移除 padding */
  padding-top: 50px;
  padding-bottom: 30px;
}

.footer-textSize{
  font-size: 15px;
}

.item{
  font-size: 14px !important;
}

</style>
