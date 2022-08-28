//Menú
let datosMenu = {
    logoDesktopURL: "images/logotipo_calvo_quijano.svg",
    logoMobileURL: "images/logo_calvo_quijano.svg",
    icoHamburguesa: "images/icos/charm_menu-hamburger.svg",
    indexURL: "index.html",
    trabajoURL: "#trabajo",
    contactoURL: "#contacto",
    linkedin: '<a class="nav-link" href="" target="_blank"><img src="images/icos/linkedin.svg" alt="LinkedIn Calvo Quijano"></a>',
    behance: '<a class="nav-link" href="https://www.behance.net/calvoquijano" target="_blank"><img src="images/icos/behance.svg" alt="Behance Calvo Quijano"></a>' 
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
                  <li class="nav-item" onclick="menuSuperior()"><a class="nav-link" href="${datosMenu.trabajoURL}">Mi Trabajo</a></li>
                  <li class="nav-item"><a class="nav-link" href="${datosMenu.contactoURL}" onclick="menuSuperior()">Contáctame</a></li>
              </ul>
          </div>
          <ul class="nav justify-content-center menu__desktop">
              <li class="nav-item"><a class="nav-link" href="${datosMenu.indexURL}">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="${datosMenu.trabajoURL}">Mi Trabajo</a></li>
              <li class="nav-item"><a class="nav-link" href="${datosMenu.contactoURL}">Contáctame</a></li>
          </ul>
      </div>
      <ul class="col-8 col-md-3 nav justify-content-end order-0 order-md-1">
          <li class="nav-item">${datosMenu.linkedin}</li>
          <li class="nav-item">${datosMenu.behance}</li>
      </ul>
  </nav>
  `
  const cintaRoja = document.querySelector('.cinta_roja h2');
  cintaRoja.innerHTML = `Diseñador UX/UI, Diseñador y Desarrollador Web Senior y Animador 2D.`

export{cambiarMenu, datosMenu, cintaRoja};

//Footer
const infoFooter = document.querySelector('footer');
infoFooter.innerHTML = `
<ul class="nav justify-content-center">
    <li class="nav-item"><a class="nav-link" href=""><span><img src="images/icos/wa.svg" alt=""></span> (+57)300 546 5840</a></li>
    <li class="nav-item"><a class="nav-link" href=""><span><img src="images/icos/mail.svg" alt=""></span> calvo@calvoquijano.com</a></li>
    <li class="nav-item"><button class="nav-link btn btn-primary botones__calvos-linea-zul" onclick="window.open('https://calvoquijano.com/descargable/CV-Andres-Quijano-2022.pdf','_blank');"><span><img src="images/icos/tabler_file-download.svg" alt=""></span> Descargar CV</button></li>
</ul>
<h6 class="text-center">Andrés “el Calvo” Quijano</h6>`
export{infoFooter};

