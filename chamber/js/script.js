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

const LAT = "43.826";
const LON = "-111.7897";
const APIKEY = "3e1d2572a2792931a2b0cd1b553da348";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function showWeather(obj) {

  let windSpeedobj = document.querySelector("#windSpeed");
  let currenttemp = document.querySelector("#current-temp");
  let weathericon = document.querySelector("#weathericon");
  let weatherdesc = document.querySelector("#weatherdesc");
  let windChillobj = document.querySelector("#windChill");
  const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

  let windchill = "N/A";

  if (currenttemp <= 50 && windSpeedobj > 3) {
    let chill = Math.round(
      35.74 +
        0.6215 * currenttemp -
        35.75 * Math.pow(windSpeedobj, 0.16) +
        0.4275 * currenttemp * Math.pow(windSpeedobj, 0.16)
    );
    windchillmsg.textContent = `${chill}&deg; F`;
  }

  
  windSpeedobj.textContent = obj.weather[0].wind_speed;
  windChillobj.textContent = obj.weather[0];
  currenttemp.textContent = obj.main.temp;
  
  weathericon.setAttribute("src", iconURL);
  weathericon.setAttribute("alt", obj.weather[0].description);
  weatherdesc.textContent = obj.weather[0].main;
}
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
  });
