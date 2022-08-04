<template>
  <div id="array-display">
    <h2>Array Display</h2>
    <p>The content of the array is</p>
    <ul>
      <li @click="alertName(item)" v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script src="./ArrayDisplay.ts" lang="ts"></script>
<style src="./ArrayDisplay.css"></style>
