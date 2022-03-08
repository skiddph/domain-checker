<template>
  <div class="c">
    <h3>Type your query.</h3>
    <h3>Select Vendor (ex: freenom).</h3>
    <h3>Press Search button.</h3>
    <p>
      <span>Disclaimer:</span>
      This page is for
      <b>demo</b> use only, and is
      <b>not</b> meant to gain profit. We do
      <b>not</b> have affiliation with any of the vendors, nor control on how they collect your data. <br />
      <b>use at your own risk.</b>
    </p>
  </div>
</template>
<style lang="scss" scoped>
.c {
  @apply w-full h-full flex flex-col items-center justify-center my-16 text-gray-400;

  p {
    @apply mt-16 text-sm text-yellow-600 text-center w-3/4 md:w-1/2;

    b {
      @apply uppercase;
    }
    span {
      @apply font-bold;
    }
  }
}
</style>