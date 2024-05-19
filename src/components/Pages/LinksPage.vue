<script>
    export default{
        data(){
            return{
                myLinks:[
                    {
                        name:'Ghithub',
                        path:'https://github.com/FrancescoFolgheraiter/'
                    },
                    {
                        name:'Linkedin',
                        path:'https://www.linkedin.com/in/francesco-folgheraiter/'
                    },
                    {
                        name:'CV',
                        path:'https://drive.google.com/file/d/1k6Yek4-2X_qCAyGTkWRN-vw1mRoD6_FW/view'
                    },
                ],
                docLibrary:[
                    {
                        name:'Swiper',
                        path:'https://swiperjs.com/get-started',
                        description:'Libreria per l\'implementazione di caroselli dinamici e statici con possibilità di trascinare le immagini, molto comoda in ambito mobile!'
                    }, 
                    {
                        name:'ChartJs',
                        path:'https://www.chartjs.org/docs/latest/',
                        description:'Libreria che permette di creare grafici interattivi, il linguaggio utilizzato è Javascript ma ci sono profili github opensource che permettono di integrarla con altri linguaggi e framework (ad esempio PHP con Laraverl)'
                    },
                    {
                        name:'Braintree',
                        path:'https://developer.paypal.com/braintree/docs/',
                        description:'Libreria per implementare metodi di pagamento molto complessa ma ha anche un ottimo dropin nel caso si voglia avere uno strumento pronto all\'uso!'
                    },
                    {
                        name:'Axios',
                        path:'https://axios-http.com/docs/intro',
                        description:'Libreria per gestione API, molto pratica per chi è alle prime armi!'
                    }, 
                ]
            };
        },
        methods:{
            //funzione che restituisce il percorso completo di un'immagine 
            getImagePath(imgPath){
			    return new URL (imgPath, import.meta.url).href;
		    }
        },
        components:{

        },
        mounted(){
        },
    }
</script>

<template>
    <div class="container w-1/3">
        <!--first section with my photo-->
        <section class="flex flex-col items-center mb-12">
            <div>
                <img class="w-28 h-28 sm:w-[150px] sm:h-[150px] object-cover rounded-full ring-2 ring-[#303534]" :src="getImagePath('/img/photo/Franz.jpg')" alt="FrancescoFolgheraiter">
            </div>
            <h1 class=" text-xl font-bold">
                Francesco Folgheraiter
            </h1>
        </section>
        <!--end first section with my photo-->
        <!--section personal links-->
        <section>
            <h3 class="font-bold text-center mb-10">
                I miei profili social:
            </h3>
            <ul>
                <a v-for="link in myLinks" :href= "link.path" target="_blank" rel="noopener noreferrer">
                    <li class="transition-move-up hover-move-up border-2 border-black mb-10 text-center py-4 rounded-xl shadow-xl hover:bg-slate-500">
                        {{ link.name }}
                    </li>
                </a>
            </ul>   
        </section>
        <!--end section personal links-->
        <!--third section library links-->
        <section>
            <h3 class="font-bold text-center mb-10">
                Alcune librerie che ho implementato nei miei progetti:
            </h3>
            <ul>
                <a v-for="link in docLibrary" :href= "link.path" target="_blank" rel="noopener noreferrer">
                    <li class="transition-move-up hover-move-up border-2 border-black mb-10 text-center py-4 rounded-xl shadow-xl hover:bg-slate-500">
                        {{ link.name }}
                    </li>
                </a>
            </ul>   
        </section>
        <!--third section library links-->
    </div>
</template>

<style scoped>
.transition-move-up {
  @apply transition-transform duration-100 ease-in-out;
}
.hover-move-up:hover {
  @apply transform -translate-y-2;
}

</style>
