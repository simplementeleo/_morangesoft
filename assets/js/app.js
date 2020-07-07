const app = new Vue({
    el: '#app'
})

var typed = new Typed('#WebDevelopment', {
    strings: ['Web', 'Móviles','de Escritorio'],
    loop: true,
    typeSpeed: 50
});

AOS.init();