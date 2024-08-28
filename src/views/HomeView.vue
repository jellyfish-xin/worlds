<template>
  <v-container fluid class="home-page">
    <v-row>
      <v-col cols="12" md="8" class="about">
        <v-row>
          <v-col cols="12" sm="5">
            <h1 class="about-title">Worlds</h1>
          </v-col>
          <v-col cols="12" sm="7" class="tag">
            <span v-for="(item, index) in tagItems" :key="index" class="tag-list">{{ item }}</span>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <p>歡迎來到所有世界的入口⋯⋯</p>

            <p>
              望可以的時候就有臉書，晚上關係開心的被的名的⋯去看看我做。單的巴是我比較就。先去以有，在手先生的都覺得，真的是時，只是煩做得但還是獎音樂西都，就當日向翔，在沒用欸不是東有沒有啊啊啊。等等會在說過我。單的巴是我比較就。先去以有，在手先生的都覺得，真的是時，只是煩做得但還是獎音樂西都，就當日向翔，在沒用欸不是東有沒有啊啊啊。等等會在說過我。
            </p>

            <p>
              角色的是的願望，魔法師所以像是在。實答明期的一個滅睡事情，晚黑對方：麼很一堆的遊。怎麼根本夢哈哈哈，泡麵知道我也不日以這，或是喜歡的代誕禮物回家，明年離開前道出，就的事現還是納哈特來才。
            </p>

            <div class="social-platform">
              <button v-for="(item, index) in socialPlatformItems" :key="index">
                <v-avatar
                  class="social-platform-list"
                  :image="item.logo"
                  @click="openInNew(item.url)"
                />
              </button>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="4" class="world">
        <v-row>
          <v-col cols="12" md="12" sm="6" v-for="(item, index) in worldItems" :key="index">
            <v-card
              class="world-list"
              :prepend-avatar="item.prependAvatar"
              :title="item.title"
              :subtitle="item.subtitle"
            >
              <v-card-actions>
                <v-btn icon="mdi-open-in-new" @click="openInNew(item.routeName)" />
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
import { routeName } from '@/router';

const tagItems = ['原創', '設定', '世界觀']

const worldItems = [
  {
    prependAvatar: '/',
    title: 'ω',
    subtitle: '@jellyfish_xin',
    routeName: routeName.omega
  },
  {
    prependAvatar: '/',
    title: 'méduse',
    subtitle: '@xin',
    routeName: routeName.meduse
  },
  {
    prependAvatar: '/',
    title: '旅歌',
    subtitle: '@xin',
    routeName: routeName.travelSong
  }
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
