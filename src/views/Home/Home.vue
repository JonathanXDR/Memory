<template>
  <div id="home" class="container">
    <!-- <LoadingSpinner v-if="loading" /> -->
    <div class="game-header row flex-items-xs-between flex-items-xs-middle margin-v-4">
      <div class="score">
        <p>Score:</p>
        <p>Time:</p>
      </div>
      <h1 class="hidden-xs-down">Memory</h1>
      <sdx-button label="Reset"></sdx-button>
    </div>
    <div class="cards row flex-items-xs-center full-width--mobile-only">
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>

      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>

      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>

      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
      <card class="col-xs-auto margin-bottom-1"></card>
    </div>
  </div>
</template>

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.css" />
