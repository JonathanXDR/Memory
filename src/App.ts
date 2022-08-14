import Vue from 'vue';
import LoadingSpinnerItem from './components/LoadingSpinnerItem/LoadingSpinnerItem.vue';
import NavbarItem from './components/NavbarItem/NavbarItem.vue';
import CardItem from './components/CardItem/CardItem.vue';

export default Vue.extend({
  name: 'App',
  components: {
    LoadingSpinnerItem,
    NavbarItem,
    CardItem,
  },
});
