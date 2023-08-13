import './assets/main.css'
import 'animate.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Slider from './components/Slider.vue';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia  = createPinia();
pinia.use(piniaPluginPersistedstate);

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Slider',Slider);

app.use(pinia);
app.use(router)


app.mount('#app')
