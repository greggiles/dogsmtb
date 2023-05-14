import {defineConfig} from "vitepress"

export default defineConfig({
  vite: {     // <=== insert this section 
    ssr: {
      noExternal: ["vuetify", "vue-barcode-reader"]
    }
  },
  title: 'Brighton Bulldogs',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css' }]
  ],
  description: 'Mountain Bike Team.',
  srcDir: './docs',
  cleanUrls: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/greggiles/dogsmtb/edit/main/docs/:path',
      text: 'Edit on GitHub'
    },
    nav: [
      { text: 'MiSCA', link: 'https://miscabike.org/' },
      { text: 'Slack', link: 'https://join.slack.com/t/brightoncyclingclub/shared_invite/zt-1sflc7k1y-lbnVM7vTVqlpGs3AbDWNXA' },
      { text: 'FaceBook', link: 'https://facebook.com/brightoncyclingdogs' },
      { text: 'Insta', link: 'https://www.instagram.com/brightoncycling/'},
      { text: 'Brighton K12', link: 'https://www.brightonk12.com/' },
      
    ],
    sidebar: [
      {
        text: 'About Us',
        link: 'about'
      },
      {
        text: 'Local Shops',
        link: 'local-shops'
      },
      {
        text: '2023',
        collapsed: false,
        link: '2023/',
        items: [
          { text: 'Overview', link: '2023/'},
          { text: 'Check In', link: '2023/checkin'},
          { text: 'Kickoff Meeting', link: '/2023/kickoff'},
          { text: 'Important Dates', link: '/2023/important_dates' },
          { text: 'Captains', link: '2023/captains'},
          { text: 'Coaches', link: '2023/coaches'},
        ]
      },
      {
        text: '2022',
        collapsed: true,
        items: [
          { text: 'Overview', link: '2022/'},
          { text: 'Captains', link: '2022/captains'},
          { text: 'Coaches', link: '2022/coaches'},
          { text: 'Photos', link: '2022/photos'},
        ]
      },
      {
        text: '2021',
        collapsed: true,
        items: [
          { text: 'Overview', link: '2021/'}
        ]
      },


    ]
  }
})
