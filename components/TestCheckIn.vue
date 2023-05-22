<template>
  <div v-if="showModal" class="modal" style="width: 80%" >
    <div class="modal-content">
      <h2>Select a Rider</h2>
      <div> 
        <v-select
            :items="riderArray"
            v-model="selectedRider"
            label="Select a Rider"
            ></v-select>
      </div>
      <v-btn @click="cancel">Cancel</v-btn>
      <v-btn @click="checkIn">Check In</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "RiderModal",
  props: {
    riderArray: {
      type: Array,
      required: true
    },
    showModal: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      selectedRider: null
    };
  },
  methods: {
    checkIn() {
      if (this.selectedRider !== null) {
        this.$emit("selected", this.selectedRider);
      }
      this.$emit("closeModal");
    },
    cancel() {
      this.$emit("closeModal");
    }
  }
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