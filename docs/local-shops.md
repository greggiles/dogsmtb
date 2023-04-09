---
layout: page
---
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Local Shops
    </template>
    <template #lead>
      The Brighton area has awesome local shops to support 
      you on your ride.
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <!-- <template #title>Our Shops</template> -->
    <!-- <template #lead>...</template> -->
    <template #members>
      <VPTeamMembers size="medium" :members="shops" />
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

const shops = [
  {
    avatar: 'shops/hammerhead.png',
    name: 'Hammerhead Bikes',
    title: 'Yeti, Niner, Revel and More',
    desc: 'Awesome local shop owned by Coach Bill',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/HammerheadBikes' },
    ],
    sponsor: 
      'https://hammerheadbikecom.wordpress.com/'
  },
  {
    avatar: 'shops/dandd.jpg',
    name: 'D&D Bikes',
    title: 'Giant Bicycles and Accesories',
    desc: 'MiSCA Sponsor shop',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/DDBicycles' },
    ],
    sponsor: 
      'https://www.ddbicyclesandhockey.com/'
  },
  {
    avatar: 'shops/hometown.jpg',
    name: 'Hometown Bicycles',
    title: 'Servicing all models of bicycles',
    desc: 'Long time Brighton Cycling Supporter',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/hometownbicyclesllc' },
    ],
    sponsor: 
      'https://myhometownbicycles.com/'
  },
  {
    avatar: 'shops/MotorCity.png',
    name: 'Motorcity Bicycle',
    title: 'Specialized Bicycles and Accesories',
    desc: 'Long time Brighton Cycling Supporter',
    links: [
      { icon: 'facebook', link: 'hhttps://www.facebook.com/MotorCityBicycleBrighton' },
    ],
    sponsor: 
      'https://www.motorcitybicycle.com/'
  },
]
</script>
