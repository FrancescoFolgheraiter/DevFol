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
	<h1 class="text-center">
	prova
	</h1>
	<div>
		<AppHeader/>
	</div>
	<div>
		<AppMain/>
	</div>
	<div>
		<AppFooter/>
	</div>
</template>

<style scoped>

</style>
