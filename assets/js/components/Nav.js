Vue.component('Navigation', {
    template: //html
    `
    <div>
        <header>
        <nav class="navbar navbar-expand-md  py-3">
        <div class="mx-auto order-2">
                <span class="navbar-brand mb-0 h1"></span>
            <button style="position: absolute; left: 5%;" class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span  class="navbar-toggler-icon"><div class="toggle"><div></div><div></div><div></div></div></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link px-4" href="#home">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#weare">¿Quienes Somos?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#services">Servicios</a>
                </li>
                <li class="nav-item item-product">
                    <a class="nav-link px-4" href="#products">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#">Contáctanos</a>
                </li>
            </ul>
        </div>
    </nav>
        </header>
    </div>
    `,
   
})