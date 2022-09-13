import { ScoreBaseDTO } from '@/dto/ScoreBaseDTO';
import ApiService from '@/services/ApiService';
import Vue from 'vue';
import LoadingSpinner from '../../components/LoadingSpinnerItem/LoadingSpinnerItem.vue';

export default Vue.extend({
  name: 'ScoreboardView',
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loading: true,
      results: [] as ScoreBaseDTO[],
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
      const results = await ApiService.getScores();
      this.results = results;

      this.results
        .sort((a, b) => b.score - a.score)
        .forEach((result, index) => {
          result.rank = index + 1;
        });
    },
  },
});
