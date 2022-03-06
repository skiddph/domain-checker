<template>
  <div class="w">
    <div class="c">
      <div class="brand">
        <div class="l">
          <img src="/logo.png" alt="logo">
          <h1>Domain Checker</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
  .w {
    @apply w-full sticky top-0 z-50 bg-white shadow-lg flex flex-row items-center justify-center;

    .c {
      @apply w-full flex flex-row items-center justify-between py-3 px-4;
      max-width: $max-width;

      .l {
        @apply flex flex-row items-center;

        img {
          @apply w-8 h-8;
        }

        h1 {
          @apply pl-3 text-xl text-gray-600 font-bold;
          font-family: 'Fredoka', sans-serif;
        }
      }
    }
  }
</style>