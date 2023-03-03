---
layout: page
---
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      2022 Captains
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
    avatar: '/riders/hunter-bell_2022.png',
    name: 'Hunter Bell',
    title: 'Senior',
    // org: 'Highschool Captains',
    desc: '\"DON\'T. GO. SLOW!!!\"',
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
    desc: '\"Just gonna send it🤙\"',
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
</script>
