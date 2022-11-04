import { defineComponent } from "vue";
import json from "@/assets/data/data.json";

export default defineComponent({
  name: "DialogModal",
  components: {},
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
