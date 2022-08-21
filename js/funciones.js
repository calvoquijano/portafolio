//Menú superior
function menuSuperior() {
  let menuSuperior = document.getElementById("menuOculto");
  if (menuSuperior.className === "ocultar__menu-mobile") {
    menuSuperior.className = "aparecer__menu-mobile";
  } else {
    menuSuperior.className = "ocultar__menu-mobile";
  }
}

//Parallax
window.addEventListener('scroll', function(a){
  let imagenPerfilMobile = document.querySelector('.miperfil-mobile');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.3;
  imagenPerfilMobile.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(b){
  let imagenPerfilCaja01 = document.querySelector('.perfil01');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.09;
  imagenPerfilCaja01.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(c){
  let imagenPerfilCaja02 = document.querySelector('.perfil02');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * 0.03;
  imagenPerfilCaja02.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(d){
  let imagenPerfilCaja03 = document.querySelector('.perfil03');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.07;
  imagenPerfilCaja03.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
});
window.addEventListener('scroll', function(e){
  let imagenPerfil = document.querySelector('.trabajo');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.08;
  imagenPerfil.style.transform = 'translate3d('+pantallaPosicion+'px, 0px, 0px)';
});

//Animación Sprite
let offsetStart = 0;
let offsetEnd = 0;
window.addEventListener('scroll', function(f){
  let imagenAnimacionSprite = document.querySelector('.spriteAnimacion');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * 100;
  imagenAnimacionSprite.style.backgroundPositionX = pantallaPosicion+'px'; 
});


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