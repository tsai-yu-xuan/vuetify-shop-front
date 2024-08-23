<template >
  <v-row class="bg">
    <v-col cols="12" sm="6" >
      <v-hover v-slot="{ isHovering, props }" open-delay="200">
        <v-card
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 16 : 2"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props"
        >
          <v-card-text
            class="font-weight-medium mt-12 text-center text-subtitle-1"
          >
            Open Delay (Mouse enter)
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="6">
      <v-hover v-slot="{ isHovering, props }" close-delay="200">
        <v-card
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 16 : 2"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props"
        >
          <v-card-text
            class="font-weight-medium mt-12 text-center text-subtitle-1"
          >
            Close Delay (Mouse leave)
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .v-card.on-hover.v-theme--dark {
    background-color: rgba(255, 255, 255, 0.8); // 十六進制顏色轉為 RGB 格式

    > .v-card__text {
      color: #000;
    }
  }
  .bg{
    background-color: #f5f5f5;
  }
</style>
