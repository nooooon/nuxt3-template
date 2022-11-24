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

onMounted(() => {

  window.onload = () => {
    document.addEventListener('touchstart',function(){})
  }
})
</script>


<style lang="scss">
@import "@/assets/sass/setting";

.app {
  color: $color-primary;
}
</style>