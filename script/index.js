const today = new Date();
// const makes things faster and easier for memory, use whenever possible.
document.querySelector("footer div span").textContent = today.getFullYear();
// document.getElementById("lastUpdateDate").textContent = document.lastModified;
const lastModified = new Date(document.lastModified);
document.getElementById(
  "lastUpdateDate"
).textContent = `${lastModified.getDate()}/${
  lastModified.getMonth() + 1
}/${lastModified.getFullYear()}`;
