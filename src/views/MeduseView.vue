<template>
  <v-app-bar class="meduse-header"> </v-app-bar>

  <v-container fluid class="meduse-page">
    <v-row>
      <v-col>
        <v-row></v-row>
        <v-row class="menu">
          <v-col cols="4" v-for="(item, index) in menuItems" :key="index" class="menu-list">
            <v-card>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-footer class="meduse-footer">
    <v-row>
      <v-col>
        <v-row>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col> <span class="copyright"> © 2024 jellyfish.xin </span> </v-col>
          <v-col>
            <div class="social-platform">
              <v-btn
                v-for="(item, index) in socialPlatformItems"
                :key="index"
                icon
                class="social-platform-list"
              >
                <v-avatar :image="item.logo" @click="openInNew(item.url)" />
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
const menuItems = [
  { title: 'Bouffées', subtitle: '綜合口味泡芙' },
  { title: 'Fromage', subtitle: '肉桂焦糖蘋果烤乳酪' },
  { title: 'Gâteau', subtitle: '蝶豆花水信玄餅' }
]

const socialPlatformItems = [
  {
    logo: '/plurk-logo.png',
    url: 'https://www.plurk.com/jellyfish_xin'
  },
  {
    logo: '/clibo-logo.png',
    url: 'https://clibo.tw/users/xin'
  },
  {
    logo: '/github-logo.png',
    url: 'https://github.com/jellyfish-xin'
  }
]

function openInNew(url: string) {
  window.open(url, '_blank')
}
</script>
