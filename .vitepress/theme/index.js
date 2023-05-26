import DefaultTheme from 'vitepress/theme'
import pdfLink from '../../components/pdfLink.vue'
import CheckIn from '../../components/CheckIn.vue'
import CheckedIn from '../../components/CheckedIn.vue'
import CheckInTest from '../../components/testSelectRider.vue'
import YouTube from 'vue3-youtube'

import "vuetify/styles"
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'

import './custom.css'

const vuetify = createVuetify({components, directives, icons: {
  defaultSet: 'fa',
  aliases,
  sets: {
    fa,
    mdi,
  },

}})

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        // DefaultTheme.enhanceApp(ctx)
        app.use(vuetify)
        
        app.component('YouTube', YouTube)
        app.component('pdfLink', pdfLink)
        app.component('CheckIn', CheckIn)
        app.component('CheckedIn', CheckedIn)
        app.component('CheckInTest', CheckInTest)
  }
}