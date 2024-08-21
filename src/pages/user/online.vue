<template>
  <v-container >
    <div class="image-container">
    <img class="img1-4" src="../../assets/banner-1/banner-1-4.png" alt="Image">
</div>
  </v-container>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "@/styles/settings"; // 導入變數文件
.image-container {
    position: relative; /* 設置任務容器為 relative，作為圖片定位的參考點 */
    width: 100%;
    height: 400px;      /* 設置容器高度，可根據需求調整 */
    overflow: hidden;   /* 隱藏超出容器範圍的部分 */
}

.img1-4 {
    position: absolute;    /* 使圖片相對於容器進行絕對定位 */
    top: 50%;              /* 定位到容,使圖片在容器的垂直中間 */
    left: 50%;             /* 定位到容器的水平中間 */
    transform: translate(-50%, -50%); /* 使圖片中心對齊容器中心 */
    width: auto;           /* 保持圖片原比例 */
    height: auto;          /* 根據圖片寬度自動調整高度 */
    min-width: 100%;       /* 確保圖片不會小於容器寬度 */
    min-height: 100%;      /* 確保圖片不會小於容器高度 */
    object-fit: cover;     /* 保持圖片比例並裁切多餘部分 */
}

</style>
