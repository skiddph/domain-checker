<script setup>
import { ref, watchEffect } from 'vue'
import Filter from '@/components/Filter.vue'

const { items, website, title } = defineProps({
  items: Array,
  website: String,
  title: String,
})

const raw = ref(items)
const result = ref([])
const srt = ref(-1)
const asc = ref(true)
const oflt = ref(false)
const fls = [ 'Availability', 'Domain', 'Currency', 'Price' ]

const fH = (e) => {
  oflt.value = false
  srt.value = e.sortby
  asc.value = e.ascending
  result.value = calc(raw.value)
}

const fcH = () => {
  oflt.value = false
  srt.value = -1
  asc.value = true
  result.value = calc(raw.value)
}

const pipes = [
  // to array
  (is) => {
    const res = []
    for (let i of is) res.push([ i.available, i.sld + i.tld, i.currency, i.price ])
    return res
  },
  // sort
  (is) => {
    if (srt.value >= 0) is.sort((a, b) => {
      if (a[ srt.value ] > b[ srt.value ]) {
        return asc.value ? 1 : -1
      } else if (a[ srt.value ] < b[ srt.value ]) {
        return asc.value ? -1 : 1
      } else {
        return 0
      }
    })
    return is
  }
]

const calc = (raw) => {
  const res = []
  for (let i = 0; i < pipes.length; i++) {
    try {
      const param = i === 0 ? raw : res[ i - 1 ]
      res.push(pipes[ i ](param))
    } catch (e) {
      return null
    }
  }
  return res[ res.length - 1 ]
}

watchEffect(() => {
  result.value = calc(raw.value)
})

</script>
<template>
  <Filter
    v-if="oflt"
    @close="oflt = false"
    :items="fls"
    @filter="fH"
    @clear="fcH"
    :ascending="asc"
    :sortby="srt"
  />
  <div class="c">
    <div class="r">
      <span class="rc">{{ items.length }}</span>
      <span>Results</span>
      <button class="f" @click="oflt = !!!oflt">
        <icon icon="filter" />Filter
      </button>
      <span class="l">
        Visit website at
        <a target="_blank" :href="website">{{ title }}</a>
      </span>
    </div>
    <table>
      <thead>
        <th>Domain</th>
        <th>Price</th>
      </thead>
      <tr v-for="(  r, i  ) in result" :key="i" :class="r[ 0 ] ? '' : 'ua'">
        <td>{{ r[ 1 ] }}</td>
        <td>{{ r[ 2 ] }} {{ r[ 3 ] }}</td>
      </tr>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.c {
  @apply w-full flex flex-col items-start justify-center mt-4;

  .r {
    @apply w-full mb-1 flex flex-row items-center justify-center;
    .f {
      @apply text-sm px-4 font-semibold hover:underline text-gray-600;
      svg {
        @apply mr-1;
      }
    }
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
  table {
    @apply w-full border-t border-gray-300 text-gray-700;
    border-collapse: collapse;

    th {
      @apply px-2 py-2 text-gray-700;
    }

    td {
      @apply px-2 py-1;
    }

    .ua {
      @apply text-red-400;
    }

    td:last-child,
    th:last-child {
      @apply text-right;
    }

    tr {
      @apply border-t border-gray-200;
    }
  }
}
.dark {
  .c {
    .r {
      .f {
        @apply text-gray-300;
      }
      span {
        @apply text-gray-400;
      }
      .rc {
        @apply text-gray-300;
      }
      .l {
        a {
          @apply text-blue-400;
        }
      }
    }
  }
  table {
    @apply border-gray-600 text-gray-400;

    th {
      @apply text-gray-300;
    }

    .ua {
      @apply text-red-400;
    }

    tr {
      @apply border-gray-500;
    }
  }
}
</style>