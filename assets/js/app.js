const app = new Vue({
    el: '#app'
})

var typed = new Typed('#WebDevelopment', {
    strings: ['Web', 'Móviles','de Escritorio'],
    loop: true,
    typeSpeed: 50
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