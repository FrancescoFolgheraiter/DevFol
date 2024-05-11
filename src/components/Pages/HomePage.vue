<script>

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

        },
        mounted(){
        }
    }
</script>

<template>
    <section class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-gray-200 p-4 text-center">
            <p>Ciao! Piacere di conoscerti 👋</p>
            <h1 class=" text-4xl font-bold text-right">
                Sono Francesco, un full-stack <span class="text-orange-500">web developer</span> di Trento(IT).
            </h1>
        </div>
        <div class="bg-gray-200 p-4 text-center flex justify-center">
            <!--polaroid-->
            <div class="p-3 max-w-[300px] rotate-12 m-12 border-4 border-black shadow-black shadow-xl bg-white">
                <img class="w-full border-4 border-black" :src="getImagePath('/img/photo/Franz.jpg')" alt="">
                <div class="p-8 ">
                    Yep it's me!
                </div>
            </div>
            <!--end polaroid-->
        </div>
    </section>
    <section class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-gray-200 p-4 text-center">
            Swiper di immagini https://codesandbox.io/p/devbox/swiper-vue-effect-cards-rdjk7c?file=%2Fsrc%2FApp.vue%3A12%2C40
        </div>
        <div class="bg-gray-200 p-4 text-center text-xl ">
            <div>
                <!--grafica-->

            </div>
            <div>
                <!--testo-->
                <p class=" mb-4">
                    Sono un giovane e appassionato web developer residente a Trento, amante del tech
                    e dello sport, pratico assiduamente da un paio d'anni l'arrampicata! &#129495;
                </p>
                <p class=" mb-4">
                    Nonostante venga da una formazione tecnica in ambito IT per diversi anni ho lavorato nel 
                    mondo della panificazione (un'altra mia passione), ma mi mancava il senso di sfida e la logica 
                    che il mondo della programmazione offre, quindi mi sono rimesso al passo coi tempi frequentando una 
                    tech academy di Milano! 
                </p>
            </div>
        </div>
    </section>
    <section class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-gray-200 p-4 text-center">
            knowledge
        </div>
        <div class="bg-gray-200 p-4 ">
            <!--My card technology-->
            <ul class="grid grid-cols-3 gap-4 ">
                <li v-for="(technology, i) in technologies" :key="i" class="min-h-[120px] border-2 border-green-800 rounded flex flex-col items-center justify-around ring-4 ring-lime-500 bg-gradient-to-bl from-green-400 to-green-100 ">
                    <div class=" text-lg font-semibold text-slate-600 ">
                        {{ technology.name }}
                    </div>
                    <div class=" w-[50px]">
                        <img class=" w-full" :src="getImagePath(technology.image)"  :alt="technology.name"> 
                    </div>
                </li>
            </ul>
            <!--end card tech-->
        </div>
    </section>
    <section class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-gray-200 p-4 text-center">
            Focus on:
        </div>
        <div class="bg-gray-200 p-4 text-center">
            Sto studiando Java con i 
        </div>
    </section>
</template>

<style scoped>


</style>
