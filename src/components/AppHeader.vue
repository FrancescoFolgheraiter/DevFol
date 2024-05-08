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
        }
    }
</script>

<template>
    <nav class = "flex ">
        <div class="flex-grow">
            Francesco Folgheraiter
        </div>
        <div class="border-2 border-black rounded-full shadow-md ">
            <ul class="flex">
                <li v-for="link in navHeader" class="mx-5 my-3 hover:font-bold">
                    {{ link }}
                </li>
            </ul>
        </div>
    </nav>
</template>

<style >

</style>
