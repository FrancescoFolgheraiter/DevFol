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
    <!--first section with my photo-->
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">

    </section>
</template>

<style scoped>

</style>
