import type { RouteRecordRaw } from 'vue-router'
import routeName from '@/router/routeName'

const meduseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/meduse',
    name: routeName.meduse,
    component: () => import('../views/MeduseView.vue'),
    meta: {
      title: 'méduse',
      description: 'méduse',
      href: '/yellow.ico'
    }
  }
]

export default meduseRoutes
