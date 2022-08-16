//Menú superior
function menuSuperior() {
  let menuSuperior = document.getElementById("menuOculto");
  if (menuSuperior.className === "ocultar__menu-mobile") {
    menuSuperior.className = "aparecer__menu-mobile";
  } else {
    menuSuperior.className = "ocultar__menu-mobile";
  }
}
