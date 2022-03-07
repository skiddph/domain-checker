<template>
  <div class="c">
    <icon icon="spinner" />
  </div>
</template>
<style lang="scss" scoped>
.c {
  @apply flex flex-row items-center justify-center my-16;
  
  svg {
    @apply text-6xl text-gray-500;
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
</style>