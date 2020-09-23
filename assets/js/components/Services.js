Vue.component('Services', {
    template: //html
    `
    <div class="main-services mt-5">
    <div class="d-flex flex-column align-items-center">
        <h1 class="text-center" data-aos="fade-up-right" >Servicios</h1>
        <span class="guion mt-4"></span>
    </div>
    <div class="containerr">
        <div class="row mt-5 py-5 align-items-center">
            <div class="col-md-6 col-sm-12">
                <div class="image-border-service-1">
                    <div class="border"data-aos="fade-up-right" ></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <img data-aos="flip-up" data-aos-anchor-placement="top-center" src="./assets/img/servicio-1.png" width="100%" />
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="row justify-content-center">
                    <div class="col-sm-12 mt-5 px-5">
                        <div class="border-right border-bottom p-3">
                            <h2 class="py-3" data-aos="fade-up-right">Desarrollo de aplicaciones <br> <span id="WebDevelopment"></span> </h2>
                            <div class="guion my-3"></div>
                            <p class="my-3" data-aos="fade-down left">
                            Páginas web de alto impacto, priorizando la usabilidad y experiencia del usuario. Adaptables a cualquier dispositivo.</p>
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
                                <h2 class="py-3" data-aos="zoom-in">Marketing Digital</h2>
                                <div class="guion my-3"
                                    style="background: #3fedff;box-shadow: rgba(63, 237, 255, 0.76) 1px 1px 10px"></div>
                                <p class="my-3" data-aos="fade" >Hacer realidad tus ideas, desde lo más simple a lo más complejo. Desarrollo software a medida. Sistemas web y aplicaciones móviles totalmente escalables para empresas y startups desde cero.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="image-border-service-2 mt-5">
                    <div class="border" data-aos="fade-up-right" data-aos-anchor-placement="top-center"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <img data-aos="fade-down-right" data-aos-anchor-placement="top-center" src="./assets/img/servicio-2.png" width="100%" />
                </div>
            </div>
        </div>
    </div>
</div>
    `
})