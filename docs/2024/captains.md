---
layout: page
---
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      2024 Captains
    </template>
    <template #lead>
      Our Fearless Teamleaders, always making sure we are having a great time!
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <!-- <template #title>Our Shops</template> -->
    <!-- <template #lead>...</template> -->
    <template #members>
      <VPTeamMembers size="medium" :members="captains" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>


<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const captains = [
  {
    avatar: '/riders/adam-govan_2023.png',
    name: 'Adam Govan',
    title: 'Senior',
    desc: '\"Start where you are. Use what you have. Do what you can.\" —Arthur Ashe',
    links: [
      // { icon: 'instagram', link: 'https://www.instagram.com/jude.osterman/' },
    ]
  },
  {
    avatar: '/riders/jude-osterman_2022.png',
    name: 'Jude Osterman',
    title: 'Senior',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/jude.osterman/' },
    ]
  },
  {
    avatar: '/riders/marley.png',
    name: 'Marley Simpson',
    title: 'Junior',
    links: [
      // { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/anna-giles_2022.jpg',
    name: 'Anna Giles',
    title: 'Sophomore',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/garrett.png',
    name: 'Garrett Smith',
    title: 'Sophomore',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/garrettsmith_31/' },
    ]
  },
  {
    avatar: '/riders/olivia-pobocik_2023.jpg',
    name: 'Olivia Pobocik',
    title: '8th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/olivia-pobocik_2023.jpg',
    name: 'Elias Beck',
    title: '7th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
]
</script>
