---
layout: page
---
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      2024 Coaches
    </template>
    <template #lead>
      Our Brave Coaches, bringing order to an otherwise unorderly ordeal.
    </template>
  </VPTeamPageTitle>

<v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows="hover"
    >
  <v-carousel-item
    src="/2024/coaches.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/2024/23coaches2.PNG"
    cover
  ></v-carousel-item>

</v-carousel>


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