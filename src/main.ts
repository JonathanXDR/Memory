import '@swisscom/sdx/dist/css/sdx.min.css';
import { defineCustomElements } from '@swisscom/sdx/dist/js/webcomponents/loader';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

defineCustomElements();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
