//Menú superior
function menuSuperior() {
  let menuSuperior = document.getElementById("menuOculto");
  if (menuSuperior.className === "ocultar__menu-mobile") {
    menuSuperior.className = "aparecer__menu-mobile";
  } else {
    menuSuperior.className = "ocultar__menu-mobile";
  }
}
//Scroll
// window.addEventListener('scroll', () =>{
//   let imagenPerfil = document.querySelector('.miperfil');
//   let posicionImagen = imagenPerfil.getBoundingClientRect().top;
//   let pantallaPosicion = window.innerHeight;
//   if (posicionImagen < pantallaPosicion){
//     imagenPerfil.classList.add('aparecer');
//   }
//   else if (posicionImagen > pantallaPosicion){
//     imagenPerfil.classList.remove('aparecer');
//   }
// })

//Parallax
window.addEventListener('scroll', function(e){
  let imagenPerfil = document.querySelector('.miperfil');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * 0.5;
  // imagenPerfil.style.background = '#000'
  // console.log(imagenPerfil.style)
  imagenPerfil.style.transform = 'translate3d('+pantallaPosicion+'px, 0px, 0px)';
});