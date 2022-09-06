import type { RouteRecordRaw } from 'vue-router'
import IEpPieChart from '~icons/ep/pie-chart'
import IEpUser from '~icons/ep/user'

const backstageRoute: Array<RouteRecordRaw> = [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/IndexView.vue'),
    meta: {
      title: 'Dashboard',
      icon: IEpPieChart
    }
  },
  {
    path: 'users',
    redirect: { name: 'user' },
    children: [
      {
        path: '',
        name: 'user',
        component: () => import('@/views/user/IndexView.vue'),
        meta: {
          title: 'User',
          icon: IEpUser
        }
      },
      {
        path: 'create',
        name: 'user.create',
        component: () => import('@/views/user/CreateView.vue'),
        meta: {
          title: 'User',
          description: 'Create',
          hidden: true,
          activeMenu: '/backstage/users'
        }
      }
    ]
  }
]

export default backstageRoute
