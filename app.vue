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
import { Random, RandomInt } from './assets/js/libs/Random';


onMounted(() => {

  window.onload = () => {
    console.log("i load")
    document.addEventListener('touchstart',function(){})
  }

  for(let i = 0; i < 100; i++){

    console.log(RandomInt(0, 10))
  }
})
</script>


<style lang="scss">
@import "@/assets/sass/setting";

.app {
  color: $color-primary;
}
</style>