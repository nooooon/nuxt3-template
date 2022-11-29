<template>
  <NuxtLayout>
    <div class="app">
      <h1>My Template</h1>
      
      <NuxtPage />

      <NavLinks />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

import { isLargeScreen, isMobileScreen } from 'assets/js/mediaQuery'

onMounted(() => {

  window.onload = () => {
    document.addEventListener('touchstart',function(){})
  }

})

watchEffect(() => {
  // console.log("isMobileScreen: ", isMobileScreen.value)
})
</script>


<style lang="scss">
@import "@/assets/sass/setting";

.app {
  color: $color-primary;
}
</style>