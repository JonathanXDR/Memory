<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Welcome welcomeMessage="Welcome to Vue.js with TypeScript!"></Welcome>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Welcome from '@/components/Welcome/Welcome.vue';

@Component({
  components: {
    Welcome,
  },
})
export default class Home extends Vue {}
</script>
