<template>
  <select-component
    :items="apiData"
    @selected="handleSelection"
  ></select-component>
</template>

<script>
import SelectComponent from './selectRider.vue';

export default {
  components: {
    SelectComponent
  },
  data() {
    return {
      apiData: [{"id":"100393898","name":"Kevin Vereecke"},{"id":"100394703","name":"★Jude Osterman★"},{"id":"100395204","name":"Drew Showerman"},{"id":"100393898","name":"Kevin Vereecke"},{"id":"100394703","name":"★Jude Osterman★"},{"id":"100395204","name":"Drew Showerman"}]
    };
  },
  methods: {
    handleSelection(id) {
      console.log('Selected IDs:', id);
    }
  }
};
</script>