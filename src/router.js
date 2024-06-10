import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppHome from './pages/AppFooter.vue';
import AppFooter from './pages/AppFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    //routes è un array di oggetti con chiavi specifiche
    routes: [
        {
            name: 'home',
            path: '/home',
            component: AppHome,
        },
        {
            name: 'footer',
            path: '/footer',
            component: AppFooter,
        },

    ],
});

export { router };