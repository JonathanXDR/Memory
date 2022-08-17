<template>
  <div id="home" class="container">
    <LoadingSpinnerItem v-if="loading" />

    <div
      class="game-header divider row flex-items-xs-between flex-items-xs-middle margin-v-4 padding-bottom-4"
    >
      <div class="score">
        <p class="margin-bottom-0 font--semi-bold">Time: {{ timeString }}</p>
        <p class="margin-bottom-0 font--semi-bold">Turns: {{ turns }}</p>
      </div>
      <h1 class="hidden-sm-down margin-0">Memory</h1>
      <sdx-button label="Reset" @click="resetGame()"></sdx-button>
    </div>

    <div class="cards row flex-items-xs-center no-gutters full-width--mobile-only">
      <div
        class="col-xs-12 col-sm-3 margin-top-2 row flex-items-xs-center"
        v-for="(card, index) in cards"
        :key="index"
      >
        <card-item :card="card" @clickCallback="() => flipCard(index)"></card-item>
      </div>
    </div>

    <sdx-dialog ref="modal" label="Congratulations! You won!" type="closable-modal">
      <sdx-dialog-content class="col-md-6">
        <p>Total Score: {{ score }}</p>
        <p>
          <sdx-input abel="Enter name" @keyup.enter="resetGame()"></sdx-input>
        </p>

        <sdx-button-group>
          <sdx-button label="Submit" type="submit" @click="resetGame()"></sdx-button>
        </sdx-button-group>
      </sdx-dialog-content>
    </sdx-dialog>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
