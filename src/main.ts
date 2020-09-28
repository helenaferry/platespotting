import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'leaflet/dist/leaflet.css';
import 'buefy/dist/buefy.css';
import Axios from 'axios'

Vue.prototype.$http = Axios; // TODO Handle this in vuex

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
