import { defineComponent } from "vue";
import InputValidation from "@/components/InputValidation/InputValidation.vue";
import json from "@/assets/data/data.json";

export default defineComponent({
  name: "DialogModal",
  props: ["score"],
  components: {
    InputValidation,
  },
  data() {
    return {
      data: json,
      modalOpen: true,
    };
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
  },
});
