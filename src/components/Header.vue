<script setup>
import { ref, watch } from 'vue'
const dm = ref(localStorage.getItem('darkMode') == 'true')

watch(dm, (e) => e ? darkMode() : lightMode())
</script>
<template>
  <div class="w">
    <div class="c">
      <div class="brand">
        <div class="l">
          <img src="/logo.png" alt="logo" title="Skidd PH logo"/>
          <h1 title="App title">Domain Checker</h1>
        </div>
      </div>
      <div class="toggle">
        <icon class="dmt" :icon="dm ? 'toggle-on' : 'toggle-off'" @click="dm = !dm" title="Toggle Dark mode"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.w {
  @apply w-full sticky top-0 z-50 bg-white border-b flex flex-row items-center justify-center;

  .c {
    @apply w-full flex flex-row items-center justify-between py-2 px-4;
    max-width: $max-width;

    .l {
      @apply flex flex-row items-center;

      img {
        @apply w-8 h-8;
      }

      h1 {
        @apply pl-3 text-xl text-gray-600 font-bold;
        font-family: "Fredoka", sans-serif;
      }
    }

    .toggle {
      .dmt {
        @apply text-xl cursor-pointer p-2 bg-inherit rounded-full;
        @apply hover:bg-gray-700 hover:text-gray-100;
        @apply transition-all duration-200;
      }
    }
  }
}
.dark {
  .w {
    @apply bg-gray-900 border-gray-600;
    .c {
      .l {
        h1 {
          @apply text-blue-200;
        }
      }
      .toggle {
        .dmt {
          @apply text-blue-400;
        @apply hover:bg-blue-400 hover:text-gray-900;
        }
      }
    }
  }
}
</style>