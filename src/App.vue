<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>

    <v-speed-dial class="world-view-list" location="top center" transition="scale-transition">
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab v-bind="activatorProps" size="large" icon="$vuetify"></v-fab>
      </template>

      <v-btn
        v-for="(item, index) in worldViewItems"
        :key="index"
        :icon="item.icon"
        @click="router.push({ name: item.value })"
      >
      </v-btn>
    </v-speed-dial>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { routeName } from '@/router'

const router = useRouter()

const worldViewItems = [
  { label: '旅歌', icon: 'mdi-numeric-3-box-outline', value: routeName.travelSong },
  { label: 'méduse', icon: 'mdi-numeric-2-box-outline', value: routeName.meduse },
  { label: 'ω', icon: 'mdi-numeric-1-box-outline', value: routeName.omega },
  { label: 'Home', icon: 'mdi-numeric-1-box-outline', value: routeName.home }
]
</script>
