Vue.component('Navigation', {
    props: ['data'],
    template: /*html*/
    `
    <div>
        <header>
        <nav class="navbar navbar-expand-md  py-3">
        <div class="mx-auto order-2">
                <a class="navbar-brand" href="#">
                    <img src="./assets/img/icon.png" width="30" class="ml-3" alt="">
                </a>
            <button style="position: absolute; left: 5%;" class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span  class="navbar-toggler-icon"><div class="toggle"><div></div><div></div><div></div></div></span>
            </button>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li v-for="item of nav" :class="['nav-item', {'item-product': item.active}]">
                    <a class="nav-link px-4" :href="item.url">  {{ item.name }} </a>
                </li> 
            </ul>
        </div>
    </nav>
        </header>
    </div>
    `,
    
    data(){
        return {
            nav: this.data
        }
    }
   
});