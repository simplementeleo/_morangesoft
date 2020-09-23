Vue.component('Products',{
    template: //html
    `
    
    <div class="main-products mt-5">
    <div class="d-flex flex-column align-items-center">
        <h1 class="text-center" data-aos="fade-down-right" data-aos-anchor-placement="top-center">Productos</h1>
        <span class="guion mt-4"></span>
    </div>
    <div class="containerr">
        <div class="row mt-5 py-5 align-items-center">
            <div class="col-md-6 col-sm-12">
                <div class="image-border-product-1">
                    <div class="border" data-aos="zoom-in" data-aos-anchor-placement="top-center" ></div>
                    <div class="circle" ></div>
                    <div class="circle" ></div>
                    <img data-aos="zoom-in" src="./assets/img/producto-1.png" width="100%" />
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="row justify-content-center">
                    <div class="col-sm-12 mt-5 px-5">
                        <div class="border-right border-bottom p-3">
                            <h2 class="py-3" data-aos="fade-down-right" data-aos-anchor-placement="top-center">Saco mi cita</h2>
                            <div class="guion my-3"></div>
                            <p class="my-3" data-aos="fade-down-right" data-aos-anchor-placement="top-center">
                            Servicio de telemedicina para clínicas y pacientes en general. Interconectamos médicos, clínicas y pacientes de diferentes partes del mundo.
                            </p>
                            <button  href="https://www.sacomicita.com" target="_blank" class="btn btn-more px-3 my-4">
                                más información
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="row mt-5 py-5 align-items-center">
            <div class="col-md-6 col-sm-12">
                <div class="row justify-content-center">
                    <div class="col-sm-12 mt-5 px-5">
                        <div class="border-left border-bottom p-3">
                            <h2 class="py-3" data-aos="zoom-in" data-aos-anchor-placement="top-center">Paga Tu Compra</h2>
                            <div class="guion my-3"
                                style="background: #e516a7;box-shadow: #e516a7 1px 1px 10px"></div>
                            <p class="my-3" data-aos="flip-right" data-aos-anchor-placement="top-center">
                            Es una iniciativa que brinda herramientas publicitarias a pequeñas y medianas empresas que de otra manera no podrian acceder a estos servicios. Interconectamos negocios con clientes de diferentes partes del mundo.
                            </p>
                            <button href="https://www.pagatucompra.com" target="_blank" class="btn btn-more two px-3 my-4">
                                    más información
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="image-border-product-2 mt-5">
                    <div class="border" data-aos="fade-up-right" data-aos-anchor-placement="top-center"></div>
                    <div class="circle" ></div>
                    <div class="circle" ></div>
                    <img data-aos="fade-down-right" data-aos-anchor-placement="top-center" src="./assets/img/producto-2.png" width="100%" />
                </div>
            </div>
        </div>
    </div>
</div>
    `
})