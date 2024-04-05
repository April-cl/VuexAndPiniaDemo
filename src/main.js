import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { vuexStore } from './vuexStore'
import { createPinia } from 'pinia'

const pinia = createPinia()


createApp(App).use(vuexStore).use(pinia).mount('#app')
