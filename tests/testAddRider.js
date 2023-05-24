const axios = require('axios');
const qs = require('qs');

let data = qs.stringify({
});

const riders = [
"riderID=1230&riderName=1230&riderLocation={}&checkinDate=5-24-2023&checkinTime=7:38",
];

const riders2 = [
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394446&riderName=Kaerigan%20Peart",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100464572&riderName=Andrew%20Stewart",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100405919&riderName=Alex%20Jarrett",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394449&riderName=Garrett%20Smith",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100471069&riderName=Noah%20ODell",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394369&riderName=?Parker%20Vince",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394365&riderName=Jack%20Frey",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100405922&riderName=Cameron%20Jarrett",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395146&riderName=Matthew%20Mcfall",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100395143&riderName=Timothy%20Coddington",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100419997&riderName=Jacob%20Le%20feve",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100453401&riderName=Travis%20Voss",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100419990&riderName=Zachary%20Molnar",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100432144&riderName=Charlie%20Baghdadchi",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100460307&riderName=Keller%20Ladd",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100413540&riderName=Kane%20Washington",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100401464&riderName=Ryan%20Mack",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100421104&riderName=Kellen%20Riley",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100421419&riderName=Ryder%20Schafka",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100473057&riderName=Denali%20Craven",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394108&riderName=Elias%20Beck",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100401660&riderName=Cru%20Simpson",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100437128&riderName=Austin%20Mcmillan",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100418136&riderName=Jack%20milton",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100470817&riderName=Matthew%20Moyer",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394552&riderName=Logan%20Galloway",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100434674&riderName=Jacob%20Franks",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100394543&riderName=Brayden%20Diamond",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100471070&riderName=Lucas%20ODell",
"riderLocation={}&checkinDate=05-24-2023&checkinTime=8:30&riderId=100472897&riderName=Ryan%20Bratt"
];

console.time('loop');

riders2.forEach(rider => {
  console.time(rider);
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://www.dogsmtb.com/api/addRider?'+rider,
    headers: { },
    data : data
  };
//  let 
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    console.timeEnd(rider);
  })
  .catch((error) => {
    console.log(error);
    console.timeEnd(rider);
  });

});

console.timeEnd('loop');

