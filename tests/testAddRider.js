const axios = require('axios');
const qs = require('qs');8

// let testUrl='https://www.dogsmtb.com/api/addRider?';
let testUrl='http://localhost:3000/api/addRider?';

let data = qs.stringify({
});

const riders = [
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393245&riderName=dontcare",
];

const riders21 = [
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393245&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393245&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393254&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393262&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393336&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393337&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393344&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393349&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393374&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393386&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393392&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393407&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393439&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393466&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393473&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393493&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393548&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393589&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393590&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393614&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393615&riderName=dontcare"
]

const riders50 = [
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393245&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393245&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393254&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393262&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393336&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393337&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393344&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393349&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393374&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393386&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393392&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393407&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393439&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393466&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393473&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393493&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393548&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393589&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393590&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393614&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393615&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393629&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393631&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393656&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393682&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393719&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393827&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393884&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393886&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393892&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393898&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100393932&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394036&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394108&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394183&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394245&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394315&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394339&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394340&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394365&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394369&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394446&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394449&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394542&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394543&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394551&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394552&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394554&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394683&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394692&riderName=dontcare",
  "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394694&riderName=dontcare"
];
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394698&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394703&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394721&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394920&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395039&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395076&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395143&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395146&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395195&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395204&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395205&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100398922&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100400625&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100401464&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100401473&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100401660&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100401922&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100401924&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100402501&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100402504&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100402608&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100402670&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100405917&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100405919&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100405922&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100406709&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100407680&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100407833&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100408606&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100408607&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100408615&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100412648&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100413540&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100416104&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100417093&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100418136&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100418702&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100418868&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100419203&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100419207&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100419987&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100419990&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100419997&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100421104&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100421740&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100424818&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100424821&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100424825&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100428535&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100432144&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100434674&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100437128&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100443583&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100453401&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100459714&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100460307&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100461347&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100462281&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100463117&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100463118&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100463693&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100463694&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100464191&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100464572&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100465582&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100466244&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100469362&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100469958&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100470161&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100470817&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100471069&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100471070&riderName=dontcare",
//   "riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100472150&riderName=dontcare"
// ];

console.time('loop');

var counter = 0;

riders50.forEach(rider => {
  var timer = 'counter'+counter;
  counter++;
  console.time(timer);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: testUrl+rider,
    headers: { },
    data : data
  };
//  let 
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.timeEnd(timer);
  })
  .catch((error) => {
    console.log(error);
    console.timeEnd(timer);
  });

});

console.timeEnd('loop');

