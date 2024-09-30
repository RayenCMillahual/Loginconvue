import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '../App.vue'; // Asegúrate de tener este archivo

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
