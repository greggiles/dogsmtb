<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h2>Select a Rider</h2>
      <v-select 
      :items="ridersArray"
      item-text="name"
      item-value="key"
      label="Select a Rider"> </v-select>
      <button @click="checkIn">Check In</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "RiderModal",
  props: {
    riders: {
      type: Object,
      required: true,
    },
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selectedRider: null,
    };
  },
  computed: {
    ridersArray() {
      return Object.entries(this.riders).map(([key, name]) => ({ key, name }));
    },
  },
  methods: {
    checkIn() {
      if (this.selectedRider !== null) {
        this.$emit("decode", this.selectedRider);
      }
      this.$emit("closeModal");
    },
    cancel() {
      console.log(this.ridersArray);
      this.$emit("closeModal");
    },
  },
};
</script>
  
  <style scoped>
.modal {
  /* Add your modal styles here */
}
.modal-content {
  /* Add your modal content styles here */
}
</style>