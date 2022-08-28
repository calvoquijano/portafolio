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
  if(imagenAni01 !== null || imagenAni02 !== null){
    for (let i=0; i < imagenAni01.length; i++) {
      let pantallaPosicionIzq = posicionImagen * -0.02;
      imagenAni01[i].setAttribute('style','transform: translate3d('+pantallaPosicionIzq+'px, 0px, 0px)');
    }
    for (let i=0; i < i < imagenAni02.length; i++) {
      let pantallaPosicionDer = posicionImagen * 0.02;
      imagenAni02[i].setAttribute('style','transform: translate3d('+pantallaPosicionDer+'px, 0px, 0px)');
    }
  }
});


//Menú
let datosMenu = {
  logoDesktopURL: "images/logotipo_calvo_quijano.svg",
  logoMobileURL: "images/logo_calvo_quijano.svg",
  icoHamburguesa: "images/icos/charm_menu-hamburger.svg",
  indexURL: "index.html",
};
const cambiarMenu = document.querySelector('header');
cambiarMenu.innerHTML += `
<nav class="row align-items-center p-2">
    <h1 class="col-2 col-md-3 logotipo">
        <a href="index.html" title="Calvo Quijano">
            <img class="logo__desktop" src="${datosMenu.logoDesktopURL}" alt="Calvo Quijano">
            <img class="logo__mobile" src="${datosMenu.logoMobileURL}" alt="Calvo Quijano">
        </a>
    </h1>
    <div class="col-2 col-md-6 order-1 order-md-0">
        <div class="nav text-center menu__mobile">
            <a href="javascript:void(0);" onclick="menuSuperior()"><img src="${datosMenu.icoHamburguesa}" alt="Menú"></a>
            <ul id="menuOculto" class="ocultar__menu-mobile">
                <li class="nav-item"><a class="nav-link" href="${datosMenu.indexURL}" onclick="menuSuperior()">Home</a></li>
                <li class="nav-item" onclick="menuSuperior()"><a class="nav-link" href="#trabajo">Mi Trabajo</a></li>
                <li class="nav-item"><a class="nav-link" href="#contacto" onclick="menuSuperior()">Contáctame</a></li>
            </ul>
        </div>
        <ul class="nav justify-content-center menu__desktop">
            <li class="nav-item"><a class="nav-link" href="${datosMenu.indexURL}">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#trabajo">Mi Trabajo</a></li>
            <li class="nav-item"><a class="nav-link" href="#contacto">Contáctame</a></li>
        </ul>
    </div>
    <ul class="col-8 col-md-3 nav justify-content-end order-0 order-md-1">
        <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/andrés-quijano-aguirre-7682854a/" target="_blank"><img src="images/icos/linkedin.svg" alt="LinkedIn Calvo Quijano"></a></li>
        <li class="nav-item"><a class="nav-link" href="https://www.behance.net/calvoquijano" target="_blank"><img src="images/icos/behance.svg" alt="Behance Calvo Quijano"></a></li>
    </ul>
</nav>
`
const cintaRoja = document.querySelector('.cinta_roja h2');
cintaRoja.innerHTML += `Diseñador UX/UI, Diseñador y Desarrollador Web Senior y Animador 2D`



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