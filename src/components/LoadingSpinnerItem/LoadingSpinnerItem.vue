<template>
  <div>
    <div class="containerSpinner">
      <sdx-loading-spinner size="large" sr-hint="Loading. Please wait."></sdx-loading-spinner>
    </div>
    <div class="backdrop backdrop--open"></div>
  </div>
</template>

<style scoped>
.containerSpinner {
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
</style>
