<template>
  <div id="home" class="container full-width--mobile-only">
    <div
      class="game-header divider row flex-items-xs-between flex-items-xs-middle margin-v-4 padding-bottom-4 full-width--mobile-only"
    >
      <div class="score">
        <p class="margin-bottom-0 font--semi-bold">Time: {{ timeString }}</p>
        <p class="margin-bottom-0 font--semi-bold">Turns: {{ turns }}</p>
      </div>
      <button
        label="Reset"
        :disabled="onCoolDown"
        @click="resetGame()"
      ></button>
    </div>

    <div
      class="cards row flex-items-xs-center no-gutters padding-0 full-width--mobile-only"
    >
      <div
        class="card-container col-xs-auto"
        v-for="(card, index) in cards"
        :key="index"
      >
        <CardTile
          :card="card"
          @clickCallback="() => flipCard(index)"
        ></CardTile>
      </div>
    </div>

    <div ref="modal" label="Congratulations! You won!" type="closable-modal">
      <div class="col-md-6">
        <div class="margin-bottom-4">
          <p>Total Score: {{ score }}</p>
          <input
            v-if="rerender"
            ref="input"
            label="Username"
            type="text"
            placeholder="Enter Username..."
            maxlength="30"
            :valid="userNameValid"
            :changeCallback.prop="setUserName"
            :hitEnterCallback.prop="addResults"
            :validation-message="
              userNameValid === undefined || userNameValid === true
                ? undefined
                : 'Please enter a valid username'
            "
          />
        </div>
        <button
          label="Submit"
          type="submit"
          :disabled="!userNameValid"
          @click="addResults()"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
import CardTile from '@/components/CardTile/CardTile.vue';
<style src="./HomeView.css"></style>
