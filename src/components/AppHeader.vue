<script>
    export default{
        data(){
            return{
                navHeader:[
                    "about",
                    "blog",
                    "links",
                    "project"
                ],
        };
        },
        methods:{
            //funzione che restituisce il percorso completo di un'immagine 
            getImagePath(imgPath){
			    return new URL (imgPath, import.meta.url).href;
		    }
        }
    }
</script>

<template>
    <nav class = "flex ">
        <div class="flex-grow h-[80px]">
            <router-link :to="{name:'home'}">
                <img class=" h-full" :src="getImagePath('/img/LogoFrancescoFolgheraiter.png')" alt="">
            </router-link>
        </div>
        <div class="flex items-center">
            <ul class="border-2 border-black rounded-full flex">
                <li v-for="link in navHeader" class="mx-5 my-3 hover:font-bold">
                    {{ link }}
                </li>
            </ul>
        </div>
    </nav>
</template>

<style >

</style>
