<template>
  <div class="__domain-checker__component__main-wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

.__domain-checker__component__main-wrapper {
  @apply w-full flex flex-row items-center justify-center;

  .container {
    @apply w-full py-8 px-4;
    max-width: $max-width;
    min-height: 50vh;
  }
}
</style>