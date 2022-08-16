<template>
  <div id="home" class="container">
    <LoadingSpinnerItem v-if="loading" />

    <div
      class="game-header divider row flex-items-xs-between flex-items-xs-middle margin-v-4 padding-bottom-4"
    >
      <div class="score">
        <p class="margin-bottom-0 font--semi-bold">Time: {{ time }}</p>
        <p class="margin-bottom-0 font--semi-bold">Turns: {{ turns }}</p>
        <p class="margin-bottom-0 font--semi-bold">Total score: {{ score }}</p>
      </div>
      <h1 class="hidden-sm-down margin-0">Memory</h1>
      <sdx-button label="Reset" @click="resetGame()"></sdx-button>
    </div>

    <div class="cards row no-gutters flex-items-xs-center full-width--mobile-only">
      <card-item
        class="memory-card"
        v-for="(card, index) in cards"
        :card="card"
        :key="index"
        :class="{ flipped: card.flipped, found: card.found }"
        @clickCallback="() => flipCard(index)"
      ></card-item>
    </div>

    <sdx-dialog
      v-if="showSplash"
      label="Congratulations! You won!"
      type="closable-modal"
      id="closable-modal-example"
      display-change-callback="
    if (arguments[0] === 'open') document.querySelector('#first-input-element').doFocus();
    if (arguments[0] === 'closing') document.querySelector('#closable-modal-opener').doFocus();
  "
    >
      <!-- <sdx-dialog-toggle>
        <sdx-button id="closable-modal-opener" label="Open closable modal"></sdx-button>
      </sdx-dialog-toggle> -->

      <sdx-dialog-content>
        <p>Score: {{ score }}</p>
        <p>
          <sdx-input id="first-input-element" label="Enter name"></sdx-input>
        </p>

        <sdx-button-group>
          <sdx-button label="New game" @click="resetGame()"></sdx-button>
          <sdx-button
            label="Cancel"
            theme="secondary"
            onclick="document.getElementById('closable-modal-example').close()"
          ></sdx-button>
        </sdx-button-group>
      </sdx-dialog-content>
    </sdx-dialog>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
