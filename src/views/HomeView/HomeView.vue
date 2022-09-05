<template>
  <div id="home" class="container full-width--mobile-only">
    <LoadingSpinnerItem v-if="loading" />

    <div
      class="game-header divider row flex-items-xs-between flex-items-xs-middle margin-v-4 padding-bottom-4 full-width--mobile-only"
    >
      <!-- Debug Menu -->
      <div class="major-wrapper">
        <sdx-button
          @click="startGame()"
          label="<Debug> Start Game"
          class="margin-bottom-2"
        ></sdx-button>
        <sdx-button
          @click="finishGame()"
          label="<Debug> Finish Game"
          class="margin-bottom-2"
        ></sdx-button>
        <p class="margin-bottom-0 font--semi-bold">Total score: {{ score }}</p>
      </div>
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
        <div class="row">
          <p>Total Score: {{ score }}</p>
          <sdx-input
            v-if="rerender"
            ref="input"
            label="Username"
            type="text"
            placeholder="Enter Username..."
            maxlength="30"
            :valid="userNameValid"
            :changeCallback.prop="setUserName"
            :hitEnterCallback="userNameValid === true ? resetGame() : null"
            :validation-message="
              userNameValid === undefined || userNameValid === true
                ? undefined
                : 'Please enter a valid username'
            "
          ></sdx-input>
          <sdx-button-group class="margin-top-4">
            <sdx-button
              label="Submit"
              type="submit"
              :disabled="!userNameValid"
              @click="addResults()"
            ></sdx-button>
          </sdx-button-group>
        </div>
      </sdx-dialog-content>
    </sdx-dialog>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
