import Vue from 'vue';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.vue';
import Navbar from './components/Navbar/Navbar.vue';
import Card from './components/Card/Card.vue';

export default Vue.extend({
  name: 'App',
  components: {
    LoadingSpinner,
    Navbar,
    Card,
  },
});
