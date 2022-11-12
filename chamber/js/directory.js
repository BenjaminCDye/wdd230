
let cardselector = document.querySelector("#gridselector");
let listselector = document.querySelector("#listselector");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");


cardselector.addEventListener("click", ()=>{
    cardview.style.display='grid';
    listview.style.display='none';
    cardselector.style.opacity=1.0;
    listselector.style.opacity=0.5;
});

listselector.addEventListener("click", ()=>{
    listview.style.display='block';
    cardview.style.display='none';
    listselector.style.opacity=1.0;
    cardselector.style.opacity=0.5;
});


function displayCards(card) {
 let cardview = document.querySelector("#cardview");
 let cardelt = document.createElement("div");
 cardelt.innerHTML = `<img src="${card.imageURL}" />
 <p>${card.street} ${card.citystatezip}</p>
 <p>${card.phone}</p>
 <p><a href="${card.websiteURL}">${card.bizname}</a></p>`;
 cardview.appendChild(cardelt);
}

function displayList(card) {
    let listview = document.querySelector("#listview");
    let listelt = document.createElement("tr");
    listelt.innerHTML= `<th>${card.bizname}</th>
    <td>${card.street}</td>
    <td>${card.phone}</td>
    <td><a href="${card.websiteURL}"> ${card.bizname}</a></td>`;
    listview.appendChild(listelt);
 }

 function displaySmallList(card) {
  let smallview = document.querySelector("#listSmallLimited");
  let smallelt = document.createElement("div");
  smallelt.innerHTML = `<p>{card.bizname}</p>  
  <p>${card.street} ${card.citystatezip}</p>
  <p>${card.phone}</p>
  <p><a href="${card.websiteURL}">${card.bizname}</a></p>`;
  cardview.appendChild(smallelt);
 }




const requestURL = "./data/data.json";


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const bussinesslist = jsonObject["businesses"];
    bussinesslist.forEach(displayCards);
    bussinesslist.forEach(displayList);
  });