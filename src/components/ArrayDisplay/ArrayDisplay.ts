import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'ArrayDisplay',
})
export default class ArrayDisplay extends Vue {
  private items: Array<string> = ['Dog', 'Cat', 'Chicken', 'Parrot', 'Bat'];

  private alertName(name: string) {
    alert(name);
  }
}
