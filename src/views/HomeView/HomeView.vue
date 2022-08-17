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
        class="col-md-3 col-xs-12 margin-top-2 row flex-items-xs-center"
        v-for="(card, index) in cards"
        :key="index"
      >
        <card-item :card="card" @clickCallback="() => flipCard(index)"></card-item>
      </div>
    </div>

    <sdx-dialog
      label="Congratulations! You won!"
      type="closable-modal"
      id="closable-modal-example"
      display-change-callback="
    if (arguments[0] === 'open') document.querySelector('#first-input-element').doFocus();
    if (arguments[0] === 'closing') document.querySelector('#closable-modal-opener').doFocus();
  "
    >
      <sdx-dialog-toggle>
        <sdx-button id="closable-modal-opener" label="Open closable modal"></sdx-button>
      </sdx-dialog-toggle>

      <sdx-dialog-content v-if="showSplash" class="col-md-6">
        <p>Total Score: {{ score }}</p>
        <p>
          <sdx-input id="first-input-element" label="Enter name"></sdx-input>
        </p>

        <sdx-button-group>
          <sdx-button
            label="Submit"
            onclick="document.getElementById('closable-modal-example').close()"
            @click="resetGame()"
          ></sdx-button>
        </sdx-button-group>
      </sdx-dialog-content>
    </sdx-dialog>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
