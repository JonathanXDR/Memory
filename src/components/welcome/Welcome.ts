import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'Welcome',
})
export default class Welcome extends Vue {
  @Prop(String) private readonly welcomeMessage: string | undefined;
}
