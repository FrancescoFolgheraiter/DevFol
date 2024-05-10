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
            <h1 class=" text-4xl font-bold">
                Sono Francesco, un full-stack web developer di Trento(IT).
            </h1>
        </div>
        <div class="bg-gray-200 p-4 text-center">
            immagine
        </div>
    </section>
    <section class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-gray-200 p-4 text-center">
            Immagine
        </div>
        <div class="bg-gray-200 p-4 text-center">
            Sono un giovane developer 
        </div>
    </section>
    <section class="grid grid-cols-2 gap-4 mb-4">
        <div class="bg-gray-200 p-4 text-center">
            knowledge
        </div>
        <div class="bg-gray-200 p-4 ">
            <ul class="grid grid-cols-3 gap-2">
                <li v-for="technology in technologies" class="border-2 border-black rounded flex flex-col items-center">
                    <div class="self-center">
                        {{ technology.name }}
                    </div>
                    <div class="items-center">
                        <img :src="getImagePath(technology.image)"  :alt="technology.name"> 
                    </div>
                </li>
            </ul>
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
    li>div{
        max-width: 50px;
    }
    li>div>img{
        width: 100%;
    }

</style>
