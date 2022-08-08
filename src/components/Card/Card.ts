import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Card',
  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    myFilter: function () {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    // .then(response => (this.info = response));
  },
});
