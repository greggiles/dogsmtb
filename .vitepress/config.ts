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
          text: '2022',
          collapsed: true,
          link: '2022/',
          items: [
            { text: 'Team Photos', link: 'https://photos.google.com/share/AF1QipMUo4qaj-KTcANDQAG2qNnt7lbGktSzn4GW-hFqVUIysga2NelIlLpC4XUulMbpcQ?key=bXVFcW9nVkRGS0NjMFlEZHhoT2xvMGozU2pPVXdn' },
            { text: 'Race 1 Photos: Mid Michigan', link: 'https://photos.google.com/share/AF1QipO2hyoOOMPcmkzKnWBS45AXjdm7Jzk102JzBlLGs-3MqbZpaXblrQyvX9yAI51HoQ?key=Z0s0ZmdzSURvQ0NlZFUxWEhoWVZXd3gtWDB1X093' },
            { text: 'Race 2 Photos: Owasippe', link: 'https://photos.google.com/share/AF1QipNLG_0K1pz2i3Nrw3dDTz09pyH94AYy-WnaSrJT0jMRHpZXtIf-eXCDOXAQAlIUCA?key=U01sdlFqSHdIek5najZTd1h1R0FlbURONTMxVVNn' },
            { text: 'Race 3 Photos: Bloomer', link: 'https://photos.google.com/share/AF1QipPdtRx13s93O9B3bqrh5szoNCyG5RytNxKBgtMTnGLQxgEZFG0jMOWDyASijq9Fvg?key=a3lmbzl4aGE3YUdkSWc5a2tvdG5WajZHME9PQ0R3' },
            { text: 'Race 4 Photos: Heritage', link: 'https://photos.google.com/share/AF1QipPR1SDvNEoOpWhhRvkVq_mlFaQ7DxH-Tv1C1wZFvP3aNre3-ES95FclklV5BuebzA?key=LUQyZzBZd0lUY1ZyZkFCUFRlUTQ3SDFfTG9MNHFB' },
            { text: 'Race 5 Photos: Merrell', link: 'https://photos.google.com/share/AF1QipMKPDgvK_C8tGop9NcyMjpeLSmoakQy_ACZuqNyLEZP-w7GVI-iiYlvJlD7eM8Udw?key=clU3VzRYdWt0MmEtM2xaTlB3blpkVWRFQlNlWGVR' },
            { text: 'Race 6 Photos: TreeFarm', link: 'https://photos.google.com/share/AF1QipPU-6QDQAhzJsrwKbYNW-QG-Il8CI--tVgEf4aqfXRhVHNOJGTpy-gGQm_wisilIw?key=QVFVbHhOcUlzbm85QWl4ampVVEc1YzljM1ZOdWJB' },
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