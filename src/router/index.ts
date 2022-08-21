import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/progress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'auth-login' }
    },
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          name: 'auth-login',
          component: () => import('@/views/auth/LoginView.vue')
        }
      ]
    },
    {
      path: '/backstage',
      name: 'backstage',
      redirect: { name: 'dashboard' },
      component: () => import('@/layout/IndexView.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/IndexView.vue'),
          meta: {
            title: 'Dashboard'
          }
        },
        {
          path: 'users',
          name: 'user',
          component: () => import('@/views/user/IndexView.vue'),
          meta: {
            title: 'User'
          }
        }
      ]
    }
  ]
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach((to) => {
  NProgress.done()

  // 设置网站 title
  document.title = to.meta.title
    ? `${to.meta.title} | ${import.meta.env.VITE_APP_NAME}`
    : import.meta.env.VITE_APP_NAME
})

export default router
