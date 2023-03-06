---
layout: page
---
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      2023 Coaches
    </template>
    <template #lead>
      Our Brave Coaches, bringing order to an otherwise unorderly ordeal.
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <!-- <template #title>Our Shops</template> -->
    <!-- <template #lead>...</template> -->
    <template #members>
      <VPTeamMembers size="medium" :members="coaches" />
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