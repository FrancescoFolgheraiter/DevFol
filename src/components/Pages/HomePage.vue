<script>

    export default{
        data(){
            return{
                //my knowledge
                technologies:[
                    "HTML 5",
                    "CSS/SCSS",
                    "Bootstrap 5",
                    "Javascript",
                    "Vue",
                    "PHP",
                    "Laravel",
                    "MySQL",
                    "Git"
                ]
            };
        },
        methods:{

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
            <h1 class="text-base sm:text-xl font-semibold sm:font-normal">
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
        <div class="bg-gray-200 p-4 text-center">
            <ul class="grid grid-cols-3 gap-2">
                <li v-for="technology in technologies">
                    {{ technology }}
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
    

</style>
