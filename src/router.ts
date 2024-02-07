import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  extendRoutes: routes => setupLayouts(routes),
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
