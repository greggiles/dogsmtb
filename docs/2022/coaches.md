---
layout: page
---
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      2022 Coaches
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
    src="/public/2022/coaches/coaches.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/public/2022/coaches/ilra.jpg"
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
{    avatar: 'https://www.gravatar.com/avatar/718304adad737b7fd6d0b82be506f0bd?s=300',  name: 'James Abington'  },
{    avatar: 'https://www.gravatar.com/avatar/0da3428d3e06166a9c94d3b25a0ff9b9?s=300',  name: 'Jamie Adams'  },
{    avatar: 'https://www.gravatar.com/avatar/c7ff5b1e6ae6bf413b500e97277dbae2?s=300',  name: 'Brian Babas'  },
{    avatar: 'https://www.gravatar.com/avatar/53aa02a25eafece8fd046eb24cd44ede?s=300',  name: 'Melissa Babas'  },
{    avatar: 'https://www.gravatar.com/avatar/edb25fc2b76e5e75af3a08c5633019f6?s=300',  name: 'Eric Banas'  },
{    avatar: 'https://www.gravatar.com/avatar/3acc838830607f68b551b00e0107c0eb?s=300',  name: 'Collin Beck'  },
{    avatar: 'https://www.gravatar.com/avatar/2b847683c7c887ab561a2580027c9312?s=300',  name: 'Heather Beck'  },
{    avatar: 'https://www.gravatar.com/avatar/9c99d2c2320bf93f036beb29ab1e6c49?s=300',  name: 'Jerome Beck'  },
{    avatar: 'https://www.gravatar.com/avatar/fd4a1b3b0ddce5e12986d8d66a132b73?s=300',  name: 'Brenda Bell'  },
{    avatar: 'https://www.gravatar.com/avatar/3bd1a2874278eb8724e0bab151750776?s=300',  name: 'Caleb Coddington'  },
{    avatar: 'https://www.gravatar.com/avatar/bee5fb538a15e12ff812c236a3dda1c5?s=300',  name: 'Joseph Cranston'  },
{    avatar: 'https://www.gravatar.com/avatar/6f7036f66e728c190f66d1c2f2383cb0?s=300',  name: 'Allen Day'  },
{    avatar: 'https://www.gravatar.com/avatar/12eac53488a94f21a6624739d115952c?s=300',  name: 'Jill Day'  },
{    avatar: 'https://www.gravatar.com/avatar/0c236013bda2b7889a1173e45e5b7528?s=300',  name: 'Joseph Diamond'  },
{    avatar: 'https://www.gravatar.com/avatar/d5b029d86f293899af09559417ad7123?s=300',  name: 'James Droese'  },
{    avatar: 'https://www.gravatar.com/avatar/5f088e96c119fcece36eae2ef2a31c0e?s=300',  name: 'Kurt Droese'  },
{    avatar: 'https://www.gravatar.com/avatar/be82fc30e3ccbaae7fc66ebcf5cfabc8?s=300',  name: 'Aaron Frey'  },
{    avatar: 'https://www.gravatar.com/avatar/641aee9b0c58c4402b87104f15f351dc?s=300',  name: 'Jodie Giles'  },
{    avatar: 'https://www.gravatar.com/avatar/c9423813753bef100c03457c3a8a3efc?s=300',  name: 'Bryan Guldi'  },
{    avatar: 'https://www.gravatar.com/avatar/16f5531ec8869885237c9c98dc92aaec?s=300',  name: 'Adam Haberkorn'  },
{    avatar: 'https://www.gravatar.com/avatar/a358b3fa301bda67fcd7372ec983165d?s=300',  name: 'Denis Hall'  },
{    avatar: 'https://www.gravatar.com/avatar/be922b47f56c3555e9685ef383807e88?s=300',  name: 'Randall Hodder'  },
{    avatar: 'https://www.gravatar.com/avatar/5cb9d4f5e0b24d990d04d82dbe319c80?s=300',  name: 'Bill Italia'  },
{    avatar: 'https://www.gravatar.com/avatar/922fe8aa1266c38f271db87906af69db?s=300',  name: 'Will Italia'  },
{    avatar: 'https://www.gravatar.com/avatar/98881f89c6e5526f853bf4690f4459e4?s=300',  name: 'Chuck Jarrett'  },
{    avatar: 'https://www.gravatar.com/avatar/939c303f8a52e7ba4477683053672f2f?s=300',  name: 'Michelle Jarrett'  },
{    avatar: 'https://www.gravatar.com/avatar/6a8012895824b712b13bb0f12b24e57c?s=300',  name: 'Kosta Kontoyiannakis'  },
{    avatar: 'https://www.gravatar.com/avatar/a26dbcf957758837a00acca726ca80c0?s=300',  name: 'TJ Koppmann'  },
{    avatar: 'https://www.gravatar.com/avatar/a025049a42fa4efe0660518556ff0509?s=300',  name: 'Lawrence Kowalski'  },
{    avatar: 'https://www.gravatar.com/avatar/307ba3acb18a944335f842f931619dec?s=300',  name: 'Michelle Le Feve'  },
{    avatar: 'https://www.gravatar.com/avatar/44103b214d0ffd82c7bb757d884a6ffb?s=300',  name: 'Robert LeFeve'  },
{    avatar: 'https://www.gravatar.com/avatar/7f0ccd29e17d59705ec787276a9bc12a?s=300',  name: 'John Lukasik Jr'  },
{    avatar: 'https://www.gravatar.com/avatar/444ae6b5b7fb16b64f6afcaffd186118?s=300',  name: 'Andrew Mack'  },
{    avatar: 'https://www.gravatar.com/avatar/50c657daf8ac5e311d26711c54c89f06?s=300',  name: 'Jeremy Mack'  },
{    avatar: 'https://www.gravatar.com/avatar/fedca1b33079a3dd6d63438fe45f7310?s=300',  name: 'Paige Mcfall'  },
{    avatar: 'https://www.gravatar.com/avatar/88207f7ffd5ed0b9c21f74983a966d27?s=300',  name: 'Daniel McMillan'  },
{    avatar: 'https://www.gravatar.com/avatar/854c9603f68f855ec6f1d90308228813?s=300',  name: 'Jeff Milton'  },
{    avatar: 'https://www.gravatar.com/avatar/06698bc1a52c579a839b90103a3c0e80?s=300',  name: 'Daniel Molnar'  },
{    avatar: 'https://www.gravatar.com/avatar/6910342e7a356969732ec37e69e9ebf6?s=300',  name: 'Evelyn Money'  },
{    avatar: 'https://www.gravatar.com/avatar/b965761f98f0b8e88dff4548aedbb992?s=300',  name: 'Jack Money'  },
{    avatar: 'https://www.gravatar.com/avatar/912fc722b3082f42e49dba0924952a8d?s=300',  name: 'Andrea Pobocik'  },
{    avatar: 'https://www.gravatar.com/avatar/c3f1bfbfdf18e2aac35b3015f86bc1bd?s=300',  name: 'Jake Pobocik'  },
{    avatar: 'https://www.gravatar.com/avatar/8828226be32ad6e8dc7d4e16868905a7?s=300',  name: 'Jeff Poirier'  },
{    avatar: 'https://www.gravatar.com/avatar/4976761ce7d45ad42727a6afce48b434?s=300',  name: 'Adam Post'  },
{    avatar: 'https://www.gravatar.com/avatar/1f85226ffe8e8ff257cce98a794e652e?s=300',  name: 'Melanie Post'  },
{    avatar: 'https://www.gravatar.com/avatar/8c089e9bd8a30e92c30bd0f348849bba?s=300',  name: 'Kevin Riley'  },
{    avatar: 'https://www.gravatar.com/avatar/c466974c60552807bd04e4b0d78bab66?s=300',  name: 'Christopher Rochowiak'  },
{    avatar: 'https://www.gravatar.com/avatar/29835dac65eaec9df984b118f94e587d?s=300',  name: 'Andrew Showerman'  },
{    avatar: 'https://www.gravatar.com/avatar/1904c78ac06d1131973222610f2658a6?s=300',  name: 'Scott Simpson'  },
{    avatar: 'https://www.gravatar.com/avatar/88db58d6cf2fb7c83f43ced45e79b443?s=300',  name: 'Lamberto Smigliani'  },
{    avatar: 'https://www.gravatar.com/avatar/bb4c9b9f77e8ba73f53b0e02a18faf1a?s=300',  name: 'Lorelei Smith'  },
{    avatar: 'https://www.gravatar.com/avatar/2d4205e982856208f5f9702f0d823d4e?s=300',  name: 'Shawn Tyrrell'  },
{    avatar: 'https://www.gravatar.com/avatar/f74347d7475ac38a79c9e54b7b946ce6?s=300',  name: 'TJ Tyrrell'  },
{    avatar: 'https://www.gravatar.com/avatar/76c23bfbc572f58475ff08d17fe8f683?s=300',  name: 'Brandon Vince'  },
{    avatar: 'https://www.gravatar.com/avatar/5d3c0c5cb4b9dc973c720bd583eebefe?s=300',  name: 'Libby Vince'  },
{    avatar: 'https://www.gravatar.com/avatar/72ea691a59582926c081656935f49db1?s=300',  name: 'Aaron Vogt'  },
{    avatar: 'https://www.gravatar.com/avatar/d6026ce756409d583a4dcdd26dcfa572?s=300',  name: 'Irene Voss'  },
{    avatar: 'https://www.gravatar.com/avatar/7633c66762b0a5fc6bb00b1dca5687c0?s=300',  name: 'Corey Wallace'  },
{    avatar: 'https://www.gravatar.com/avatar/cbc5174fff202aab8996d33c793be987?s=300',  name: 'Belinda Wirth'  },
]
</script>