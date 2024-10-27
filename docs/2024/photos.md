---
layout: page
---
<VPTeamPageTitle>
<template #title>
    2024 Photos
</template>
<template #lead>
    Team and Race Pictures
</template>
</VPTeamPageTitle>

<a href='https://photos.app.goo.gl/NurqUCbeA4TK6cE49'><img src='/2024/team.jpg' style='border:solid'/>
</a>

<div style="text-align: center; margin-top: 20px;">
  <a href="https://photos.app.goo.gl/NurqUCbeA4TK6cE49" class="button">Team Pictures</a>
  <a href="https://photos.app.goo.gl/qXF4BqucgZ8A4qto9" class="button">Individual Pictures</a>
  <a href="https://photos.app.goo.gl/sj2EyRQonSZ7arGS9" class="button">Outtakes</a>
</div>

<style>
.button {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  color: white;
  background-color: #007BFF;
  text-decoration: none;
  border-radius: 5px;
}
.button:hover {
  background-color: #0056b3;
}
</style>

<h1>Race Pictures</h1>

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

const races = [
  { title: 'Race 1', avatar: '/2023/owasippe.png', name: 'Merrell Trail', desc: 'August 24-25, 2024',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/mPCnNTHHVYwwXPX69' }, ], },
  { title: 'Race 2', avatar: '/2023/addison.png', name: 'Addison Oaks County Park', desc: 'September 7-8, 2024',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/BDjRpvhn8mPitkzy9' }, ], },
  { title: 'Race 3', avatar: '/2023/merrell.png', name: "Owasippe Scout Reservation", desc: 'September 14-15, 2024',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/UwoE1uAULcHvzrPW8' }, ], },
  { title: 'Race 4', avatar: '/2023/heritage.png', name: 'Maybury State Recreation Area', desc: 'September 21-22, 2024',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/E5vVScMEdpeHkzLJA' }, ], },
  { title: 'Race 5', avatar: '/2023/treefarm.png', name: 'Stony Creek Metropark', desc: 'October 5-6, 2024',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/YZD5d1c2LnW3eaW8A' }, ], },
  { title: 'Race 6', avatar: '/2023/stony.png', name: 'Heritage Park - Adrian', desc: 'October 12-13, 2024',
    links: [ { icon: 'instagram', link: 'https://photos.app.goo.gl/WmLcbzc9twrf9KV38' }, ], },
]
</script>
