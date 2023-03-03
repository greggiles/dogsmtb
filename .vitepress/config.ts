export default {
    title: 'Brighton Bulldogs',
    description: 'Mountain Bike Team.',
    srcDir: './docs',
    cleanUrls: true,
    themeConfig: {
      editLink: {
        pattern: 'https://github.com/greggiles/dogsmtb',
        text: 'Edit this page on GitHub'
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
          collapsed: true,
          link: 'about'
        },
        {
          text: '2021',
          collapsed: true,
          items: [
            { text: 'About', link: '2021/'}
          ]
        },
        {
          text: '2022',
          collapsed: true,
          items: [
            { text: 'About', link: '2022/'},
            { text: 'Photos', link: '2022/photos'},
          ]
        },
        {
          text: '2023',
          collapsed: false,
          link: '2023/',
          items: [
            { text: 'Important Dates', link: '/2023/important_dates' },
            { text: 'Kickoff Meeting', link: '/2023/kickoff'},
          ]
        },


      ]
    }
  }