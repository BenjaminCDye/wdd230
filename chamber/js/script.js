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
