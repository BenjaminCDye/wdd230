const requestURL = "temple.json";


let cardview = document.querySelector("#cardview");

function displayCards(card) {
    let cardview = document.querySelector("#cardview");
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `<img src="${card.imageURL}" alt="temple picture of ${card.templename}" class="center"/>
    <h3>${card.templename}</h3>
    <p>Dedicated on ${card.dedication}</p>
    <p>${card.address}</p>
    <p>${card.phone}</p>
    <p><a href="${card.websiteURL}" class="call2action" >Visit the Website</a></p>
    <p>Services: ${card.services}</p>
    <p>Schedule: ${card.ordinance}</p>
    <p>Closures: ${card.closure}</p>`;
    cardview.appendChild(cardelt);
   }




fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const templelist = jsonObject["temples"];
    templelist.forEach(displayCards);

  });