<template>
  <div>
    <section id="technologies">
      <ul class="item-container">
        <CardTile
          v-for="(technologies, index) in data.technologies"
          :key="index"
          :card="technologies"
        />
      </ul>
    </section>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
