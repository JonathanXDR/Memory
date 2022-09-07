import { ScoreBaseDTO } from '@/dto/ScoreBaseDTO';
import ApiService from '@/services/ApiService';
import Vue from 'vue';
import LoadingSpinner from '../../components/LoadingSpinnerItem/LoadingSpinnerItem.vue';

// import Table from '@swisscom/sdx/dist/es6/table/Table';
// new Table(document.querySelector('#my-table') as HTMLTableElement);

export default Vue.extend({
  name: 'ScoreboardView',
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loading: true,
      results: [] as ScoreBaseDTO[],
      // ranks: [] as number[],
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
      console.log(results);
      this.results = results;

      this.results
        // .sort((a, b) => b.score - a.score)
        .forEach((result, index) => {
          result.rank = index + 1;
        });
    },
  },
});
