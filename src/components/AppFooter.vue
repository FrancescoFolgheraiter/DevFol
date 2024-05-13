<script>
    export default{
        data(){
            return{
        };
        },
        methods:{
            getImagePath(imgPath){
			    return new URL (imgPath, import.meta.url).href;
		    }
        }
    }
</script>

<template>
    <div class=" min-h-[300px] bg-slate-900 text-white">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-12 text-center container">
            <div class="flex-grow h-[100px]">
            <router-link :to="{name:'home'}">
                <img class=" h-full" :src="getImagePath('/img/LogoFrancescoFolgheraiter.png')" alt="">
            </router-link>
            </div>
            <div>Pages</div>
            <div>Contacts</div>
            <div>footer</div>
        </div>
        <p class="text-xs text-center">
            All rights reserved 2024 Francesco Folgheraiter
        </p>
    </div>
</template>

<style>

</style>
