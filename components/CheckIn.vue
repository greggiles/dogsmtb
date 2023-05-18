<script setup>
import { ref } from "vue";
import axios from "axios";
import StreamBarcodeReader from './Scanner.vue'
const activity = ref([]);
const snackBar = ref();
const scanError = ref();

const onLoaded = () => {
  console.log("Scanner Loaded");
};

function getLocation() {
  var position = 'Not Sure, Probably Brighton?';
  // console.log(position)
  // if (navigator.geolocation) {
  //   position = navigator.geolocation.getCurrentPosition();
  //   console.log(position)

  // }
  return position;
};

const addRider = async (rider) => {
  var query = 'riderName='+rider.riderName;
  query = query + '&riderId='+rider.riderId;
  query = query + '&riderLocation='+rider.location;
  query = query + '&checkinDate='+rider.checkinDate;
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
  if (Id in riders) {
    let index = activity.value.findIndex(x => x.riderId === Id);
    if (index > -1) {
      console.log('rider already exists', Id, riderData);
      riderData = activity.value.unshift(activity.value.splice(index, 1)[0]);
    }
    else {
      console.log('adding rider ', Id);
      riderData.location = getLocation();
      riderData.riderName = riders[Id];
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
const riders = {
  "100395205": "★Brendan Giles★",
  "100393886": "Isaiah Beach",
  "100393932": "John Lukasik",
  "100393898": "Kevin Vereecke",
  "100394703": "★Jude Osterman★",
  "100395204": "Drew Showerman",
  "100394698": "William Farmer",
  "100393466": "©John Lukasik Jr©",
  "100412648": "©Scott Simpson©",
  "100394339": "©Matthew Pruski©",
  "100393589": "©Andrew Showerman©",
  "100393337": "©Allen Day©",
  "100393349": "©Kurt Droese©",
  "100408615": "★Holden Adams★",
  "100406709": "★Adam Innes★",
  "100393884": "Jason Acree",
  "100394245": "Cullen Voss",
  "100393892": "Lucas Kissel",
  "100394183": "Liam Chaka",
  "100402670": "Nathan Butler",
  "100394721": "Sawyer Voss",
  "100394694": "Derek Dezarov",
  "100402608": "James Mauney",
  "100417093": "Spencer Monroe",
  "100394692": "Joseph Dechavez",
  "100401922": "Cayle Dolane",
  "100408607": "Alessandro Smigliani",
  "100464191": "Mitchell Cory",
  "100407680": "James Mitte",
  "100394542": "Brett Day",
  "100394554": "Carmen Vogt",
  "100416104": "Maximus Andrews",
  "100393827": "William Lutz",
  "100393615": "©Tj Tyrrell©",
  "100393548": "©Jacob Pobocik©",
  "100393262": "©Jerome Beck©",
  "100393386": "©Gregory Giles©",
  "100393439": "©Thomas Koppmann©",
  "100393629": "©Brandon Vince©",
  "100393254": "©Brian Babas©",
  "100393392": "©Denis Hall©",
  "100393614": "©Shawn Tyrrell©",
  "100393719": "★Anna Giles★",
  "100418702": "sophia Bell",
  "100394920": "Elizabeth Pruski",
  "100394315": "Olivia Babas",
  "100393682": "★Olivia Pobocik★",
  "100419203": "Jessica Le Feve",
  "100443583": "Giada Smigliani",
  "100395039": "Ainsley Lutz",
  "100395195": "★Liberty Abington★",
  "100394683": "Olivia Fribley",
  "100394340": "Cecilia Pruski",
  "100401473": "Marley Simpson",
  "100393336": "©Jill Day©",
  "100393590": "©Lorelei Smith©",
  "100418868": "©Brenda Bell©",
  "100470161": "©Will Italia©",
  "100394446": "Kaerigan Peart",
  "100464572": "Andrew Stewart",
  "100405919": "Alex Jarrett",
  "100394449": "Garrett Smith",
  "100471069": "Noah O'Dell",
  "100394369": "★Parker Vince★",
  "100394365": "Jack Frey",
  "100405922": "Cameron Jarrett",
  "100395146": "Matthew Mcfall",
  "100395143": "Timothy Coddington",
  "100419997": "Jacob Le feve",
  "100453401": "Travis Voss",
  "100419990": "Zachary Molnar",
  "100432144": "Charlie Baghdadchi",
  "100460307": "Keller Ladd",
  "100413540": "Kane Washington",
  "100401464": "Ryan Mack",
  "100421104": "Kellen Riley",
  "100394108": "Elias Beck",
  "100401660": "Cru Simpson",
  "100437128": "Austin Mcmillan",
  "100418136": "Jack milton",
  "100470817": "Matthew Moyer",
  "100394552": "Logan Galloway",
  "100434674": "Jacob Franks",
  "100394543": "Brayden Diamond",
  "100471070": "Lucas O'Dell",
  "100419207": "©Robert LeFeve©",
  "100419987": "©Daniel Molnar©",
  "100459714": "©joshua palmer©",
  "100407833": "©Jamie Adams©",
  "100421740": "©Jeff Milton©",
  "100408606": "©Lamberto Smigliani©",
  "100461347": "©Henry Dabrowski©",
  "100393344": "©Joseph Diamond©",
  "100393374": "©Aaron Frey©",
  "100405917": "©Chuck Jarrett©",
  "100393473": "©Jeremy Mack©",
  "100393656": "©Belinda Wirth©",
  "100428535": "©Kevin Riley©",
  "100393245": "©James Abington©",
  "100393631": "©Robert Vogt©",
  "100469362": "©Daniel McMillan©",
  "100400625": "©Corey Wallace©",
  "100395076": "Joshua Mcfall",
  "100462281": "Jaiden Taylor",
  "100463117": "Connor Fields",
  "100466244": "Liam West",
  "100394551": "Mason Galloway",
  "100401924": "Evan Hodder",
  "100469958": "Sawyer Govan",
  "100394036": "Beckham Haberkorn",
  "100393407": "©Randall Hodder©",
  "100393493": "©Paige Mcfall©",
  "100463118": "©Josh Fields©",
  "100424825": "Sophia Kontoyiannakis",
  "100463694": "Nolan Peterson",
  "100465582": "Grace Babas",
  "100402504": "Julien Poirier",
  "100424821": "Alex Kontoyiannakis",
  "100402501": "©Jeff Poirier©",
  "100463693": "©Nicole Peterson©",
  "100398922": "©Melissa Babas©",
  "100424818": "©Kosta Kontoyiannakis©"
  };

</script>

<template>
    <v-container class="mb-0">
      <v-row align-self="center" no-gutters  style="height: 250px;">
        <v-col align-self="center"> 
          <StreamBarcodeReader class="scanner" @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
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