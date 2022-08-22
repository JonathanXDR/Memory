<template>
  <div id="home" class="container full-width--mobile-only">
    <LoadingSpinnerItem v-if="loading" />

    <div
      class="game-header divider row flex-items-xs-between flex-items-xs-middle margin-v-4 padding-bottom-4 full-width--mobile-only"
    >
      <div class="score">
        <p class="margin-bottom-0 font--semi-bold">Time: {{ timeString }}</p>
        <p class="margin-bottom-0 font--semi-bold">Turns: {{ turns }}</p>
      </div>
      <sdx-button label="Reset" @click="resetGame()"></sdx-button>
    </div>

    <div class="cards row flex-items-xs-center no-gutters padding-0 full-width--mobile-only">
      <div class="card-container col-xs-auto" v-for="(card, index) in cards" :key="index">
        <card-item :card="card" @clickCallback="() => flipCard(index)"></card-item>
      </div>
    </div>

    <sdx-dialog ref="modal" label="Congratulations! You won!" type="closable-modal">
      <sdx-dialog-content class="col-md-6">
        <p>Total Score: {{ score }}</p>
        <p>
          <sdx-input
            label="Username"
            placeholder="Enter Username..."
            type="text"
            :valid="usernameVaild"
            validation-message="Please enter a valid username"
            required
            v-model.trim="username"
            @keyup.enter="resetGame()"
          ></sdx-input>
        </p>

        <sdx-button-group>
          <sdx-button
            label="Submit"
            type="submit"
            :disabled="!usernameVaild"
            @click="resetGame()"
          ></sdx-button>
        </sdx-button-group>
      </sdx-dialog-content>
    </sdx-dialog>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
