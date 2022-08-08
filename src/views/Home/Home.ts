import Vue from 'vue';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      colors: [
        {
          name: 'green',
          light: '.int-green',
          dark: '.int-green--active',
        },
        {
          name: 'red',
          light: '.int-red',
          dark: '.int-red--active',
        },
        {
          name: 'orange',
          light: '.int-orange',
          dark: '.int-orange--active',
        },
        {
          name: 'turquoise',
          light: '.int-turquoise',
          dark: '.int-turquoise--active',
        },
        {
          name: 'azure',
          light: '.int-azure',
          dark: '.int-azure--active',
        },
        {
          name: 'iris',
          light: '.int-iris',
          dark: '.int-iris--active',
        },
        {
          name: 'orchid',
          light: '.int-orchid',
          dark: '.int-orchid--active',
        },
        {
          name: 'pink',
          light: '.int-pink',
          dark: '.int-pink--active',
        },
      ],
    };
  },
});

import { Stopwatch } from 'ts-stopwatch';

const stopwatch = new Stopwatch();

stopwatch.start();
// imagine 100 ms worth of code execution
stopwatch.stop();
// imagine 100 ms worth of code execution (ignored)
stopwatch.start();
// imagine 100 ms worth of code execution
stopwatch.stop();
// imagine 100 ms worth of code execution (ignored)

stopwatch.getTime();
// returns 200
// (amount of time the stopwatch has been running)
