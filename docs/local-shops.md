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
    avatar: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/302248925_513911717400550_6151377761054330232_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nkH6TZVFEJYAX-wK4FM&_nc_ht=scontent-ord5-1.xx&oh=00_AfC1-sLIxi5ZsrNbEt1UnJN1UO4yp77TPZfGZTcltHF84Q&oe=640803EE',
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
    avatar: 'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/77143157_10157395129915485_7521258179414458368_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JEhiRIXGFsIAX-LoRiW&_nc_ht=scontent-ord5-1.xx&oh=00_AfB56yR-9bmrc8AUv3Qtp5I2JRnmYA2dcP63Rz_vM9DKnQ&oe=6429DB62',
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
    avatar: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/326725037_1625980614578541_8830375835798408606_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=txtuSLQV-mMAX8zml6d&_nc_ht=scontent-ord5-1.xx&oh=00_AfCj2qZHgKIh6iO-JC33vk5ptbHjErJRCTd7f4nQlupfDw&oe=6406B710',
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
    avatar: 'https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/305106353_480772504058131_1764829806626049120_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Zud2jyw3cQsAX_J7xOR&_nc_ht=scontent-ord5-1.xx&oh=00_AfDHL_x9YDcApUXyAWSNcW9KTBMMRi-aSdriXhVuEcGfCQ&oe=64076D0D',
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
