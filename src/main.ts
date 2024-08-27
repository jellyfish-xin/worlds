import '../scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Icons
// https://stackoverflow.com/questions/57053728/vuetify-icon-not-showing
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// @vueuse/head
// https://vueuse.org/add-ons.html#head-vueuse-head
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(head)

app.mount('#app')
