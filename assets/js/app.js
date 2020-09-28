const app = new Vue({
  el: '#app',
  data: {
    navMain: [{
        url: '#home',
        name: 'Inicio'
      },
      {
        url: '#weare',
        name: '¿Quienes somos?'
      },
      {
        url: '#services',
        name: 'Servicios'
      },
      {
        url: 'blog.html',
        name: 'Blog'
      },
      {
        url: '#products',
        name: 'Productos',
        active: true
      },
      {
        url: '#f',
        name: 'Contáctanos'
      }
    ],
    navBlog: [{
        url: './index.html',
        name: 'Inicio'
      },
      {
        url: '#f',
        name: 'Contáctanos',
        active: true
      }
    ]

  }
});
AOS.init();
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: false,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true
  },
});