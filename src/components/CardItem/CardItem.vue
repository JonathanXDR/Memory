<template>
  <div class="card-item" :class="{ flipped: card.flipped, found: card.found }">
    <div class="back" :style="`background-image: url('${card.url}')`"></div>
    <div class="front" @click="$emit('clickCallback')"></div>
    <!-- <sdx-card
      v-if="true"
      class="back"
      background="grey"
      object-fit="contain"
      :image-src="card.url"
      :image-alt="card.title"
    ></sdx-card>
    <sdx-card
      @click="$emit('clickCallback')"
      v-else
      class="front component"
      background="grey"
    ></sdx-card> -->
  </div>
</template>
<script src="./CardItem.ts" lang="ts"></script>
<style src="./CardItem.css" />
