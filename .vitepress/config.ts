export default {
    title: 'Brighton Bulldogs',
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
            { text: 'Important Dates', link: '/2023/important_dates' },
            { text: 'Captains', link: '2023/captains'},
            { text: 'Coaches', link: '2023/coaches'},
            { text: 'Kickoff Meeting', link: '/2023/kickoff'},
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
  }