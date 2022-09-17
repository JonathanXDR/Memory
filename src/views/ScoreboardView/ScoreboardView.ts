import { ScoreBaseDTO } from "@/dto/ScoreBaseDTO";
import ApiService from "@/services/ApiService";
import Vue from "vue";

export default Vue.extend({
  name: "ScoreboardView",
  components: {},
  data() {
    return {
      loading: true,
      scores: [] as ScoreBaseDTO[],
    };
  },
  async created() {
    await this.loadScores();
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    async loadScores() {
      const scores = await ApiService.getScores();
      this.scores = scores
        .sort((a, b) => (a.score < b.score ? -1 : 1))
        .map((score, index) => {
          score.rank = index + 1;
          return score;
        });
    },
  },
});
