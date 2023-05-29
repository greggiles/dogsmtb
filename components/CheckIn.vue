<script setup>
import { ref } from "vue";
import axios from "axios";
import StreamBarcodeReader from './Scanner.vue'
import RiderSelection from './selectRider.vue'
// import RiderModal from './ManualCheckIn.vue'
const loaded = ref("false");
const activity = ref([]);
const snackBar = ref();
const snackError = ref();
const showScanner = ref(false);
var riderArray = [];

const onLoaded = () => {
  console.log("Scanner Loaded");
};
const openScanner = () => {
  showScanner.value=true;
};
const closeScanner = () => {
  showScanner.value=false;
};

var location = {};

const setLocation = (pos) => {
  location.lat = pos.coords.latitude;
  location.long = pos.coords.longitude;
} 

const getLocation = () => {
  var position = 'test';
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      location.lat = pos.coords.latitude;
      location.long = pos.coords.longitude;
      // setLocation(pos);
    }); 
  } else {
    console.log("geolocation not available");
  }
};

getLocation();

const getRiders = async () => {
  loaded.value = false;
  axios
    .get("../api/getRiders")
    .then((response) => {
      riderArray = [];
      var lastgroup = ''
      response.data.forEach((rider) => {
        if (rider.group != lastgroup) {
          if (riderArray.length > 0) {
            const divider = { divider: true };
            const header = { header: rider.group };
            // const header = { "divider": true };
            // header.disabled = true;
            // riderArray.push(divider);
            // riderArray.push(header);
          }
          lastgroup = rider.group; 
        }
        const riderobj = { "title": rider.group + ": " + rider.name , "value": rider.id };
        riderobj.disabled=false;
        riderArray.push(riderobj);
      })

      loaded.value = true;
      console.log(riderArray);
    })
    .catch((error) => {
      console.log(error);
    });
};

getRiders();

const addRider = async (riders) => {
  var ts = new Date();
  var query = '&riderIds='+riders;
  query = query + '&location='+JSON.stringify(location);
  query = query + '&ts='+ts;
  console.log(query)
  axios
    .post('../api/addRiders?'+query)
    .then((response) => {
      console.log('Got post response: ', response)
      let index = activity.value.findIndex(x => x.riderId === rider.riderId && x.pending === true);
      activity.value[index].pending=false;
    })
    .catch((error) => {
      console.log(error);
    });
};

const addRiders = async (riders) => {
  console.log(riders);
  var ts = new Date();
  var query = '&ids='+riders;
  query = query + '&location='+JSON.stringify(location);
  query = query + '&ts='+ts;
  console.log(query)
  riders.forEach((rider) => {
    let riderIdx = riderArray.findIndex(x => x.value === rider );
    var actDetail = {};
    actDetail.id = rider;
    actDetail.name = riderArray[riderIdx].title;
    actDetail.state = 'pending';
    actDetail.ts = ts.toLocaleString();
    activity.value.push(actDetail);
  });
  axios
    .post('../api/addRiders?'+query)
    .then((response) => {
      console.log('Got post response: ', response)
      riders.forEach((rider) => {
        let index = activity.value.findIndex(x => x.id === rider && x.state === 'pending');
        activity.value[index].state='success';
      });
    })
    .catch((error) => {
      console.log(error);
      snackError.value = error;
      snackBar.value = true;
      riders.forEach((rider) => {
        let index = activity.value.findIndex(x => x.id === rider && x.state === 'pending');
        activity.value[index].state='error';
      });
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
      riderData.checkinTime = date.toLocaleTimeString();
      riderData.pending=true
      addRider(riderData);
      activity.value.push(riderData);
    }
  }
  else {
    snackError.value = Id+' unknown';
    snackBar.value = true;
  }
};

</script>

<template>
    <v-container class="py-2">
      <v-row align-self="center" class="my-3" no-gutters style="height: auto;">
        <v-col align-self="center"> 
          <div v-if="loaded" class="text-center">
            <v-row align-self="center" no-gutters style="height: auto;" justify="space-between">
              <v-btn @click="openModal">Scan CheckIn</v-btn>
              <v-btn href="./checkedin">CheckIn List</v-btn>
            </v-row>
            <v-row align-self="center" class="py-2" no-gutters justify="space-between">
              <RiderSelection :items="riderArray" @selected="addRiders" @closeModal="closeModal" />
            </v-row>
            <!-- <v-row align-self="center" no-gutters justify="space-between">
              <StreamBarcodeReader class="scanner" @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
            </v-row> -->
          </div>
          <div v-else>
            <div class="loader">Loading...</div> <!-- A loading indicator -->
          </div>
        </v-col>
      </v-row>
      <v-col v-for="item in activity.slice().reverse()" :key="item.riderId">
        <v-card density="compact">
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-text class="py-0">
          <v-row align="center" no-gutters>
            <v-col
              cols="10"
            >
            {{ item.ts }}
            </v-col>
            <v-col cols="2" class="text-right">
              <div v-if="item.state === 'pending'" class="py-0">
                <v-progress-circular
                  indeterminate
                  :size="25"
                  :width="4"
                ></v-progress-circular>
              </div>
              <div v-else-if="item.state === 'success'" class="text-center py-0">
                <v-icon icon="mdi:mdi-check" />
              </div>
              <div v-else class="text-center py-0">
                <v-icon icon="mdi:mdi-alert" />
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        </v-card>
      </v-col>
    </v-container>
    <v-snackbar
      v-model="snackBar"
      :timeout="3000"
    >
      {{ snackError }}
    </v-snackbar>
  </template>

<style scoped>
a {
  color: #42b983;
}


.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>