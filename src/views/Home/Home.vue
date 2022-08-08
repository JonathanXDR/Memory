<template>
  <div id="home" class="container">
    <!-- <LoadingSpinner v-if="loading" /> -->
    <div class="game-header">
      <div class="score">
        <!-- <p>Score: {{ Score }}</p>
        <p>Time: {{ Time }}</p> -->
      </div>
      <h1>Memory</h1>
      <sdx-button label="Reset"></sdx-button>
    </div>
    <div class="cards row">
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>

      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>

      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>

      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
      <card class="col-xs-12 col-md-3 col-xs-3 margin-bottom-3"></card>
    </div>
  </div>
</template>

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.css" />
