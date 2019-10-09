import Vue from 'vue';
import router from 'vue-router';
import Dashboard from "./views/Dashboard";
import Auth from "@okta/okta-vue";

Vue.use(Auth, {
    issuer: 'https://dev-747778.okta.com/oauth2/default',
    client_id: '0oa1jstwarVoHLbdW357',
    redirect_uri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email'
})

Vue.use(router);

let Router = new router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/implicit/callback',
            name: 'Callback Login',
            component: Auth.handleCallback()
        },
        {
            path: '/calendar',
            name: 'Kalender',
            component: () => import('./views/Calendar.vue'),
            meta: {
                requiresAuth: true
            }
        }
    ]
});

Router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default Router