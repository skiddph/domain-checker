<script setup>
import { ref, reactive } from 'vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Search from './components/Search.vue';
import Result from './components/Result.vue';
import Error from './components/Error.vue';
import Fallback from './components/Fallback.vue';
import Loading from './components/Loading.vue';

const l = ref(false)
const state = reactive({
  error: false,
  success: false,
  search: false,
  result: [],
  count: 0,
  website: "",
})

const lH = (e) => {
  console.log('loading', e)
  l.value = e
};
const sH = (e) => Object.keys(e).forEach(k => state[ k ] = e[ k ])

</script>

<template>
  <Header />
  <Main>
    <Search @loading="lH" @state="sH" />
    <Result v-if="state.success && !l" :items="state.result" :title="state.title" :website="state.website" />
    <Error v-if="state.error && !l" :message="state.message" />
    <Fallback v-if="!state.success && !state.error && !l" />
    <Loading v-if="l" />
  </Main>
  <Footer />
</template>
