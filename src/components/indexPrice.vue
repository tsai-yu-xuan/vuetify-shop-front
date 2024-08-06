<template>
  <v-container>
    <div><hr></div>
  </v-container>
  <!-- 3個 優惠專案 -->
  <v-container class="text-center">
    <v-row class="text-brown card-title">
      <v-col>服務項目</v-col>
    </v-row>
    <v-row class="d-flex m-auto">
      <div class="menu">
      <div>
        <v-btn class="mt-5 btn ">
          <router-link to="/ContactUs" class="menu-btn ">優惠專案</router-link>
        </v-btn>
      </div>
      <div>
        <v-btn class="mt-5 btn ">
          <router-link to="/ContactUs" class="menu-btn">個別火化</router-link>
        </v-btn>
      </div>
      <div>
        <v-btn class="mt-5 btn ">
          <router-link to="/ContactUs" class="menu-btn">團體火化</router-link>
        </v-btn>
      </div>
      <div >
        <v-btn class="mt-5 btn ">
          <router-link to="/ContactUs" class="menu-btn">紀念飾品區</router-link>
        </v-btn>
      </div>
    </div>
    </v-row>
    <v-row  class="card no-background">
      <v-col cols="12" md="4">
        <v-card class="no-background text-brown card-box">
          <v-card-item>
            <v-card-title class="padding">$000</v-card-title>
            <v-card-title class="padding">親密團體火化專案</v-card-title>
            <v-card-subtitle class="padding text-black">專案項目包含</v-card-subtitle>
            <v-card-subtitle class="padding">團體火化</v-card-subtitle>
            <v-card-subtitle class="padding">樹灑葬</v-card-subtitle>
            <v-card-subtitle class="padding">文青追思牆</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-btn class="mt-5 btn ">
              <router-link to="/" class="btn-text ">聯絡我們</router-link>
            </v-btn>
          </v-card-text>
          <v-img><img src="https://picsum.photos/300/200/?random=10"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="no-background text-brown card-box">
          <v-card-item>
            <v-card-title class="padding">$000</v-card-title>
            <v-card-title class="padding">親密團體火化專案</v-card-title>
            <v-card-subtitle class="padding text-black">專案項目包含</v-card-subtitle>
            <v-card-subtitle class="padding">團體火化</v-card-subtitle>
            <v-card-subtitle class="padding">樹灑葬</v-card-subtitle>
            <v-card-subtitle class="padding">文青追思牆</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-btn class="mt-5 btn ">
              <router-link to="/" class="btn-text ">聯絡我們</router-link>
            </v-btn>
          </v-card-text>
          <v-img><img src="https://picsum.photos/300/200/?random=10"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="no-background text-brown card-box">
          <v-card-item>
            <v-card-title class="padding">$000</v-card-title>
            <v-card-title class="padding">親密團體火化專案</v-card-title>
            <v-card-subtitle class="padding text-black">專案項目包含</v-card-subtitle>
            <v-card-subtitle class="padding">團體火化</v-card-subtitle>
            <v-card-subtitle class="padding">樹灑葬</v-card-subtitle>
            <v-card-subtitle class="padding">文青追思牆</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <v-btn class="mt-5 btn ">
              <router-link to="/" class="btn-text ">聯絡我們</router-link>
            </v-btn>
          </v-card-text>
          <v-img><img src="https://picsum.photos/300/200/?random=10"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// 引入 AOS 动画库
import AOS from 'aos'
// 引入 AOS 动画库的 CSS 文件
import 'aos/dist/aos.css'
// 初始化
AOS.init()
</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件

.card-title{
  font-size: 40px;
  padding-top: 4vw;
  padding-bottom: 0.5vw;
}

.card-box{
  font-size: 40px;
  padding-top: 4vw;
  padding-bottom: 1vw;
  border-radius: 200px 200px 0 0;
  background: $ehp-white !important;
  box-shadow: 0 0 0 0 !important;
}

.btn{
  background-color: $ehp-grey;
  padding: 0px 1vw;
  border-radius: 20px;
  margin: 0.5vw;
}

.btn-text{
  color: $ehp-white;
  text-decoration: none  !important; /* 移除底線 */
  line-height: 16px;
  font-size:15px;
  font-weight: bold;
}
.menu{
  width: 100%;
  display: flex;
  justify-content: center;
}
.menu-btn{
  color: $ehp-white;
  text-decoration: none  !important; /* 移除底線 */
  line-height: 16px;
  font-size:15px;
  font-weight: bold;
}

.card{
  margin:2vw 0 !important;
}
//卡片區做RWD
 @media (min-width: 959px) {
  .card{
  padding-bottom:5vw ;
  width:50%;
display: flex;
justify-content: center;
  }
 }

 @media (min-width: 960px) {
  .card{
  padding-bottom:3vw ;
  width:100%;
  margin: 0;
  }
 }

.padding{
  padding: 0.5vw 0;
}
</style>
