import Vue from 'vue';
import LoadingSpinnerItem from './components/LoadingSpinnerItem/LoadingSpinnerItem.vue';
import NavbarItem from './components/NavbarItem/NavbarItem.vue';
import SuccessNotification from './components/SuccessNotification/SuccessNotification.vue';

export default Vue.extend({
  name: 'App',
  components: {
    LoadingSpinnerItem,
    NavbarItem,
    SuccessNotification,
  },
});
