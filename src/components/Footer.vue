<script setup>

let year = new Date(Date.now()).getFullYear();
if (year < 2022) year = 2022;

</script>
<template>
  <div class="w">
    <div class="c">
      <slot>
        <div>
          <h1>C {{ year }}</h1>
          <p>This is a Footer.</p>
        </div>
      </slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/styles/variables.scss";
.w {
  @apply w-full flex flex-row items-center justify-center;
  .c {
    @apply w-full flex flex-col items-center justify-between py-12 px-4 border-t text-sm text-center text-gray-400;
    max-width: $max-width;
  }
}
</style>