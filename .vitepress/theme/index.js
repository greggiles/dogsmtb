import DefaultTheme from 'vitepress/theme'
import pdfLink from '../../components/pdfLink.vue'
import YouTube from 'vue3-youtube'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp(ctx){
        DefaultTheme.enhanceApp(ctx)
        ctx.app.component('pdfLink', pdfLink)
        ctx.app.component('YouTube', YouTube)
    }
}