<template>
  <div class="case-lookup-container theme-dark">
    <form class="case-lookup-form">
      <div
        v-for="(input, index) in data.inputs"
        :key="index"
        class="caseid-input-container"
      >
        <div
          :class="{ 'is-error': !formValid }"
          class="form-textbox large-6 medium-6 small-12 case-id-input"
        >
          <input
            v-model.trim="userName"
            data-testid="case-id"
            type="text"
            maxlength="30"
            :class="{ 'form-textbox-entered': userName }"
            class="form-textbox-input"
            id="case-id"
            aria-label="Fallnummer oder Reparatur-ID eingeben"
            aria-invalid="true"
            aria-describedby="case-id_error"
            control-id="ControlID-1"
          /><label
            for="case-id"
            class="form-textbox-label"
            aria-hidden="true"
            id="case-id_label"
            >{{ input.placeholder }}</label
          >
          <div
            v-if="!formValid"
            class="form-message-wrapper form-error-inline-message"
            id="case-id_error"
          >
            <component
              v-if="input.validation.icon"
              :is="input.validation.icon"
            />
            <span class="form-message"
              ><p>{{ input.validation.errorMessage }}</p></span
            >
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="button button-super case-lookup-submit"
        :disabled="!formValid"
        @click="addResults()"
        control-id="ControlID-2"
      >
        Weiter
      </button>
    </form>
  </div>
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
</template>

<script lang="ts" src="./InputValidation.ts"></script>
<style scoped src="./InputValidation.css"></style>
