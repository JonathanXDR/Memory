import json from "@/assets/data/data.json";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon.vue";

export default {
  name: "RibbonBar",
  components: {
    ChevronRightIcon,
  },
  data() {
    return {
      data: json,
    };
  },
};
