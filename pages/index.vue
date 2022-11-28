<template>
  <div class="top">top</div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

useHead({
  title: "Top",
})

onMounted(() => {

})

</script>

<style lang="scss" scoped>

</style>