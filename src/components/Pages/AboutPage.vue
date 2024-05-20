<script>
    export default{
        data(){
            return{
              
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
    <div>
        about
    </div>
</template>

<style scoped>


</style>
