<script setup>
import { watch, ref } from 'vue'
const props = defineProps({
  items: Array,
  website: String,
  title: String,
})
</script>
<template>
  <div class="c">
    <div class="r">
      <span class="rc">{{ items.length }}</span>
      <span>Results</span>
      <span class="l">
        Visit website at
        <a target="_blank" :href="website">{{ title }}</a>
      </span>
    </div>
    <div class="is">
      <div class="i">
        <icon icon="circle" />
        <span class="d">
          <b>Domain</b>
        </span>
        <span class="p">
          <b>Price</b>
        </span>
      </div>
      <div class="i" v-for="( i, k ) in items" :key="k">
        <icon icon="circle" :class="i.available ? 't' : 'f'" />
        <span class="d">{{ i.sld }}{{ i.tld }}</span>
        <span class="p">{{ i.currency }} {{ i.price }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.c {
  @apply w-full flex flex-col items-start justify-center mt-4;

  .r {
    @apply w-full mb-2 flex flex-row items-center justify-center;
    span {
      @apply text-gray-500;
    }
    .rc {
      @apply mr-2 text-gray-400;
    }
    .l {
      @apply flex-1 text-right text-sm text-gray-700;

      a {
        @apply text-blue-400 hover:underline;
      }
    }
  }

  .is {
    @apply w-full border border-gray-300;
    .i {
      @apply flex flex-row items-center justify-start;

      &:not(:last-child) {
        @apply border-b border-gray-300;
      }
      svg {
        @apply h-2 border-r border-gray-300 px-4 py-4 md:py-3;
        &.t {
          @apply text-green-500;
        }

        &.f {
          @apply text-red-500;
        }
      }
      .d {
        @apply flex-1 text-gray-700 px-4;
      }
      .p {
        @apply text-gray-500 px-4;
      }
    }
  }
}
</style>