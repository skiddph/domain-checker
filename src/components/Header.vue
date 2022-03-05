<template>
  <div class="__domain-checker__component__header-wrapper">
    <div class="container">
      <div class="brand">
        <div class="logo">
          <img src="/logo.png" alt="logo">
          <h1>Domain Checker</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
  .__domain-checker__component__header-wrapper {
    @apply w-full sticky top-0 z-50 bg-white shadow-lg flex flex-row items-center justify-center;

    .container {
      @apply w-full flex flex-row items-center justify-between py-3 px-4;
      max-width: $max-width;

      .logo {
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