<script setup>
import { ref, watchEffect } from 'vue'

const { items, sortby, ascending } = defineProps({
  items: Array,
  sortby: Number,
  ascending: Boolean
})

const emit = defineEmits([ 'close', 'clear', 'filter' ])

const srt = ref(-1)
const asc = ref(true)

watchEffect(() => {
  srt.value = sortby
  asc.value = ascending
})

const close = () => emit('close')
const clear = () => emit('clear')
const filter = () => emit('filter', { sortby: srt.value, ascending: asc.value })
</script>
<template>
  <div class="w">
    <div class="c">
      <h3>
        <icon icon="filter" />Filter
      </h3>
      <div class="h">
        <div
          v-for="(i, k)  in items"
          :key="i"
          @click="srt = k"
          :class="srt == k ? 'at' : ''"
        >{{ i }}</div>
      </div>
      <div class="h teal">
        <div @click="asc = true" :class="asc ? 'at' : ''">Ascending</div>
        <div @click="asc = false" :class="!asc ? 'at' : ''">Descending</div>
      </div>
      <div class="a">
        <div class="wcl">
          <button @click="clear" class="cl">Clear</button>
        </div>
        <button @click="close" class="cc">Cancel</button>
        <button @click="filter" class="fl">Filter</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.w {
  @apply w-screen h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.6);

  .c {
    @apply w-fit p-4 bg-white rounded-xl  overflow-y-auto my-2;
    min-width: 250px;

    h3 {
      @apply text-gray-700 font-bold mb-6;
      svg {
        @apply mr-1;
      }
    }

    .h {
      @apply grid justify-start items-center mb-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4;

      div {
        @apply cursor-pointer border border-blue-900 py-1 px-4 rounded-full mr-2 mb-2 bg-white text-blue-900;

        &.at {
          @apply border-blue-600 bg-blue-600 text-blue-100;
        }
      }

      &.teal {
        div {
          @apply border-teal-900 bg-white text-teal-900;

          &.at {
            @apply border-teal-600 bg-teal-600 text-teal-100;
          }
        }
      }
    }

    .a {
      @apply w-full flex flex-row;
      .wcl {
        @apply flex-1 mr-1;
      }

      button {
        @apply py-1 px-4 rounded;
        &.cl {
          @apply bg-red-600 text-red-100;
        }

        &.cc {
          @apply mr-1 bg-gray-300 text-gray-900;
        }

        &.fl {
          @apply bg-blue-700 text-blue-100;
        }
      }
    }
  }
}
.dark {
  .w {
    background: rgba(0, 0, 0, 0.8);

    .c {
      @apply bg-gray-900;

      h3 {
        @apply text-gray-300;
      }

      .h {
        div {
          @apply border-blue-400 bg-gray-900 text-blue-400;

          &.at {
            @apply border-blue-400 bg-blue-400 text-gray-900;
          }
        }

        &.teal {
          div {
            @apply border-teal-600 bg-gray-900 text-teal-600;

            &.at {
              @apply border-teal-600 bg-teal-600 text-gray-900;
            }
          }
        }
      }

      .a {
        button {
          &.cl {
            @apply bg-gray-900 text-red-400 border border-red-400;
          }

          &.cc {
            @apply mr-1 bg-gray-300 text-gray-900;
          }

          &.fl {
            @apply bg-blue-500 text-gray-900;
          }
        }
      }
    }
  }
}
</style>