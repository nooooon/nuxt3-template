<template>
  <div class="l-layout error">

    <div class="error__info">
      Status: {{error.statusCode}} <br>
      Message: {{error.message}}
    </div>


    <NuxtLink to="/">Top</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const error: any = useError()

console.log(error.value.statusCode)
useHead({
  title: error.value.statusCode
})

if (error.value.statusCode === 404 || '404') {
  error.value.message = 'Oops! Page not found!!!!';
}

</script>

<style lang="scss" scoped>

.error {
  &__info {
    color: #f00;
    margin-bottom: 40px;
  }

}

</style>