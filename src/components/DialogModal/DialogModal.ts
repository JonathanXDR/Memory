import { defineComponent } from "vue";
import FormValidation from "@/components/FormValidation/FormValidation.vue";
import json from "@/assets/data/data.json";

export default defineComponent({
  name: "DialogModal",
  props: ["score"],
  components: {
    FormValidation,
  },
  data() {
    return {
      data: json.components[0].data[2].data,
      modalOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
  },
});
