const menuitems = document.getElementById("submenu");
const hamburgermenu = document.getElementById("menubutton");

hamburgermenu.addEventListener("click", () => {
  if (menuitems.style.display === "none") {
    menuitems.style.display = "flex";
  } else {
    menuitems.style.display = "none";
  }
});

const cartitems = document.getElementById("subcart");
const cartbtn = document.getElementById("cartbutton");

cartbtn.addEventListener("click", () => {
  if (cartitems.style.display === "none") {
    cartitems.style.display = "flex";
  } else {
    cartitems.style.display = "none";
  }
});
