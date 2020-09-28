Vue.component('Services', {
    template: /*html*/ `
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

        <!-- Carousel - Development Web -->
        <div class="row" data-aos="zoom-in">
            <div class="col-md-12 mt-4">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div  v-for="(item, index) of developmentWeb"  class="swiper-slide"  @click="viewProject(item.data)" data-toggle="modal" data-target="#action" :style="{ 'background-image': 'url('+item.imgMain+')'}"></div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
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

         <!-- Carousel - Development Web -->
         <div class="row" data-aos="zoom-in">
            <div class="col-md-12 mt-4">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div  v-for="(item, index) of marketing"  class="swiper-slide"  @click="viewProject(item.data)" data-toggle="modal" data-target="#action" :style="{ 'background-image': 'url('+item.imgMain+')'}"></div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>



    </div>



    <!-- View Project -->
    <div class="modal fade" id="action" tabindex="-1" role="dialog" aria-labelledby="ViewProject" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <button type="button" class="close d-flex justify-content-center align-items-center" data-dismiss="modal" aria-label="Close" style="position: absolute; z-index: 21; right: 26px; top: 26px;">
                    <span aria-hidden="true">&times;</span>
                </button>


                <div class="modal-body container-fluid">

                    <div class="row">

                        <img :src="project.image" alt="" class="col-sm-12" style="clip-path: ellipse(72% 89% at 52% 9%);">
                        
                        <div class="col-sm-12 my-5">
                            <h1 class="text-center">{{ project.title }} </h1>
                            <p class="text-center px-3"> {{ project.text }} </p>
                        </div>
                        
                        <div style="text-align: center; position: relative; width: 100%; height: 100%;">
                            <iframe  :src="project.video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div class="col-sm-12 contact mt-5">
                            <div class="container content py-5 px-5">
                                <h4 class="text-center my-5">¿Te interesa? ¡Contáctanos!</h4>
                                <form @submit.prevent="form(dataForm)">
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
                            </div>
                        </div>




                    </div>

                    



                </div>


                




            </div>
        </div>
    </div>

</div>
    `,
    data() {
        return {
            developmentWeb: [
                {
                    imgMain: './assets/img/servicio-2.png',
                    data: {
                        title: 'Title 1',
                        image: './assets/img/servicio-2.png',
                        text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non, quod fugiat quae quos, eligendi sunt ea dolore et maiores nobis voluptatibus. Repellendus quos accusantium facere aperiam, architecto laudantium velit.',
                        video: 'https://www.youtube.com/embed/wxds6MAtUQ0'
                    }
                },
                {
                    imgMain: './assets/img/servicio-1.png',
                    data: {
                        title: 'Title 2',
                        image: './assets/img/servicio-1.png',
                        text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non, quod fugiat quae quos, eligendi sunt ea dolore et maiores nobis voluptatibus. Repellendus quos accusantium facere aperiam, architecto laudantium velit.',
                        video: 'https://www.youtube.com/embed/wxds6MAtUQ0'
                    }
                },
                {
                    imgMain: './assets/img/servicio-2.png',
                    data: {
                        title: 'Title 3',
                        image: './assets/img/servicio-2.png',
                        text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non, quod fugiat quae quos, eligendi sunt ea dolore et maiores nobis voluptatibus. Repellendus quos accusantium facere aperiam, architecto laudantium velit.',
                        video: 'https://www.youtube.com/embed/wxds6MAtUQ0'
                    }
                },
            ],
            marketing: [
                {
                    imgMain: './assets/img/servicio-2.png',
                    data: {
                        title: 'Marketing 1',
                        image: './assets/img/servicio-2.png',
                        text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non, quod fugiat quae quos, eligendi sunt ea dolore et maiores nobis voluptatibus. Repellendus quos accusantium facere aperiam, architecto laudantium velit.',
                        video: 'https://www.youtube.com/embed/ZSkZs_OtkkQ'
                    }
                },
                {
                    imgMain: './assets/img/servicio-1.png',
                    data: {
                        title: 'Marketing 2',
                        image: './assets/img/servicio-1.png',
                        text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non, quod fugiat quae quos, eligendi sunt ea dolore et maiores nobis voluptatibus. Repellendus quos accusantium facere aperiam, architecto laudantium velit.',
                        video: 'https://www.youtube.com/embed/ZSkZs_OtkkQ'
                    }
                },
                {
                    imgMain: './assets/img/servicio-2.png',
                    data: {
                        title: 'Marketing 3',
                        image: './assets/img/servicio-2.png',
                        text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam non, quod fugiat quae quos, eligendi sunt ea dolore et maiores nobis voluptatibus. Repellendus quos accusantium facere aperiam, architecto laudantium velit.',
                        video: 'https://www.youtube.com/embed/ZSkZs_OtkkQ'
                        
                    }
                },
            ],
            project: {},
            dataForm: {}
        }
    },
    methods: {
        viewProject(data) {
            this.project = data
        },
        form(dataForm){
            console.log(dataForm)
        }
    }

})