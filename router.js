import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './src/components/Pages/HomePage.vue';
import LinksPage from  './src/components/Pages/LinksPage.vue';
import AboutPage from  './src/components/Pages/AboutPage.vue';
// import IndexPage from './src/components/pages/indexPage.vue';
// import RestaurantPage from './src/components/pages/RestaurantPage.vue';
// import PaymentPage from './src/components/pages/PaymentPage.vue';
// import LavoraConNoiPage from './src/components/pages/LavoraConNoi.vue';
// import OrderSuccess from './src/components/pages/OrderSuccess.vue';
// import NotFoundPage from './src/components/pages/NotFound.vue'; 


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage 
    },
    {
      path: '/links',
      name: 'links',
      component: LinksPage 
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage 
    }
  ]
});

export {router};