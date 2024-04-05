import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { vuexStore } from './vuexStore'


createApp(App).use(vuexStore).mount('#app')
