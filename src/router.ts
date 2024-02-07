import {
  createRouter,
  createWebHistory,
} from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
  window.$loadingBar.start()

  next()
})

router.afterEach(() => {
  window.$loadingBar.finish()
})

export default router
