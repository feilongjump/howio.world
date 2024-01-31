import { createApp } from 'vue'
import {
  createRouter,
  createWebHistory,
  setupDataFetchingGuard,
} from 'vue-router/auto'

import App from './App.vue'
import './styles/main.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
})
setupDataFetchingGuard(router)

createApp(App)
  .use(router)
  .mount('#app')
