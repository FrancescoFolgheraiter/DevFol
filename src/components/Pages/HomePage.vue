<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';

    export default{
        data(){
            return{
                //my knowledge
                technologies:[
                    {
                        name: "HTML5",
                        image: "/img/icons-tech/html5_icon.png"
                    },
                    {
                        name: "CSS/SCSS",
                        image: "/img/icons-tech/css_icon.png" 
                    },
                    {
                        name: "Bootstrap5",
                        image: "/img/icons-tech/bootstrap5_icon.png" 
                    },
                    {
                        name: "Javascript",
                        image: "/img/icons-tech/javascript_icon.png"
                    },
                    {
                        name: "Vue",
                        image: "/img/icons-tech/vue.png"
                    },
                    {
                        name: "PHP",
                        image: "/img/icons-tech/php_icon.png" 
                    },
                    {
                        name: "Laravel",
                        image: "/img/icons-tech/laravel_icon.png"
                    },
                    {
                        name: "MySQL",
                        image: "/img/icons-tech/mySql_icon.png" 
                    },
                    {
                        name: "Git",
                        image: "/img/icons-tech/git_icon.png" 
                    }
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
            Swiper,
            SwiperSlide,
        },
        mounted(){
        },
        setup() {
        return {
            modules: [EffectCards],
        };
        }
    }
</script>

<template>
    <div class="container">
        <!--first section with my photo-->
        <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div class=" p-4 text-center flex flex-col justify-center">
                <p>Ciao! Piacere di conoscerti 👋</p>
                <h1 class=" text-4xl font-bold text-right">
                    Sono Francesco, un full-stack <span class="text-orange-500">web developer</span> di Trento(IT).
                </h1>
            </div>
            <div class=" p-4 text-center flex justify-center">
                <!--polaroid-->
                <div class="p-3 max-w-[300px] rotate-12 m-12 border-4 border-black shadow-black shadow-xl bg-white">
                    <img class="w-full border-4 border-black" :src="getImagePath('/img/photo/Franz.jpg')" alt="FrancescoFolgheraiter">
                    <div class="p-8 ">
                        Yep it's me!
                    </div>
                </div>
                <!--end polaroid-->
            </div>
        </section>
        <!--end first section with my photo-->
        <!--second section my bio-->
        <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div class=" p-4 text-center">
                <swiper
                    :effect="'cards'"
                    :grabCursor="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/Segonzano.jpeg')" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/ArteSella.jpeg')" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/BrisaC.jpeg')" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/extreameD.jpeg')" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/Samba.jpeg')" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/BoulderLona.jpeg')" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/Clover.jpeg')" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="w-full h-full object-cover" :src="getImagePath('/img/photo/Gatti.jpeg')" alt="">
                    </swiper-slide>
                </swiper>
            </div>
            <div class=" p-4 text-center text-xl">
                <div>
                    <!--grafica-->
    
                </div>
                <div>
                    <!--testo-->
                    <p class="mb-4">
                        Sono un giovane e appassionato web developer residente a Trento, amante del tech
                        e dello sport, pratico assiduamente da un paio d'anni l'arrampicata! &#129495;
                    </p>
                    <p class="mb-4">
                        Nonostante venga da una formazione tecnica in ambito IT per diversi anni ho lavorato nel 
                        mondo della panificazione (un'altra mia passione), ma mi mancava il senso di sfida e la logica 
                        che il mondo della programmazione offre, quindi mi sono rimesso al passo coi tempi frequentando una 
                        tech academy di Milano! 
                    </p>
                    <p class="mb-4">
                        A tenermi compagnia a casa oltre al codice ci sono 2 mice e una labrador!
                        Minou (siamese), Hakuna (bengala) e Clover (30kg di energia allo stato puro! &#128514;) 
                    </p>
                </div>
            </div>
        </section>
        <!--end second section my bio-->
        <!--third section knowledge -->
        <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div class=" p-4 text-center text-2xl flex flex-col  justify-center">
                <div v-for="elem in 'knowledge'">
                        {{ elem.toUpperCase() }}
                    </div>
                
            </div>
            <div class=" p-4 ">
                <!--My card technology-->
                <ul class="grid grid-cols-3 gap-4 mb-2">
                    <li v-for="(technology, i) in technologies" :key="i" class="hover:bg-white min-h-[120px] rounded flex flex-col items-center justify-around ring-2 ring-[#303534] bg-gradient-to-bl from-[#DEFF83] to-green-100 ">
                        <div class=" text-lg font-semibold text-slate-600">
                            {{ technology.name }}
                        </div>
                        <div class=" w-[50px]">
                            <img class=" w-full" :src="getImagePath(technology.image)"  :alt="technology.name"> 
                        </div>
                    </li>
                </ul>
                <!--end card tech-->
                <p class="text-center">
                    Vieni a scoprire come utilizzo queste tencologie nella mia pagina progetti oppure se sei del settore visita il mio profilo github!
                </p>
            </div>
        </section>
        <!--end third section knowledge -->
        <!--fourth section what im focus on-->
        <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div class=" p-4 text-center text-xl">
                <p class="mb-4">
                    In questo periodo i miei studi si stanno principalmente
                    concentrando sul linguaggio di programmazione Java (OOP) e 
                    Tailwind come framework CSS e successivamente mi concentrerò sul framework
                    di Java Spring.
                </p>
                <p class="mb-4">
                    Con tailwild è stato amore a prima vista!
                </p>   
            </div>
            <div class=" p-4 text-center ">
                
            </div>
        </section>
        <!-- end fourth section what im focus on-->
    </div>
</template>

<style scoped>
.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide {
    border:3px solid black;
}


/* .swiper-slide:nth-child(1n) {
  background-color: rgb(0, 140, 255);
} */

</style>
