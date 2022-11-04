import { defineComponent } from "vue";
import json from "@/assets/data/data.json";
import ApiService from "@/services/ApiService";
import ExclamationmarkCircle from "@/components/Icons/ExclamationmarkCircle.vue";

export default defineComponent({
  name: "FormValidation",
  props: ["score"],
  components: {
    ExclamationmarkCircle,
  },
  data() {
    return {
      data: json.components[0].data[3].data,
      userName: "",
    };
  },
  computed: {
    formValid: function () {
      return this.userName;
    },
  },
  methods: {
    addResults(): void {
      if (this.formValid && this.userName) {
        ApiService.addScore({
          userName: this.userName,
          score: this.score,
        });
        this.resetGame();
        // this.displayNotificationHeader(
        //   "Score successfully saved!",
        //   "confirmation"
        // );
      }
    },

    setUserName(userName: string) {
      this.userName = userName;
      this.formValid = userName.length > 0;
    },

    resetUserName() {
      this.userName = "";
      this.formValid = undefined;
    },
  },
});
