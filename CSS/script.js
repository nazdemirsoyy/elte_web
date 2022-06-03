//Time
var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + " " + time;

document.getElementById("displayDateTime").innerHTML =
  dateTime + " <br> Day : " + daylist[day];

//auto-refresh
let counter = 1;
setInterval(() => {
  document.querySelector("h6").innerText = Date;
  counter++;
  if (counter > 60) location.reload();
}, 1000);
