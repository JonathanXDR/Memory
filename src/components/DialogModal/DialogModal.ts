import { defineComponent } from "vue";
import InputValidation from "@/components/InputValidation/InputValidation.vue";
import json from "@/assets/data/data.json";

export default defineComponent({
  name: "DialogModal",
  components: {
    InputValidation,
  },
  data() {
    return {
      data: json,
      modalOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
  },
});
