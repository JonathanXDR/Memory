<template>
  <div
    class="notification-header notification--confirmation"
    :class="{ 'notification--open': isOpen }"
  >
    <div class="notification__content">
      <div class="notification__body">{{ message }}</div>
      <button class="notification__close notification-cancel" @click="close" aria-label="Close">
        <i class="icon icon-022-close" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./SuccessNotification.ts"></script>
<style src="./SuccessNotification.css"></style>
