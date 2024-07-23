<template>
  <v-card>
    <v-img :src="image" cover height="200"></v-img>
    <v-card-title>
      <router-link :to="'/products/' + _id">{{ name }}</router-link>
    </v-card-title>
    <v-card-subtitle>${{ price }}</v-card-subtitle>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" prepend-icon="mdi-cart" @click="addCart" :loading="loading">加入購物車</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { ref } from 'vue'

const user = useUserStore()
const router = useRouter()
const createSnackbar = useSnackbar()

const props = defineProps(['_id', 'category', 'description', 'image', 'name', 'price', 'sell'])

const loading = ref(false)

const addCart = async () => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  loading.value = true
  const result = await user.addCart(props._id, 1)
  createSnackbar({
    text: result.text,
    snackbarProps: {
      color: result.color
    }
  })
  loading.value = false
}
</script>
