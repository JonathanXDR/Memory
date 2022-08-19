<template>
  <div class="card-item" :class="{ flipped: card.flipped, found: card.found }">
    <div class="back" :style="`background-image: url('${card.url}')`"></div>
    <div class="front" @click="$emit('clickCallback')"></div>
  </div>
</template>
<script src="./CardItem.ts" lang="ts"></script>
<style src="./CardItem.css" />
