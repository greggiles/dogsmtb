export default {
    title: 'Brighton Bulldogs',
    description: 'Mountain Bike Team.',
    srcDir: './docs',
    cleanUrls: true,
    themeConfig: {
      editLink: {
        pattern: 'https://gitlab.com/redviking/agv-pd/rv-agv-documentation/-/edit/main/docs/:path',
        text: 'Edit this page on GitLab'
      },
      nav: [
        { text: 'Misca Web Site', link: 'https://miscabike.org/' },
        { text: 'FaceBook Page', link: 'https://facebook.com/brightoncyclingdogs' }
      ],
      sidebar: [
        {
          text: '2022',
          collapsed: true,
          link: '2022/',
          items: [
            { text: 'Introduction', link: '/hardware/' },
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