<template>
  <div class="home-view">
    <h1>Welcome, {{ user.username }}!</h1>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/userStore'

// Obtenemos los datos del usuario desde el store de Pinia
const userStore = useUserStore()
const user = userStore.user
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
