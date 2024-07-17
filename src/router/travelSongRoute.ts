import type { RouteRecordRaw } from 'vue-router'
import routeName from '@/router/routeName'

const travelSongRoutes: Array<RouteRecordRaw> = [
  {
    path: '/travelSong',
    name: routeName.travelSong,
    component: () => import('../views/TravelSongView.vue'),
    meta: {
      title: '旅歌',
      description: '旅歌',
      href: '/worlds/public/red.ico'
    }
  }
]

export default travelSongRoutes
