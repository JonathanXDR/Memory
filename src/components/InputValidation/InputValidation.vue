<template>
  <form class="case-lookup-form">
    <div class="caseid-input-container">
      <div class="form-textbox large-6 medium-6 small-12 case-id-input false">
        <input
          data-testid="case-id"
          type="text"
          class="form-textbox-input"
          id="case-id"
          aria-label="Fallnummer oder Reparatur-ID eingeben"
          aria-invalid="false"
          aria-describedby=""
          value=""
        /><label
          for="case-id"
          class="form-textbox-label"
          aria-hidden="true"
          id="case-id_label"
          >Fallnummer oder Reparatur-ID eingeben</label
        >
      </div>
    </div>
    <button
      type="submit"
      class="button button-super case-lookup-submit"
      disabled=""
    >
      Weiter
    </button>
  </form>
</template>

<script lang="ts" src="./InputValidation.ts"></script>
<style scoped src="./InputValidation.css"></style>
