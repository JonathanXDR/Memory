<template>
  <div id="examples">
    <Counter></Counter>
    <ArrayDisplay></ArrayDisplay>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Counter from '@/components/Counter/Counter.vue';
import ArrayDisplay from '@/components/ArrayDisplay/ArrayDisplay.vue';

@Component({
  components: {
    Counter,
    ArrayDisplay,
  },
  name: 'Examples',
})
export default class Examples extends Vue {}
</script>
