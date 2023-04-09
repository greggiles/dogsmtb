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
    enhanceApp({app}) {
        // DefaultTheme.enhanceApp(ctx)
        app.use(vuetify)
        app.component('YouTube', YouTube)
        app.component('pdfLink', pdfLink)

  }
}