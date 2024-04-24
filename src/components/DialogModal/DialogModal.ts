import json from "@/assets/data/data.json";
import ExclamationmarkCircle from "@/components/icons/ExclamationmarkCircle.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DialogModal",
  props: ["score"],
  emits: ["submitResults"],
  components: {
    ExclamationmarkCircle,
  },
  data() {
    return {
      data: json.components[0].data[2].data,
      modalOpen: false,
      userName: "",
    };
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
  },
  computed: {
    formValid: function () {
      return this.userName;
    },
  },
});
