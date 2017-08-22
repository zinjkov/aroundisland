import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import * as VueGoogleMaps from 'vue2-google-maps';
import VueResource from 'vue-resource-2'
import store from './store/store'

Vue.component('icon', Icon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCGOya76cyO2HGKPXT_b3BI4_J1JyCgSRs'
  }
});

Vue.use(VueResource);
const URL = 'http://aroundisland.ru/api';
const local_URL = 'http://127.0.0.1:8000/api';

Vue.http.options.root = URL;


var vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

function update() {
  vue.$store.dispatch('fetch_position_list')
}

function start_update() {
  setInterval(() => update(), 5000);
}
update();
start_update();
