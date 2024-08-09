<template>
  <v-app>
    <v-app-bar elevation="0"></v-app-bar>

    <v-main>
      <RouterView />

      <v-speed-dial class="speed-dial" location="top center" transition="scale-transition">
        <template v-slot:activator="{ props: activatorProps }">
          <v-fab v-bind="activatorProps" size="large" icon="$vuetify"></v-fab>
        </template>

        <v-btn key="1" icon="mdi-success" @click="router.push({ name: routeName.omega })">
          ω
        </v-btn>
        <v-btn key="2" icon="mdi-plus" @click="router.push({ name: routeName.meduse })">
          méduse
        </v-btn>
        <v-btn key="3" icon="mdi-warning" @click="router.push({ name: routeName.travelSong })">
          旅歌
        </v-btn>
      </v-speed-dial>
    </v-main>

    <v-footer>2024</v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { routeName } from '@/router'

const router = useRouter()
</script>

<style lang="scss">
.speed-dial {
  position: fixed;
  bottom: 40;
  right: 40;
}
</style>
