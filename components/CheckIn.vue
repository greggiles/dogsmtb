<script setup>
import { ref } from "vue";
import axios from "axios";
import StreamBarcodeReader from './Scanner.vue'
const loaded = ref("false");
const activity = ref([]);
const snackBar = ref();
const scanError = ref();
var riders2;


const onLoaded = () => {
  console.log("Scanner Loaded");
};

var location = {};

const setLocation = (pos) => {
  location.lat = pos.coords.latitude;
  location.log = pos.coords.longitude;
  console.log("Location: ", JSON.stringify(location));
  
} 

const getLocation = () => {
  var position = 'test';
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation(pos);
    }); 
  } else {
    console.log("geolocation not available");
  }
};

getLocation();

const getRiders = async () => {
  loaded.value = false;
  // results.value = [];
  axios
    .get("../api/getRiders")
    .then((response) => {
      response.data.data.shift();
      response.data.data.shift();
      response.data.data.shift();
      riders2 = {}
      for( var i = 0; i < response.data.data.length ;  i++) {
        riders2[response.data.data[i][0]] = response.data.data[i][1]
      }
      loaded.value = true;
      console.log('riders loaded')
      // console.log(riders2);
      // console.log(riders2['100395205']);
    })
    .catch((error) => {
      console.log(error);
    });
};

getRiders();

const addRider = async (rider) => {
  var query = 'riderName='+rider.riderName;
  query = query + '&riderId='+rider.riderId;
  query = query + '&riderLocation='+JSON.stringify(rider.location);
  query = query + '&checkinDate='+rider.checkinDate;
  console.log(query)
  axios
    .post('../api/addRider?'+query)
    .then((response) => {
      console.log('Got post response: ', response)
      let index = activity.value.findIndex(x => x.riderId === rider.riderId && x.pending === true);
      activity.value[index].pending=false;
    })
    .catch((error) => {
      console.log(error);
    });
};

const onDecode = (Id) => {
  var riderData = { };
  riderData.riderId = Id;
  if (Id in riders2) {
    let index = activity.value.findIndex(x => x.riderId === Id);
    if (index > -1) {
      console.log('rider already exists', Id, riderData);
      riderData = activity.value.unshift(activity.value.splice(index, 1)[0]);
    }
    else {
      console.log('adding rider ', Id);
      riderData.riderName = riders2[Id];
      riderData.location = location;
      const date = new Date();
      riderData.checkinDate = date.toLocaleDateString();
      riderData.pending=true
      addRider(riderData);
      activity.value.push(riderData);
    }
  }
  else {
    scanError.value = Id+' unknown';
    snackBar.value = true;
  }
};

</script>

<template>
    <v-container class="mb-0">
      <v-row align-self="center" no-gutters  style="height: auto;">
        <v-col align-self="center"> 
          <div v-if="loaded" class="text-center py-6">
            <StreamBarcodeReader class="scanner" @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
          </div>
        </v-col>
      </v-row>
      <v-col v-for="item in activity.slice().reverse()" :key="item.riderId">
        <v-card density="compact">
          <v-card-title>{{ item.riderName }}</v-card-title>
          <v-card-text class="py-0">
          <v-row align="center" no-gutters>
            <v-col
              cols="6"
            >
            {{ item.checkinDate }}
            </v-col>
            <v-col cols="6" class="text-right">
              <div v-if="item.pending" class="py-0">
                <v-progress-circular
                  indeterminate
                  :size="25"
                  :width="4"
                ></v-progress-circular>
              </div>
              <div v-else class="text-center py-0">
                <v-icon icon="mdi:mdi-check" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        </v-card>
      </v-col>
    </v-container>
    <v-snackbar
      v-model="snackBar"
      :timeout="1000"
    >
      Code Not Recognized {{ rider }}
    </v-snackbar>
  </template>

<style scoped>
a {
  color: #42b983;
}
</style>