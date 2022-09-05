import Vue from 'vue';

export default Vue.extend({
  name: 'Success',
  props: {
    message: {
      default: '',
      type: String,
    },
    open: {
      default: true,
      type: Boolean,
    },
    duration: {
      default: 2,
      type: Number,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
  mounted() {
    // eslint-disable-next-line no-return-assign
    setTimeout(() => (this.isOpen = false), this.duration * 1000);
    setTimeout(() => this.close(), this.duration * 1000);
  },
});
