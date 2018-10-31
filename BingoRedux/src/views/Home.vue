<template>
  <div id="app">
    <div class="container" id="bingoPage">
      <div class="py-5 text-center">
        <h2>Bingo</h2>
      </div>
      <BingoGrid />
      <div><router-link to="/editor">Bingo Editor</router-link></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BingoGrid from '@/components/BingoGrid.vue'
import BootstrapVue from "bootstrap-vue";
export default {
  name: 'home',
  components: {
    BingoGrid
  }
}
</script>




