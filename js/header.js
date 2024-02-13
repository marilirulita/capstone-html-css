const navbar = document.getElementById("navbar");

/* fixed top division */
navbar.innerHTML += `<div class="div-head fixed-top mb-5">
<div id="top">
  <!-- hay un solo navbar con dos divisions -->
  <div class="navbar navbar-expand-sm justify-content-around navbar-dark">
    <div class="container-fluid">
      <a href="./index.html" class="navbar-brand d-flex align-items-center" data-toggle="tooltip"
        title="Tienda de Segunda Mano">
        <!-- logo -->
        <img src="../assets/images/logo1.png" alt="" width="40" class="rounded-circle mx-2 mx-lg-0" />
        <h5 class="brand-title text-white d-sm-none d-md-block ml-3 my-0">
          Tienda Online
        </h5>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mb-1" id="navbarSupportedContent">
        <div class="d-flex justify-content-around icons-group w-100">
          <!-- division 1 -->
          <ul class="navbar-nav align-items-sm-center align-items-start">
            <li class="nav-item">
              <a href="./index.html" class="nav-link text-uppercase text-nowrap" data-toggle="tooltip" title="Home">
                <i class="fas fa-home"></i><span class="px-lg-3 d-sm-none d-lg-inline">Inicio</span></a>
            </li>
            <li class="nav-item">
              <a href="./results-page.html" class="nav-link text-uppercase text-nowrap"
                data-toggle="tooltip" title="Collections"><i class="fas fa-expand"></i>
                <span class="px-lg-3 d-sm-none d-lg-inline">Catalogo</span></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-uppercase text-nowrap" data-toggle="tooltip" title="Shop"><i
                  class="fas fa-shopping-cart"></i>
                <span class="px-lg-3 d-sm-none d-lg-inline">Lista de Compra</span></a>
            </li>
            <li class="nav-item">
              <button type="button" name="button" class="text-uppercase buttons text-nowrap d-sm-block">
                Post an ad
              </button>
            </li>
          </ul>
          <!-- division 2 -->
          <ul class="navbar-nav align-items-sm-center align-items-start justify-content-center">
            <li class="nav-item">
              <a href="https://api.whatsapp.com/send?phone=526862581063&text=Hola, quiero informacion sobre estos productos!"
                class="nav-link text-uppercase d-flex align-items-end" data-toggle="tooltip" title="Messages">
                <i class="far fa-envelope"></i><span class="text-capitalize pl-2 d-sm-none">Messages</span></a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-uppercase text-nowrap" data-toggle="tooltip" title="Profile">
                <span class="text-capitalize pr-2 d-lg-none d-xl-inline">your name</span><i
                  class="fas fa-user"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

/* Header division */
navbar.innerHTML += `<header class="mt-5">
<div class="header-style d-flex flex-column align-items-center">
  <div class="d-flex flex-column align-items-center mt-0 mt-sm-4">
    <h1 class="mx-0 text-uppercase text-center">Segunda Mano</h1>
    <p class="text-capitalize text-center px-4">
      Convierte lo pre-amado en lo perfecto para ti.
    </p>
  </div>
  <form class="form-inline" action="./results-page.html" method="get">
    <div class="input-group mb-1 mx-2">
      <div class="input-group-prepend">
        <button type="button" name="button" class="dropdown-toggle but-drop" data-toggle="dropdown">
          Todos los productos
        </button>
        <div class="dropdown-menu nav-drop">
          <a href="./results-page.html" class="dropdown-item">Blusas</a>
          <a href="./results-page.html" class="dropdown-item">Camisas</a>
          <a href="./results-page.html" class="dropdown-item">Interior</a>
          <a href="./results-page.html" class="dropdown-item">Pantalones</a>
          <a href="./results-page.html" class="dropdown-item">Sueters</a>
          <a href="../results-page.html" class="dropdown-item">Zapatos</a>
          <hr />
          <a href="../results-page.html" class="dropdown-item">Bebes</a>
          <a href="../results-page.html" class="dropdown-item">Caballero</a>
          <a href="../results-page.html" class="dropdown-item">Dama</a>
          <a href="../results-page.html" class="dropdown-item">Niña</a>
          <a href="../results-page.html" class="dropdown-item">Niño</a>
          <hr />
          <a href="../results-page.html" class="dropdown-item">Primavera-Verano</a>
          <a href="../results-page.html" class="dropdown-item">Otoño-Invierno</a>
        </div>
      </div>
      <input type="text" class="form-control" placeholder="¿Que estas buscando?" />
      <input type="text" class="form-control d-none d-sm-inline" placeholder="Lugar" />
      <button class="but-search ml-2 d-none d-sm-inline" type="submit" data-toggle="tooltip" title="Search">
        Buscar
      </button>
    </div>
    <div class="input-group mt-0 mb-3 mx-2 d-sm-none">
      <input type="text" class="form-control" placeholder="Place" />
      <button class="but-search ml-1" type="submit" data-toggle="tooltip" title="Search">
        Buscar
      </button>
    </div>
  </form>
</div>
</header>`;