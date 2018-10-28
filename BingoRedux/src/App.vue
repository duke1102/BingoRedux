<template>
  <div id="app">
    <div class="container" id="bingoPage">
      <div class="py-5 text-center">
        <h2>Bingo</h2>
      </div>
      <BingoGrid />
    </div>
  </div>
</template>

<script>
  import BingoGrid from "./components/BingoGrid.vue";
  import BootstrapVue from "bootstrap-vue";
  export default {
    name: "app",
    components: {
      BingoGrid
    }
  };
</script>

<style lang="scss">
  @import "@/scss/base.scss";
</style>