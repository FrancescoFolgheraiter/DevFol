<script>
    import AppHeader from './components/AppHeader.vue';
	import AppFooter from './components/AppFooter.vue';
	import AppMain from './components/AppMain.vue';

    export default{
        data(){
            return{

            };
        },
        methods:{

        },
        components:{
            AppHeader,
			AppMain,
			AppFooter

        },
        mounted(){
        }
    }
</script>

<template>
	<div class="container my-3" >
		<AppHeader/>
	</div>
	<div class="container">
		<AppMain/>
	</div>
	<div>
		<AppFooter/>
	</div>
</template>

<style scoped>
    

</style>
