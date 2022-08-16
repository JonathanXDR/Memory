<template>
  <div>
    <div class="front"></div>
    <div class="back">
      <img class="cardImg" :src="card.url" :alt="card.title" />
    </div>
    {{ card.flipped }}

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
