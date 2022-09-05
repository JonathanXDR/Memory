<template>
  <div>
    <NavbarItem />
    <!-- <SuccessNotification :message="this.msessage" :open="success" :close="closePopUp" /> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script src="./App.ts" lang="ts"></script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
