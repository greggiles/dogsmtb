# 2022 Bulldogs

Brighton Bulldogs win the 2022 MiSCA State Championship to 9PEAT! 

![](/2022/pics/2022Champs.jpg)

## Season Highlight Video

<YouTube src='https://www.youtube.com/watch?v=8TvUpO26eFI'/>

<a href='./photos'>2022 Team Photos</a>

## Captains

Say hello to our awesome captains.

<VPTeamMembers size="medium" :members="captains" />

## Coaches

<VPTeamMembers size="medium" :members="coaches" />

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const captains = [
  {
    avatar: '/riders/hunter-bell_2022.png',
    name: 'Hunter Bell',
    title: 'Senior',
    // org: 'Highschool Captains',
    desc: '\"Super Speedy\"',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/hunterbell_mtb/' },
    ],
    // sponsor: 'http://www.google.com'
  },
  {
    avatar: '/riders/katie_droese_2022.png',
    name: 'Katherine Droese',
    title: 'Senior',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/katie.beth05/' },
    ]
  },
  {
    avatar: '/riders/brendan-giles_2022.jpg',
    name: 'Brendan Giles',
    title: 'Junior',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/great_brendini/' },
    ]
  },
  {
    avatar: '/riders/liberty-abington_2022.png',
    name: 'Liberty Abington',
    title: 'Junior',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/abliberty/' },
    ]
  },
  {
    avatar: '/riders/jude-osterman_2022.png',
    name: 'Jude Osterman',
    title: 'Sophmore',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/jude.osterman/' },
    ]
  },
  {
    avatar: '/riders/anna-giles_2022.jpg',
    name: 'Anna Giles',
    title: '8th Grade',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/sophia-bell_2022.png',
    name: 'Sophia Bell',
    title: '8th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/olivia-babas_2022.png',
    name: 'Olivia Babas',
    title: '7th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/parker-vince_2022.png',
    name: 'Parker Vince',
    title: '7th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/olivia-pobocik_2022.png',
    name: 'Olivia Pobocik',
    title: '6th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
]
const coaches = [
  {
    avatar: '/coaches/greg-giles_2021.png',
    name: 'Greg Giles',
    title: 'Head Coach',
    links: [
      { icon: 'github', link: 'https://github.com/greggiles' },
      { icon: 'instagram', link: 'https://www.instagram.com/giles.greg/' },
      { icon: 'facebook', link: 'https://www.facebook.com/gregory.p.giles/' },
      { icon: 'twitter', link: 'https://twitter.com/the_greggiles' },
      
    ]
  },
]
</script>
