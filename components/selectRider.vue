<template>
  <v-container class="py-1">
    <v-row align-self="center" no-gutters style="height: auto;">
      <v-select
        v-model="selectedIds"
        :items="items"
        closable-chips
        chips
        multiple
        label="Select Riders"
      ></v-select>
    </v-row>
    <v-row align-self="center" no-gutters justify="space-between" style="height: auto;">
      <v-btn color="red" @click="cancel">Cancel</v-btn>
      <v-btn color="green" @click="submit">Submit</v-btn>
    </v-row>
  </v-container>
  <v-snackbar
    v-model="selectErrorState"
    :timeout="1000"
  >
    {{ selectErrorText }}
  </v-snackbar>
</template>
  
<script>
import { ref } from 'vue';
const selectErrorState = ref(false);
const selectErrorText = ref("");


export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(props, context) {
    const selectedIds = ref([]);
    const submit = () => {
      if(selectedIds.value.length > 0) {
        context.emit('selected', selectedIds.value);
        selectedIds.value = [];
      } else {
        selectErrorText.value = 'Please Select Rider';
        selectErrorState.value = true;
      }
    };
    const cancel = () => {
      console.log(selectedIds.value);
      selectedIds.value = [];
    };
    return { selectedIds, submit, cancel, selectErrorState, selectErrorText };
  }
};
</script>

<style scoped>
</style>