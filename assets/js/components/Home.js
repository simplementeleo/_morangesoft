Vue.component('Home',{
    template: /*html*/
    `
    <div>
        <div class="main-home">
            <div class="text-home">
                <div class="containerr">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <h1 data-aos="zoom-in">MorangeSoft</h1>
                            <p class="mt-5" data-aos="zoom-in">Desarrollamos soluciones agiles y de gran calidad</p>
                            <button type="button" data-toggle="modal" data-target="#come" data-aos="flip-up" class="btn btn-moran px-5 mt-4" style="background: #fff;">
                                vamos!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 150px; overflow: hidden;width:100%;">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M-0.28,71.33 C174.66,-53.00 338.31,241.08 501.97,64.43 L500.00,0.00 L0.00,0.00 Z"
                    style="stroke: none; fill: #4536e7;"></path>
            </svg>
        </div>



        <!-- Contact -->
        <div class="modal fade" id="come" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            
                <div class="modal-content">
                    <img src="./assets/img/contact.jpg" width="100%" style="clip-path: ellipse(98% 89% at 50% 10%);" />
                    <button type="button" class="close" style="position: absolute; right: 10px; top: 10px;" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <form @submit.prevent="form(dataForm)" class="py-5">
                        <div class="form-group">
                            <label for="cel">Número telefónico</label>
                            <input type="text" class="form-control" id="cel" placeholder="+00 000 000" v-model="dataForm.cel" requerid autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="name">Correo</label>
                            <input type="email" class="form-control" id="name" placeholder="email@email.com" v-model="dataForm.email" requerid autocomplete="off">
                        </div>
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" class="form-control" id="name" placeholder="Joe Kigman" v-model="dataForm.name" requerid autocomplete="off">
                        </div>
                        <button type="submit" class="btn btn-block mx-auto my-5">
                            Enviar
                        </button>
                    </form>
                    <div style="height: 120px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-14.39,94.23 C149.99,150.00 251.97,-82.39 505.36,111.02 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
                </div>
                
            </div>
        </div>



    </div>
   
    `,
    data(){
        return {
            dataForm: {}
        }
    },
    methods: {
        form(dataForm){
            console.log(dataForm)
        }
    }
})