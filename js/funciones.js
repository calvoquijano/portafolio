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
  let imagenPerfil = document.querySelector('.miperfil-mobile');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.3;
  imagenPerfil.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(f){
  let imagenPerfil = document.querySelector('.perfil01');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.09;
  imagenPerfil.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(f){
  let imagenPerfil = document.querySelector('.perfil03');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.07;
  imagenPerfil.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(f){
  let imagenPerfil = document.querySelector('.perfil02');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * 0.03;
  imagenPerfil.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(f){
  let imagenPerfil = document.querySelector('.trabajo');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.08;
  imagenPerfil.style.transform = 'translate3d('+pantallaPosicion+'px, 0px, 0px)';
});
