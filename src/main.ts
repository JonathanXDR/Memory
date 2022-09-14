import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { defineCustomElements } from '@swisscom/sdx/dist/js/webcomponents/loader';
import '@swisscom/sdx/dist/css/sdx.min.css';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/sdx-.+/];

defineCustomElements();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
