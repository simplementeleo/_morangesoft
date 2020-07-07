Vue.component('Navigation', {
    template: //html
    `
    <div>
        <header>
        <nav class="navbar navbar-expand-md  py-3">
        <div class="mx-auto order-1">
                <span class="navbar-brand mb-0 h1">MorageSoft</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link px-4" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#">¿Quienes Somos?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#">Servicios</a>
                </li>
                <li class="nav-item item-product">
                    <a class="nav-link px-4" href="#">Productos</a>
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