<template>
  <v-container fluid class="home-page">
    <v-row>
      <v-col cols="12" md="8">
        <h1 class="about-title">About</h1>

        <v-icon>mdi-email-outline</v-icon>
        <p>kurage.xin@gmail.com</p>
      </v-col>
      <v-col cols="12" md="4">
        <v-row>
          <v-col
            cols="12"
            md="12"
            sm="6"
            class="social-platform"
            v-for="(item, index) in socialPlatformItems"
            :key="index"
          >
            <v-card
              class="social-platform-list"
              :prepend-avatar="item.prependAvatar"
              :title="item.title"
              :subtitle="item.subtitle"
            >
              <v-card-actions>
                <v-btn icon="mdi-open-in-new" @click="follow(item.url)" />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-footer class="home-footer">
    <span class="copyright"> © 2024 jellyfish.xin </span>
  </v-footer>
</template>

<script setup lang="ts">
const socialPlatformItems = [
  {
    prependAvatar: '/plurk-icon.png',
    title: 'Plurk',
    subtitle: '@jellyfish_xin',
    url: 'https://www.plurk.com/jellyfish_xin'
  },
  {
    prependAvatar: '/clibo-icon.png',
    title: 'Clibo',
    subtitle: '@xin',
    url: 'https://clibo.tw/users/xin'
  }
]

function follow(url: string) {
  window.open(url, '_blank')
}
</script>
