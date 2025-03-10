import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useHead } from '@vueuse/head'
import omegaRoute from '@/router/omegaRoute'
import meduseRoute from '@/router/meduseRoute'
import travelSongRoute from '@/router/travelSongRoute'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    description: string
    href?: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeName.home,
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Home Page',
      description: 'Welcome to the home page'
    }
  },
  ...omegaRoute,
  ...meduseRoute,
  ...travelSongRoute
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _from, next) => {
  useHead({
    title: to.meta.title || 'Default Title',
    meta: [{ name: 'description', content: to.meta.description || '' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: to.meta.href || '' }]
  })
  next()
})

import routeName from '@/router/routeName'
export { routeName }

export default router
