<template>
  <form class="case-lookup-form">
    <div class="row caseid-input-container">
      <div
      :class="{ "is-error" : userNameValid }"
        class="form-textbox large-6 medium-6 small-12 case-id-input"
      >
        <input
          data-testid="case-id"
          type="text"
          class="form-textbox-input"
          id="case-id"
          aria-label="Fallnummer oder Reparatur-ID eingeben"
          aria-invalid="true"
          aria-describedby="case-id_error"
          value=""
          control-id="ControlID-1"
        /><label
          for="case-id"
          class="form-textbox-label"
          aria-hidden="true"
          id="case-id_label"
          >Fallnummer oder Reparatur-ID eingeben</label
        >
        <div
        v-if="userNameValid"
          class="form-message-wrapper form-error-inline-message"
          id="case-id_error"
        >
          <span class="visuallyhidden">Error:</span
          ><span class="form-message"
            ><p>Gib eine Fallnummer oder Reparatur-ID ein.</p></span
          >
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="button button-super case-lookup-submit"
      disabled=""
      control-id="ControlID-2"
    >
      Weiter
    </button>
  </form>
</template>

<script lang="ts" src="./InputValidation.ts"></script>
<style scoped src="./InputValidation.css"></style>
