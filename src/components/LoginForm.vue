<template>
  <form class="login-form" @submit.prevent="handleLogin">
    <input type="text" placeholder="Usuario" v-model="username" />
    <input type="password" placeholder="Contraseña" v-model="password" />
    <button type="submit">iniciar sesion
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleLogin = () => {
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
}

input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer; }
</style>