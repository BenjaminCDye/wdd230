const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

function openNav() {
  document.getElementById("hamburgerIcon");
}

const today = new Date();
// const makes things faster and easier for memory, use whenever possible.
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastUpdateDate").textContent = document.lastModified;
// const lastModified = new Date(document.lastModified);
// document.getElementById(
//   "lastUpdateDate"
// ).textContent = `${lastModified.getDate()}/${
//   lastModified.getMonth() + 1
// }/${lastModified.getFullYear()}`;

const dealDay = new Date();
if (today.getDay() == 1 || today.getDay() == 2) {
  const pthing = document.getElementById("specialDeal");
  pthing.style.display = "block";
  pthing.style.fontSize = "20pt";
}


function setwindchill(temp,windspeed){

  let windSpeedobj = document.querySelector("#windSpeed");
  let tempobj = document.querySelector("#temperature");
  let windChillobj = document.querySelector("#windChill");

  let windchill = "N/A";

   if (temp <= 50 && windSpeed > 3) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    windchillmsg = `$(chill)&deg; F`;
   }

  tempobj.textContent = temp;
  windSpeedobj.textContent = windspeed;
  windChillobj.innerHTML = windchillmsg;
}
