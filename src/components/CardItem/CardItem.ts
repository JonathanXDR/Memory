import Vue from 'vue';

export default Vue.extend({
  name: 'CardItem',
  props: ['card'],
  data() {
    return {
      // sdxCardBack: '' as any,
    };
  },
  mounted() {
    // TODO: add styles to sdxCardBack via $refs since not accessible from the template
    // this.$refs.sdxCardBack.style.background = 'red',
  },
});
