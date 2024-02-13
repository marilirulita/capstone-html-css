import data from "./data.js";

const main = document.getElementById("main");
/* array con data para crear los checks mark */
const categorias = ["blusas", "camisas", "interior", "pantalones", "sueters", "calzado", "hogar", "otro"];

const generos = ["bebes", "caballero", "dama", "nina", "nino"];

const temporada = ["primavera", "verano", "otono", "invierno"];

/* Necesito que la barra de busqueda mapee en la base de datos por las palabras clave */
/* tengo que crear una constante que guarde un array de todos los typos y generos para crear los checkbox asi como los rangos de precios */
/* crear un array con los elementos encontrados y mostrarlos en la pagina */
/* hacer un conteo del array para crear la barra de indices del fondo */
main.innerHTML += `<div class="d-flex flex-column flex-md-row">
<div class="check-box-div ml-1 mx-lg-5 mr-2 d-flex flex-md-column justify-content-between justify-content-md-start">
  <form class="categorias" action="index.html" method="post" id="categorias">
    <h4 class="border-bottom py-2 mt-2">Type</h4>
  </form>
  <form class="genero" action="index.html" method="post" id="genero">
    <h4 class="border-bottom py-2 mt-2">Genero</h4>
  </form>
  <form class="price-range" action="index.html" method="post" id="price-range">
    <h4 class="border-bottom py-2 mt-2">Price Range</h4>
  </form>
</div>

<div class="product-search border-top">
  <p class="pt-3 pl-3 font-weight-bold">130 result for ...</p>
  <div id="product-results"></div>
  <div>
    <form class="input-page d-flex align-items-baseline justify-content-center" action="index.html" method="post" id="page-count">
    </form>
  </div>
</div>
</div>`;

const categoriasInner = document.getElementById("categorias");

categorias.forEach((e) => {
  categoriasInner.innerHTML += `<div class="d-flex align-items-baseline">
  <input type="checkbox" name="${e}" value="" id="${e}" />
  <label for="${e}" class="mx-2">${e}</label>
  </div>`
});

const generoInner = document.getElementById("genero");
generos.forEach((e) => {
  generoInner.innerHTML += `<div class="d-flex align-items-baseline">
  <input type="checkbox" name="${e}" value="" id="${e}" />
  <label for="${e}" class="mx-2">${e}</label>
  </div>`
});

/* hace un search en a base de datos por los rangos de precios */
const priceRange = data.reduce((acc,item)=>{
  if(!acc.includes(item.price)){
    acc.push(item.price);
  }
  return acc;
},[]);

const priceInner = document.getElementById("price-range");
priceRange.forEach((e) => {
  priceInner.innerHTML += `<div class="d-flex align-items-baseline">
  <input type="checkbox" name="${e}" value="" id="${e}" />
  <label for="${e}" class="mx-2">${e}</label>
  </div>`
});

/* codigo para crear los resultados de busqueda */
const productResults = document.getElementById("product-results");

/* esta data se deve reemplasar por los resultados de busqueda */
data.forEach((e, i) => {
  productResults.innerHTML += `<div class="d-flex border mb-3">
  <div class="embed-responsive embed-responsive-1by1 d-lg-none">
    <img src="${e.img[0]}" alt="" class="embed-responsive-item p-1 p-md-2 p-lg-3" />
  </div>
  <img src="${e.img[0]}" alt="" class="w-25 p-1 p-md-2 p-lg-3 d-none d-lg-block" />
  <div class="p-1 p-md-2 p-lg-3 mr-lg-5">
    <h4>${e.tittle}</h4>
    <p class="d-none d-sm-block">
      ${e.notes}
    </p>
    <p class="d-sm-none">
      Our creamy mask is formulated with a combination of clay....
    </p>
    <span><b>Condicion: </b>${e.condition}</span>
    <form class="form-inline" action="index.html" method="post">
      <div class="input-group mt-3 mb-3">
        <button type="button" name="button" class="carousel-buttons buttons">
          $${e.price}
        </button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar${i}">
          <span class="btn border text-secondary font-weight-bold" data-toggle="tooltip" title="More">+</span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar${i}">
          <ul class="navbar-nav nav-top">
            <li><a href="#" class="px-2">Add to Collection</a></li>
            <li><a href="#" class="px-2">Send a Message</a></li>
            <li><a href="#" class="px-2">More Details</a></li>
          </ul>
        </div>
      </div>
    </form>
  </div>
  </div>`
})

