import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.use(Vuetify)

Vue.config.productionTip = false

const app = new Vue({
  router,
  Vuetify,
  vuetify,
  render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
  window.app = app;
}