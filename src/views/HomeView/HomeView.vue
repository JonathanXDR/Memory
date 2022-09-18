<template>
  <div id="home">
    <section class="ac-ln-content">
      <div class="menu">
        <div class="score">
          <p>Time: {{ timeString }}</p>
          <p>Turns: {{ turns }}</p>
        </div>
        <button
          :disabled="onCoolDown"
          @click="resetGame()"
          class="icon-wrapper button button-elevated hero-button"
        >
          <span class="icon-copy">Buy</span>
        </button>
      </div>

      <div class="cards">
        <div class="card-container" v-for="(card, index) in cards" :key="index">
          <CardTile
            :card="card"
            @clickCallback="() => flipCard(index)"
          ></CardTile>
        </div>
      </div>
    </section>

    <!-- <div ref="modal" label="Congratulations! You won!" type="closable-modal">
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
    </div> -->
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style src="./HomeView.css"></style>
