<template>
  <div>
    <sdx-card ref="sdx-card-front" class="front" background="grey"></sdx-card>
    <sdx-card
      ref="sdxCardBack"
      class="back"
      background="grey"
      :image-src="card.url"
      :image-alt="card.title"
    ></sdx-card>
  </div>
</template>

<script src="./CardItem.ts" lang="ts"></script>
<style src="./CardItem.css" />
