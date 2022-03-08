<script setup>
const props = defineProps({
  message: String,
})

</script>
<template>
  <div class="c">
    <icon icon="triangle-exclamation" />
    <p class="message">{{ message }}</p>
    <p class="cors">
      This might be cause by CORS policy issue. Click this
      <a target="_blank" href="https://cors-anywhere.herokuapp.com/corsdemo">link</a>, request a temporary access and retry your search.
    </p>
  </div>
</template>
<style lang="scss" scoped>
.c {
  @apply flex flex-col items-center justify-center;

  svg {
    @apply text-4xl text-red-500 mt-12 mb-6;
  }
  .message {
    @apply text-base text-red-400;
  }

  .cors {
    @apply text-sm my-12  w-3/4 md:w-1/2 text-center text-gray-500;

    a {
      @apply text-blue-500 hover:underline;
    }
  }
}
</style>