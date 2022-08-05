import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      items: [
        { name: 'Memory', route: '/' },
        { name: 'Scoreboard', route: '/scoreboard' },
      ],
    };
  },
});
