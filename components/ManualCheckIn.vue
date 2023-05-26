<script>
export default {
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
      console.log(this.riderArray);
      this.$emit("closeModal");
    }
  }
};

</script>

<template>
  <div v-if="showModal" class="modal" style="width: 80%" >
    <div class="modal-content">
      <v-container class="py-0">
        <v-row align-self="center" no-gutters style="height: auto;">
          <v-select
            :items="riderArray"
            name="rider"
            label="Select a Rider"
            v-model="selectedRider"
            item-text="name"
            item-value="id"
          ></v-select>
        </v-row>
        <v-row align-self="center" no-gutters style="height: auto;" justify="space-between">
          <v-btn @click="cancel">Cancel</v-btn>
          <v-btn @click="checkIn">Check In</v-btn>
        </v-row>
      </v-container>
    </div>
  </div>
</template>



<style scoped>
.modal {
  /* Add your modal styles here */
}
.modal-content {
  /* Add your modal content styles here */
}
</style>