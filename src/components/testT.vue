<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="600"
        v-bind="props"
      >
        <v-img
          :aspect-ratio="16/9"
          :src="image"
          cover
        >
          <v-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
              style="height: 100%;"
            >
            ${{ price }}
            </div>
          </v-expand-transition>
        </v-img>

        <v-card-text class="pt-6">
          <div class="font-weight-light text-grey text-h6 mb-2">
            For the perfect meal
          </div>

          <h3 class="text-h4 font-weight-light text-orange mb-2">
            <router-link class="card-title" :to="'/products/' + _id" >{{ name }}</router-link>
          </h3>

          <div class="font-weight-light text-h6 mb-2">
            {{ description }}
          </div>

        </v-card-text>
        <v-card-actions class="btn">ㄋ
      <v-btn prepend-icon="mdi-cart" @click="addCart" :loading="loading">加入購物車</v-btn>
    </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
   .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
  }
</style>
