<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  message: String,
})

</script>
<template>
  <div class="c" >
    <icon icon="triangle-exclamation" />
    <p class="message">{{ message }}</p>
  </div>
</template>
<style lang="scss" scoped>
.c {
  @apply flex flex-col items-center justify-center;

  svg {
    @apply text-4xl text-red-500 mt-12 mb-6;
  }
  .message {
    @apply text-base text-gray-700;
    
  }
}
</style>