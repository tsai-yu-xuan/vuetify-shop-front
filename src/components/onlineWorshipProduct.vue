<template>
  <v-container >
    <v-row >
      <v-col >
        <div id="dropZone" class="drop-zone"></div>
      </v-col>
    </v-row>
    <v-row class="product-div">
      <v-col>
        <swiper
          :watchSlidesProgress="true"
          :modules="modules"
          :slidesPerView="3"
          class="mySwiper"
          :allowTouchMove="false"
          navigation
          navigation-next-el=".swiper-button-next"
          navigation-prev-el=".swiper-button-prev"
        >
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-1.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-10.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-11.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-12.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-2.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-3.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-4.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-5.png"></v-img>
          </swiper-slide>

          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-6.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-7.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-8.png"></v-img>
          </swiper-slide>
          <swiper-slide class="img-box">
            <v-img class="img" src="../assets/onlineWorships/onlineWorshipProduct-9.png"></v-img>
          </swiper-slide>

        </swiper>
      </v-col>
      <v-btn class="btn" @click="resetImages" >重置位置</v-btn>
    </v-row>
  </v-container>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation' // 引入導航樣式
import '../styles/settings.scss'
// import required modules
import { Navigation } from 'swiper/modules'

import { onMounted } from 'vue'

const modules = [Navigation]

onMounted(() => {
  const imgs = document.getElementsByClassName('img')
  const dropZone = document.getElementById('dropZone') // 獲取放置區域
  if (!imgs.length || !dropZone) return

  Array.from(imgs).forEach(img => {
    img.onmousedown = function (event) {
      const ballClone = img.cloneNode(true)
      document.body.append(ballClone)

      const shiftX = event.clientX - img.getBoundingClientRect().left
      const shiftY = event.clientY - img.getBoundingClientRect().top

      ballClone.style.position = 'fixed'
      ballClone.style.zIndex = 1000
      ballClone.style.width = img.style.width
      ballClone.style.height = img.style.height
      moveAt(event.pageX, event.pageY)

      function moveAt (pageX, pageY) {
        ballClone.style.left = pageX - shiftX + 'px'
        ballClone.style.top = pageY - shiftY + 'px'
      }

      function onMouseMove (event) {
        requestAnimationFrame(() => {
          moveAt(event.pageX, event.pageY)
        })
      }

      document.addEventListener('mousemove', onMouseMove)

      ballClone.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove)

        // 檢查克隆圖片是否在放置區域內
        const cloneRect = ballClone.getBoundingClientRect()
        const dropZoneRect = dropZone.getBoundingClientRect()

        if (
          cloneRect.right < dropZoneRect.left ||
          cloneRect.left > dropZoneRect.right ||
          cloneRect.bottom < dropZoneRect.top ||
          cloneRect.top > dropZoneRect.bottom
        ) {
          // 如果不在區域內，移除克隆圖片或將其返回原位
          ballClone.remove()
        } else {
          // 計算相對於放置區域的坐標
          const relativeX = cloneRect.left - dropZoneRect.left
          const relativeY = cloneRect.top - dropZoneRect.top

          // 將克隆圖片添加到放置區域內，並設置相對位置
          ballClone.style.left = `${relativeX}px`
          ballClone.style.top = `${relativeY}px`
          ballClone.style.position = 'absolute'
          ballClone.style.zIndex = 1 // 確保克隆圖片顯示在放置區域內
          dropZone.appendChild(ballClone) // 將克隆圖片添加到放置區域內
        }

        ballClone.onmouseup = null
      }
    }

    img.ondragstart = function () {
      return false
    }
  })
})

function resetImages () {
  const dropZone = document.getElementById('dropZone')
  if (dropZone) {
    dropZone.innerHTML = '' // 清空放置區域
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件
#dropZone {
  width: 100%; /* 設定放置區域的寬度 */
  height: 300px; /* 設定放置區域的高度 */
  // border: 2px solid $ehp-yellow;
  position: relative; /* 允許內部元素定位 */
  top: 40px;
}
.product-div {
  position: absolute;
  top: 71%;
  width: 100%;
  // border: 2px solid $ehp-yellow;
}
.mySwiper {
  width: 94%;
  height: 100px;
}
.swiper-wrapper{
  width: 50% !important;
}

.img-box{
  width: 110px !important;
  height: 90px;
  margin: auto;
}
.img {
  cursor: pointer;
  width: 90px !important;
  margin: auto;
  // border: 2px solid $ehp-yellow;
}
.btn{
  position: absolute;
  top: 3vw;
  left: -9vw;
}
</style>
