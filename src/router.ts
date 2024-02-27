import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  extendRoutes: routes => setupLayouts(routes),
  history: createWebHistory(),
})

router.beforeEach((to) => {
  window.$loadingBar.start()

  if (to.meta.requiresAuth) {
    const user = useStorage('user', null)

    if (user.value === null && to.name !== 'sign-in') {
      window.$message.error('请先登录账号！')
      router.push({ name: 'sign-in' })
    }
  }
})

router.afterEach(() => {
  window.$loadingBar.finish()
})

export default router
