<template>
  <div class="login-page">
    <h1>Iniciar sesion</h1>
    <LoginForm />
  </div>
</template>

<script lang="ts" setup>
import LoginForm from '../components/LoginForm.vue';
import { useUserStore } from '../stores/userStore';

const userStore = useUserStore();
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}
</style>