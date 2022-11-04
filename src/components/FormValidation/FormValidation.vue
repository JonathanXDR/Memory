<template>
  <div class="case-lookup-container">
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
          /><label
            for="case-id"
            class="form-textbox-label"
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
              class="form-message-icon"
            />
            <span
              :class="{ 'form-error-inline-message': !formValid }"
              class="form-message"
              ><p>{{ input.validation.errorMessage }}</p></span
            >
          </div>
        </div>
      </div>
      <button
        v-for="(button, index) in data.buttons"
        :key="index"
        type="submit"
        class="button button-super case-lookup-submit"
        :disabled="!formValid"
        @click="addResults()"
      >
        {{ button.label }}
      </button>
    </form>
  </div>
</template>

<script lang="ts" src="./FormValidation.ts"></script>
<style scoped src="./FormValidation.css"></style>
