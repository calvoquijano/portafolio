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
window.addEventListener('scroll', function(b){
  let imagenPerfilCaja01 = document.querySelector('.perfil01');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.09;
  if(imagenPerfilCaja01 !== null){
    imagenPerfilCaja01.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
  }
});
window.addEventListener('scroll', function(c){
  let imagenPerfilCaja02 = document.querySelector('.perfil02');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * 0.03;
  if(imagenPerfilCaja02 !== null){
    imagenPerfilCaja02.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
  }
});
window.addEventListener('scroll', function(d){
  let imagenPerfilCaja03 = document.querySelector('.perfil03');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.07;
  if(imagenPerfilCaja03 !== null){
    imagenPerfilCaja03.style.transform = 'translate3d(0px,'+pantallaPosicion+'px, 0px)';
  }
});

window.addEventListener('scroll', function(b){
  let imagenPerfilCaja01 = document.querySelector('.trabajo01');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * -0.05;
  if(imagenPerfilCaja01 !== null){
    imagenPerfilCaja01.style.transform = 'translate3d('+pantallaPosicion+'px, 0px, 0px)';
  }
});
window.addEventListener('scroll', function(c){
  let imagenPerfilCaja02 = document.querySelector('.trabajo02');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * 0.03;
  let escalaPosicion = posicionImagen * 0.0015;
  if(imagenPerfilCaja02 !== null){
    imagenPerfilCaja02.style.transform = 'translate3d('+pantallaPosicion+'px, 0px, 0px) scale('+escalaPosicion+')';
  }
});
window.addEventListener('scroll', function(d){
  let imagenPerfilCaja03 = document.querySelector('.trabajo03');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicion = posicionImagen * 0.07;
  if(imagenPerfilCaja03 !== null){
    imagenPerfilCaja03.style.transform = 'translate3d('+pantallaPosicion+'px, 0px, 0px)';
  }
});



window.addEventListener('scroll', function(e){
  let imagenAni01 = document.querySelectorAll('.animacion-izq');
  let imagenAni02 = document.querySelectorAll('.animacion-der');
  let posicionImagen = window.pageYOffset;
  let pantallaPosicionIzq = posicionImagen * -0.08;
  let pantallaPosicionDer = posicionImagen * 0.08;
  if(imagenAni01 !== null || imagenAni02 !== null){
    for (let i=0; i < imagenAni01.length; i++) {
      imagenAni01[i].setAttribute('style','transform: translate3d('+pantallaPosicionIzq+'px, 0px, 0px)');
    }
    for (let i=0; i < i < imagenAni02.length; i++) {
      imagenAni02[i].setAttribute('style','transform: translate3d('+pantallaPosicionDer+'px, 0px, 0px)');
    }
  }
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