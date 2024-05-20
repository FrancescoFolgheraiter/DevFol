<script>
    export default{
        data(){
            return{
                navHeader:[
                    {
                        name:"about",
                        component:"about",
                    },
                    {
                        name:"blog",
                        component:null,
                    },
                    {
                        name:"links",
                        component:'links',
                    },
                    {
                        name:"project",
                        component:null,
                    }
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
    <div class="container my-3">
        <nav class = "flex ">
            <div class="flex-grow h-[100px]">
                <router-link :to="{name:'home'}">
                    <img class=" h-full" :src="getImagePath('/img/LogoFrancescoFolgheraiter.png')" alt="">
                </router-link>
            </div>
            <div class="flex items-center">
                <ul class="border-2 border-black rounded-full flex">
                    <li v-for="link in navHeader" class="mx-5 my-3 hover:font-bold">
                        <router-link :to="(link.component != null) ? {name:link.component } : {name:'home'}">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style >

</style>
