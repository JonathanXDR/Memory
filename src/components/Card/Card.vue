<template>
  <div id="card" class="memory-card" @click="myFilter" v-bind:class="{ active: isActive }">
    <sdx-card ref="sdx-card-front" class="front" background="grey"></sdx-card>
    <sdx-card
      ref="sdx-card-back"
      class="back"
      background="grey"
      image-src="https://picsum.photos/200"
    ></sdx-card>
  </div>
</template>

<script src="./Card.ts" lang="ts"></script>
<style src="./Card.css" />
