import { defineComponent } from "vue";
import json from "@/assets/data/data.json";
import ApiService from "@/services/ApiService";

export default defineComponent({
  name: "InputValidation",
  props: ["score"],
  data() {
    return {
      data: json,
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
      console.log("hallo");
    },

    resetUserName() {
      this.userName = "";
      this.formValid = undefined;
    },
  },
});
