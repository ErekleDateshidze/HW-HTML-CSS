const menuitems = document.getElementById("submenu");
const hamburgermenu = document.getElementById("menubutton");
const closebutton = document.getElementById("closebtn");

hamburgermenu.addEventListener("click", () => {
  if (menuitems.style.display === "none") {
    menuitems.style.display = "flex";
  } else {
    menuitems.style.display = "none";
  }
});

// hamburgermenu.addEventListener("click", () => {
//   menuitems.style.display = "flex";
//   hamburgermenu.style.display = "none";
//   closebutton.style.display = "inline-block";
// });

// // Close menu
// closebutton.addEventListener("click", () => {
//   menuitems.style.display = "none";
//   hamburgermenu.style.display = "flex";
//   closebutton.style.display = "none";
// });
