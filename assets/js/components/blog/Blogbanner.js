Vue.component('Blogbanner', {
    template: /*html*/ `
    <div class="blog">
        <div class="banner">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">

                <div v-for="(banner, index) of banners" :class="['carousel-item', {'active': index === 0}]">
                    <div class="row">
                        <img :src="banner.img" alt="" class="col-md-6">
                        <div class="card p-4 col-md-6 m-auto mr-2 border-right border-bottom">
                            <h3>  {{ banner.title }}  </h3>
                            <p> {{ banner.text }} </p>
                        </div>
                    </div>
                </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        
        <div class="text-giant" data-aos="fade-down-right" data-aos-once="true">
            <h1 class="giant">BLOG</h1>
        </div>

    </div>
    `,
    data() {
        return {
            banners: [
                {
                    img: './assets/img/blog/banner/slide1.jpg',
                    title: 'Lorem ipsum dolor sit.',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eius harum quas libero temporibus quibusdam!'
                },
                {
                    img: './assets/img/blog/banner/slide2.jpg',
                    title: 'Lorem ipsum dolor sit.',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eius harum quas libero temporibus quibusdam!'
                },
                {
                    img: './assets/img/blog/banner/slide3.jpg',
                    title: 'Lorem ipsum dolor sit.',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure eius harum quas libero temporibus quibusdam!'
                }
            ]
        }
    }
});