/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




  const today = new Date();
// const makes things faster and easier for memory, use whenever possible.
document.getElementById("dateDiv").textContent = today.getFullYear();
document.getElementById("lastUpdateDate").textContent = document.lastModified;