Vue.component('Footering', {
    template: //html
    `
    <footer>
    <div style="height: 150px; overflow: hidden;">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
            <path d="M-131.78,-55.97 C231.66,196.67 256.49,177.92 574.21,-16.48 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: #0e225e;"></path>
        </svg>
    </div>
    <div class="content py-5 text-white">
        <div class="containerr">
            <div class="row justify-content-center">
                <div class="col-md-4 col-sm-12" data-aos="fade-down-right">
                    <h3 class="my-5">MorangeSoft</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, optio!</p>
                </div>
                <div class="col-md-4 col-sm-12" data-aos="fade-up-right">
                    <h3 class="my-5">Productos</h3>
                    <button href="https://www.sacomicita.com" target="_blank"
                        class="btn btn-more rounded-pill px-4 py-2"
                        style="background: none; text-transform: uppercase; color: #25a2d2 !important;">
                        sacomicita
                    </button>
                    <button href="https://www.pagatucomra.com" target="_blank"
                        class="btn btn-more rounded-pill mt-3 px-4 py-2"
                        style="background:none; text-transform: uppercase; color: #ffc107 !important;">
                        pagatucompra
                    </button>
                    <button href="https://www.pagatucomra.com" target="_blank"
                        class="btn btn-more rounded-pill mt-3 px-4 py-2"
                        style="background: none; text-transform: uppercase; color: #25d232 !important;">
                        más productos
                    </button>

                </div>
                <div class="col-md-4 col-sm-12" data-aos="fade-down-left">
                    <h3 class="my-5">Contáctanos</h3>
                    <div class="icon d-flex mb-2">
                        <img src="./assets/img/mail.svg" class="mr-3" alt="mail">
                        <span>correo@correo.com</span>
                    </div>
                    <div class="icon d-flex my-2">
                        <img src="./assets/img/call.svg" class="mr-3" alt="call">
                        <span>+ 00 - 000 - 0000</span>
                    </div>
                    <h5 class="my-3">Síguenos en</h5>
                    <div class="d-flex">
                        <a href="#" class="mr-3">
                            <img src="./assets/img/facebook.svg" width="30px" class="mr-3" alt="call">
                        </a>
                        <a href="#" class="mr-3">
                            <img src="./assets/img/instagram.svg" width="30px" class="mr-3" alt="call">
                        </a>
                        <a href="#" class="mr-3">
                            <img src="./assets/img/twitter.svg" width="30px" class="mr-3" alt="call">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</footer>

    `
})