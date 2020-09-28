Vue.component('Articleview', {
    template: /*html*/ `
    <div class="blog">

        <article id="article" class="container">
            <div class="row articles">
                <div class="col-md-6 mt-5 text-right px-3 d-flex justify-content-center align-items-center">
                    <div class="card border-left border-bottom p-5">
                        <span></span>
                        <h1 data-aos="fade-down-right" data-aos-once="true"> {{ ad.title }} </h1>
                        <h4 data-aos="fade-down-right" data-aos-once="true" data-aos-delay="100"> {{ ad.subTitle }} </h4>
                    </div>
                </div>
                <div class="col-md-6 mt-5 d-flex justify-content-center align-items-center">
                    <img data-aos="fade-down-right" data-aos-once="true" data-aos-delay="150" class="mt- img-fluid" :src="ad.image" alt="...">
                </div>
                <div class="col-md-12">
                    <div class="content-article mt-5">
                        <p data-aos="fade-down-right" data-aos-once="true" data-aos-delay="200" class="main-article"> {{ ad.mainArticle }} </p>
                        <section v-for="sub of ad.subs" class="mt-4 sub-article">
                            <h3 data-aos="fade-down-right" data-aos-delay="100" data-aos-once="true"> {{ sub.title }} </h3>
                            <p data-aos-delay="100" data-aos="fade-down-right" data-aos-once="true"> {{ sub.content }} </p>
                        </section>
                    </div>
                </div>
            </div>
        </article>



        <div class="blog-ads">
            <div class="container">
                <div class="row" data-aos="zoom-in" data-aos-once="true">
                    <div class="col-md-12 mt-4">
                        <div class="swiper-container">
                            <div  class="swiper-wrapper">
                                <div v-for="ad of ads" class="swiper-slide p-5" :style="{'background-image': 'url(' +ad.image+ ')'}">
                                    <div class="content-slide">
                                        <h3> {{ ad.title }} </h3>
                                        <a href="#article" @click="viewArticle(ad, $event)">Leer artículo</a>
                                    </div>
                                </div>
                            </div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `,
    data(){
        return {
            ads: [
                { 
                    title: 'Lorem ipsum dolor sit.',
                    subTitle: 'Ipsum dolor sit.',
                    image: './assets/img/blog/articles/1.jpg',
                    mainArticle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia beatae nisi id dicta! Blanditiis asperiores placeat repellat animi, earum distinctio minima at quod possimus doloribus assumenda delectus. Libero quis corporis sed dignissimos ipsam molestiae accusantium! Provident sapiente natus corrupti dolores esse sit, vel porro fugiat nemo minima voluptas minus, adipisci ratione ipsum aliquam ea ipsam? Recusandae accusamus nesciunt dignissimos assumenda sunt ullam illum adipisci laudantium ex, labore tempore vel ut quisquam quam quod similique, dolore ipsa vitae aliquam voluptatibus! Cumque, soluta nostrum. Aspernatur cumque esse, at, tempora quidem iure minus ipsum exercitationem blanditiis placeat autem beatae assumenda, aliquid eius enim!',
                    subs: [
                        { 
                            title: 'Lorem ipsum dolor sit one.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut exercitationem quaerat iusto eos optio reprehenderit veritatis ullam sed! Molestiae quis tenetur, aperiam quisquam quidem nemo exercitationem magni nisi eos ab. Laboriosam, perferendis.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit one-two.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut.'
                        },
                    ]
                },
                { 
                    title: 'Lorem ipsum dolor sit.',
                    subTitle: 'Ipsum dolor sit.',
                    image: './assets/img/blog/articles/2.jpg',
                    mainArticle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia beatae nisi id dicta! Blanditiis asperiores placeat repellat animi, earum distinctio minima at quod possimus doloribus assumenda delectus. Libero quis corporis sed dignissimos ipsam molestiae accusantium! Provident sapiente natus corrupti dolores esse sit, vel porro fugiat nemo minima voluptas minus, adipisci ratione ipsum aliquam ea ipsam? Recusandae accusamus nesciunt dignissimos assumenda sunt ullam illum adipisci laudantium ex, labore tempore vel ut quisquam quam quod similique, dolore ipsa vitae aliquam voluptatibus! Cumque, soluta nostrum. Aspernatur cumque esse, at, tempora quidem iure minus ipsum exercitationem blanditiis placeat autem beatae assumenda, aliquid eius enim!',
                    subs: [
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut exercitationem quaerat iusto eos optio reprehenderit veritatis ullam sed! Molestiae quis tenetur, aperiam quisquam quidem nemo exercitationem magni nisi eos ab. Laboriosam, perferendis.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut'
                        },
                    ]
                },
                { 
                    title: 'Lorem ipsum dolor sit.',
                    subTitle: 'Ipsum dolor sit.',
                    image: './assets/img/blog/articles/3.jpg',
                    mainArticle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia beatae nisi id dicta! Blanditiis asperiores placeat repellat animi, earum distinctio minima at quod possimus doloribus assumenda delectus. Libero quis corporis sed dignissimos ipsam molestiae accusantium! Provident sapiente natus corrupti dolores esse sit, vel porro fugiat nemo minima voluptas minus, adipisci ratione ipsum aliquam ea ipsam? Recusandae accusamus nesciunt dignissimos assumenda sunt ullam illum adipisci laudantium ex, labore tempore vel ut quisquam quam quod similique, dolore ipsa vitae aliquam voluptatibus! Cumque, soluta nostrum. Aspernatur cumque esse, at, tempora quidem iure minus ipsum exercitationem blanditiis placeat autem beatae assumenda, aliquid eius enim!',
                    subs: [
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut exercitationem quaerat iusto eos optio reprehenderit veritatis ullam sed! Molestiae quis tenetur, aperiam quisquam quidem nemo exercitationem magni nisi eos ab. Laboriosam, perferendis.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut.'
                        },
                    ]
                },
                { 
                    title: 'Lorem ipsum dolor sit.',
                    subTitle: 'Ipsum dolor sit.',
                    image: './assets/img/blog/articles/4.jpg',
                    mainArticle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia beatae nisi id dicta! Blanditiis asperiores placeat repellat animi, earum distinctio minima at quod possimus doloribus assumenda delectus. Libero quis corporis sed dignissimos ipsam molestiae accusantium! Provident sapiente natus corrupti dolores esse sit, vel porro fugiat nemo minima voluptas minus, adipisci ratione ipsum aliquam ea ipsam? Recusandae accusamus nesciunt dignissimos assumenda sunt ullam illum adipisci laudantium ex, labore tempore vel ut quisquam quam quod similique, dolore ipsa vitae aliquam voluptatibus! Cumque, soluta nostrum. Aspernatur cumque esse, at, tempora quidem iure minus ipsum exercitationem blanditiis placeat autem beatae assumenda, aliquid eius enim!',
                    subs: [
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut exercitationem quaerat iusto eos optio reprehenderit veritatis ullam sed! Molestiae quis tenetur, aperiam quisquam quidem nemo exercitationem magni nisi eos ab. Laboriosam, perferendis.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut exercitationem quaerat iusto eos optio reprehenderit veritatis ullam sed! Molestiae quis tenetur, aperiam quisquam quidem nemo exercitationem magni nisi eos ab. Laboriosam, perferendis.'
                        },
                    ]
                },
                { 
                    title: 'Lorem ipsum dolor sit.',
                    subTitle: 'Ipsum dolor sit.',
                    image: './assets/img/blog/articles/5.jpg',
                    mainArticle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia beatae nisi id dicta! Blanditiis asperiores placeat repellat animi, earum distinctio minima at quod possimus doloribus assumenda delectus. Libero quis corporis sed dignissimos ipsam molestiae accusantium! Provident sapiente natus corrupti dolores esse sit, vel porro fugiat nemo minima voluptas minus, adipisci ratione ipsum aliquam ea ipsam? Recusandae accusamus nesciunt dignissimos assumenda sunt ullam illum adipisci laudantium ex, labore tempore vel ut quisquam quam quod similique, dolore ipsa vitae aliquam voluptatibus! Cumque, soluta nostrum. Aspernatur cumque esse, at, tempora quidem iure minus ipsum exercitationem blanditiis placeat autem beatae assumenda, aliquid eius enim!',
                    subs: [
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut exercitationem quaerat iusto eos optio reprehenderit veritatis ullam sed! Molestiae quis tenetur, aperiam quisquam quidem nemo exercitationem magni nisi eos ab. Laboriosam, perferendis.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati.'
                        },
                        { 
                            title: 'Lorem ipsum dolor sit.',
                            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, maiores quaerat. Excepturi accusantium fugit adipisci obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus ut obcaecati, minus laboriosam quaerat ut, necessitatibus asperiores dolorem omnis ea, quam aperiam incidunt. Esse a, ratione, quas vitae natus.'
                        },
                    ]
                }                
            ],
            ad: {},
        }
    },
    methods: {
        viewArticle(article,event){
            this.ad = article
        }
    },
    mounted(){
        this.viewArticle(this.ads[0])
    }
  
})