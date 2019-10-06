import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from "./views/Dashboard";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/calendar',
            name: 'Kalender',
            component: () => import('./views/Calendar.vue')
        }
    ]
});