import Vue from 'vue';

export default Vue.extend({
  name: 'NavbarItem',
  data() {
    return {
      items: [
        { name: 'Memory', route: '/' },
        { name: 'Scoreboard', route: '/scoreboard' },
      ],
    };
  },
});
