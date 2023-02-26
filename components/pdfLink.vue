<script setup> 
import { defineProps } from 'vue'

const { pdfname, pdf } = defineProps(['pdfname', 'pdf'])
</script>

<template>
  <div class="pdfLink">
    <p class="mobile">
      <!-- Mobile {{ pdf }} -->
    </p>
    <p class="desktop">
      <embed width='100%' height='450' :src='pdf' type='application/pdf'>
    </p>
    <a :href="pdf" target="_blank">
      <button class="btn">Open {{ pdfname }}</button>
    </a>
  </div>
</template>
  
<style scoped>
.pdfLink {
  /* border: 3px solid #333; */
  /* margin: 1rem;
  padding: 3rem;
  border-radius: 3rem; */
}
/* .mobile {
  font-size: 1rem;
  font-weight: 400;
} */
@media (min-width:700px){
  .desktop {
      display: block;
  }
  .mobile {
    display: none;
  }
}
@media (max-width:800px){
  .desktop {
      display: none;
  }
  .mobile {
    display: block;
  }
}
.btn {
  background-color: #FF0000; /* Green */
  border: none;
  border-radius: 8px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: flex;
  margin: auto;
  font-size: 16px;

}
</style>