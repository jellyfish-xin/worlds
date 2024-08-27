<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <h1 class="about-title">About</h1>
        <p></p>
      </v-col>
      <v-col cols="4">
        <v-row>
          <v-col cols="12" v-for="(item, index) in socialPlatformItems" :key="index">
            <v-card
              class="social-platform-list"
              :prepend-avatar="item.prependAvatar"
              :title="item.title"
              :subtitle="item.subtitle"
            >
              <v-card-actions>
                <v-btn append-icon="mdi-open-in-new" @click="follow(item.url)">Follow</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
    subtitle: '@jellyfish_xin',
    url: 'https://clibo.tw/users/xin'
  }
]

function follow(url: string) {
  window.open(url, '_blank')
}
</script>
