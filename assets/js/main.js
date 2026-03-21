let openMenu = document.getElementById("open");
let responsiveMenu = document.getElementById("responsive-menu");
function hover() {
  openMenu.classList.remove("hidden");
}
function hideNav() {
  openMenu.classList.add("hidden");
}
function showMenu() {
  responsiveMenu.classList.replace("hidden", "flex");
}
function hideMenu() {
  responsiveMenu.classList.replace("flex", "hidden");
}
