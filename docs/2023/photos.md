---
layout: page
---
<VPTeamPageTitle>
<template #title>
    2023 Photos
</template>
<template #lead>
    Team and Race Pictures
</template>
</VPTeamPageTitle>

<a href='https://photos.app.goo.gl/NE7x2jB36d4Kut6T7'><img src='https://lh3.googleusercontent.com/pw/ADCreHeBjBAVOkK44CxloOnBUei9TwBswa8PXn4etl1RQjnr6UZ8DuLQ3JSuRv43QaGdaxeTfYBj33wSW8V_8vpCvlIZzgPvEoSt5EFT5XbyHRrrz7tgTKNU9aDSBYFb15RJ7geHCihX-2Vhmdt4Onuu4qnS6A=w1577-h1051-s-no-gm?authuser=0' style='border:solid'/><center>Click Here for 2023 Team Pictures</center></a>

  <VPTeamPageSection>
    <!-- <template #title>Our Shops</template> -->
    <!-- <template #lead>...</template> -->
    <!-- <template #members>
        <VPTeamMembers size="medium" :members="team" />
    </template> -->
    <template #members>
      <VPTeamMembers size="medium" :members="races" />
    </template>
  </VPTeamPageSection>
<!-- </VPTeamPage> -->

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const team = [
  {
    avatar: 'https://lh3.googleusercontent.com/pw/ADCreHeBjBAVOkK44CxloOnBUei9TwBswa8PXn4etl1RQjnr6UZ8DuLQ3JSuRv43QaGdaxeTfYBj33wSW8V_8vpCvlIZzgPvEoSt5EFT5XbyHRrrz7tgTKNU9aDSBYFb15RJ7geHCihX-2Vhmdt4Onuu4qnS6A=w1577-h1051-s-no-gm?authuser=0',
    name: 'Team Photos',
    title: 'Annual Team Photos',
    // org: 'Highschool Captains',
    // desc: '\"DON\'T. GO. SLOW!!!\"',
    links: [
      { icon: 'instagram', link: 'https://photos.app.goo.gl/NE7x2jB36d4Kut6T7' },
    ],
    // sponsor: 'http://www.google.com'
  },
]

const races = [
  { title: 'Race 1', avatar: '/2023/owasippe.png', name: 'Owasippe Scout Reservation', desc: 'August 26-27, 2023',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/Psk1a95fXi7L2vbu6' }, ], },
  { title: 'Race 2', avatar: '/2023/owasippe.png', name: 'Addison Oaks County Park', desc: 'September 9-10, 2023',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/i6JtX31gJZoijjJx7' }, ], },
  { title: 'Race 3', avatar: '/2023/owasippe.png', name: "KOM Cycling Merrell Trail", desc: 'September 16-17, 2023',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/7VQRzHigdZMqkQ9aA' }, ], },
  { title: 'Race 4', avatar: '/2023/owasippe.png', name: 'Wheels In Motion Heritage Park', desc: 'September 23-24, 2023',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/Y2sdVvXWHegXcuvH7' }, ], },
  { title: 'Race 5', avatar: '/2023/owasippe.png', name: 'Hammerhead Bikes | Lakeshore Park', desc: 'October 7-8, 2023',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/xuKsZVJcbuHyzae68' }, ], },
  { title: 'Race 6', avatar: '/2023/owasippe.png', name: 'Cycletherapy | Stony Creek Metropark', desc: 'October 14-15, 2023',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/bdeofhhMUHMhqNy46' }, ], },
]
</script>
