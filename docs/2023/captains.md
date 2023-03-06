---
layout: page
---
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      2023 Captains
    </template>
    <template #lead>
      Our Fearless Teamleaders who brought home the ninth consecutive state championship!
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
    avatar: '/riders/brendan-giles_2022.jpg',
    name: 'Brendan Giles',
    desc: '\"Just gonna send it🤙\"',
    title: 'Senior',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/great_brendini/' },
    ]
  },
  {
    avatar: '/riders/liberty-abington_2022.png',
    name: 'Liberty Abington',
    title: 'Senior',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/abliberty/' },
    ]
  },
  {
    avatar: '/riders/holden-adams_2023.png',
    name: 'Holden Adams',
    title: 'Senior',
    links: [
      // { icon: 'instagram', link: 'https://www.instagram.com/abliberty/' },
    ]
  },
  {
    avatar: '/riders/adam-govan_2023.png',
    name: 'Adam Govan',
    title: 'Junior',
    links: [
      // { icon: 'instagram', link: 'https://www.instagram.com/jude.osterman/' },
    ]
  },
  {
    avatar: '/riders/jude-osterman_2022.png',
    name: 'Jude Osterman',
    title: 'Junior',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/jude.osterman/' },
    ]
  },
  {
    avatar: '/riders/max-andrews_2023.jpg',
    name: 'Max Andrews',
    title: 'Sophomore',
    links: [
      // { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/anna-giles_2022.jpg',
    name: 'Anna Giles',
    title: 'Freshman',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/olivia-babas_2022.png',
    name: 'Olivia Babas',
    title: '8th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/parker-vince_2022.png',
    name: 'Parker Vince',
    title: '8th Grade',
    desc: '\"Make everything a jump!!!\"',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
  {
    avatar: '/riders/olivia-pobocik_2023.jpg',
    name: 'Olivia Pobocik',
    title: '7th Grade',
    links: [
    //   { icon: 'instagram', link: 'https://www.instagram.com/ferdagirl09/' },
    ]
  },
]
</script>
