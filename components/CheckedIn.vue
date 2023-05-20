<script setup>
import { ref } from "vue";
import axios from "axios";

const headers = ref("");
var checkins = [];
const results = ref("");
const filter = ref("today");
const loading = ref("true");
const date = new Date();
const today = date.toLocaleDateString();

const updateResults = () => {
  loading.value = false;
  if (filter.value === "today")
    results.value = checkins.filter(([checkin]) => checkin === today);
  else results.value = checkins;
};

const getCheckedIn = async () => {
  loading.value = true;
  results.value = [];
  axios
    .get("../api/getCheckedIn")
    .then((response) => {
      headers.value = response.data.data.shift();
      checkins = response.data.data;
      updateResults();
    })
    .catch((error) => {
      console.log(error);
    });
};

function changeDayFilter() {
  updateResults();
}

getCheckedIn();
</script>

<template>
  <div class="d-flex justify-space-between mb-6">
    <v-btn-toggle
      @click="changeDayFilter()"
      v-model="filter"
      tile
      color="deep-purple accent-3"
      group
    >
      <v-btn value="today"> Today Only </v-btn>
      <v-btn value="season"> Season </v-btn>
    </v-btn-toggle>

    <v-btn @click="getCheckedIn()" tile color="deep-purple accent-3">
      Refresh
    </v-btn>
  </div>
  <div v-if="loading" class="text-center py-6">
    <v-progress-circular
      indeterminate
      :size="68"
      :width="8"
    ></v-progress-circular>
  </div>

  <v-col v-for="item in results" :key="item[0]">
    <v-card density="compact">
      <v-card-title>{{ item[2] }}</v-card-title>
      <v-card-text>{{ item[0] }} - {{ item[3] }} </v-card-text>
    </v-card>
  </v-col>
</template>

