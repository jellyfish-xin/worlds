import type { RouteRecordRaw } from 'vue-router'
import routeName from '@/router/routeName'

const omegaRoutes: Array<RouteRecordRaw> = [
  {
    path: '/omega',
    name: routeName.omega,
    component: () => import('../views/OmegaView.vue'),
    meta: {
      title: 'ω',
      description: 'ω',
      href: '/red.ico'
    }
  }
]

export default omegaRoutes
