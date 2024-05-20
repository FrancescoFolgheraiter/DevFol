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
    <div class="container">
        <h1 class="text-4xl font-bold text-center mb-10">Francesco Fogheraiter</h1>
        <section class=" grid grid-cols-2 text-center">
            <div>
                <h2 class="text-3xl font-semibold mb-10">Vita professionale</h2>
                <p>
                    Diplomato nel 2012 come Ragioniere perito programmatore 
                    negli anni successivi ho lavorato nel campo della panificazione

                </p>
            </div>
            <div>
                <h2 class="text-3xl font-semibold mb-10">Vita personale</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi deleniti voluptates repellendus nemo cumque voluptate consequatur, dolor eaque, atque accusantium ipsum itaque iusto officiis similique libero excepturi amet numquam.
                    Earum expedita voluptatum nisi, harum ratione ut possimus inventore adipisci laboriosam mollitia vel fugiat esse repellendus aliquid quam minima aut blanditiis minus magnam! Quo aspernatur in mollitia, doloribus dolor repellendus?
                    Voluptas porro a cumque quam laudantium, ipsa laboriosam autem harum ipsam corrupti aut placeat, quos illum perferendis. Tenetur quis deleniti aperiam dolor et magni ipsam quae libero tempore. Qui, nostrum?
                    Atque eaque quo animi in distinctio cum non dolor libero praesentium repellat laborum, ipsa tenetur vel consequatur quasi ipsam voluptas cumque! Quam corrupti temporibus explicabo et pariatur debitis placeat hic?
                    Veniam, neque. Consequuntur, magnam! Earum vitae officia distinctio laudantium expedita ipsam nam id sed sit nostrum delectus eaque excepturi, consectetur error fugit, laborum odio pariatur voluptates unde sint assumenda. Illum.
                    Rerum, quibusdam mollitia. Ullam perferendis adipisci culpa quisquam voluptates vel omnis iste iure inventore accusantium, quasi perspiciatis rerum cumque mollitia deserunt consequatur atque quaerat corrupti deleniti nemo. Reiciendis, maiores cupiditate?
                    Ab, adipisci eum possimus quod enim, repellat sit soluta doloribus ipsa perferendis officia tenetur quasi quos aut omnis obcaecati autem mollitia molestiae optio magnam magni illo praesentium. Hic, dolore reiciendis.
                    Veritatis assumenda sapiente repudiandae quo harum qui aliquid maxime ullam, quod eum quam a enim optio asperiores hic. Facilis qui nisi assumenda? Reiciendis praesentium tenetur culpa quos mollitia cupiditate omnis.
                    Quos ducimus vitae illum numquam! Quaerat non animi unde ipsam nihil dolorum voluptatum magni, quas nesciunt, dignissimos quis deserunt ducimus sapiente ab minus veniam enim consectetur veritatis quibusdam necessitatibus. Aliquam?
                    Magni repellat quidem minima, perferendis veritatis maiores eum laborum qui officiis, sed earum. Id ad maxime omnis, deserunt aut dolorem fuga fugit, quis eaque nisi iusto perferendis provident obcaecati dolores.
                </p>
            </div>
        </section>
    </div>
</template>

<style scoped>


</style>
