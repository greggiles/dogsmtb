import DefaultTheme from 'vitepress/theme'
import pdfLink from '../../components/pdfLink.vue'
import YouTube from 'vue3-youtube'

import "vuetify/styles"
import {createVuetify} from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import './custom.css'

const vuetify = createVuetify({components, directives})

export default {
    ...DefaultTheme,
    enhanceApp(ctx){
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('pdfLink', pdfLink)
        ctx.app.component('YouTube', YouTube)
    },
    enhanceApp({app}) {
        app.use(vuetify)
  }
}