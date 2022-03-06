<template>
  <div class="w">
    <div class="c">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';

.w {
  @apply w-full flex flex-row items-center justify-center;

  .c {
    @apply w-full py-8 px-4;
    max-width: $max-width;
    min-height: 50vh;
  }
}
</style>