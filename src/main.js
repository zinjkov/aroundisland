import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.component('icon', Icon);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCGOya76cyO2HGKPXT_b3BI4_J1JyCgSRs'
  }
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
