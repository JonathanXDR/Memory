import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Counter',
})
export default class Counter extends Vue {
  private count = 0;

  private incrementCount() {
    this.count++;
  }
}
