<template>
  <div id="home" class="container">
    <LoadingSpinner v-if="loading" />

    <div
      class="game-header divider row flex-items-xs-between flex-items-xs-middle margin-v-4 padding-bottom-4"
    >
      <div class="score">
        <p class="margin-bottom-0 font--semi-bold">Time: {{ time }}</p>
        <p class="margin-bottom-0 font--semi-bold">Turns: {{ turns }}</p>
      </div>
      <h1 class="hidden-sm-down margin-0">Memory</h1>
      <sdx-button label="Reset" @click="resetGame()"></sdx-button>
    </div>
    <div class="cards row flex-items-xs-center full-width--mobile-only">
      <card
        class="memory-card col-xs-auto margin-bottom-1"
        v-for="(card, index) in cards"
        :card="card"
        :key="index"
        :class="{ flipped: card.flipped, found: card.found }"
        @click.native="flipCard(card)"
      ></card>
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
      <sdx-dialog-toggle v-if="showModal">
        <sdx-button id="closable-modal-opener" label="Open closable modal"></sdx-button>
      </sdx-dialog-toggle>

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

<script src="./Home.ts" lang="ts"></script>
<style src="./Home.css" />
