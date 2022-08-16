<template>
  <div class="card-item">
    <div
      class="back"
      :style="`background-image: url('${card.url}')`"
      v-if="card.flipped || card.found"
    ></div>
    <div class="front" v-else @click="$emit('clickCallback')"></div>
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
