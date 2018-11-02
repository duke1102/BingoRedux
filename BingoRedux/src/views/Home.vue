<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="py-5 text-center">
          <h2>{{BingoTitle}}</h2>
          <p class="text-muted">{{BingoSubtitle}}</p>
        </div>
      </div>
      <div class="col-4">
        <div class="py-5 text-center">
          <h2>About</h2>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <BingoGrid />
      </div>
      <div class="col-4">
        <p>{{AboutSection}}</p>
        <div>
          <router-link v-show="false" to="/editor">Bingo Editor</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BingoGrid from '@/components/BingoGrid.vue'
  import BootstrapVue from "bootstrap-vue";
  import axios from 'axios';

  export default {
    name: 'home',
    components: {
      BingoGrid
    },
    data() {
      return {
        BingoTitle: null,
        BingoSubtitle: null,
        AboutSection: null
      }
    },
    mounted() {
      axios.get('./data/config.json').then((response) => {
        this.BingoTitle = response.data.Title;
        this.BingoSubtitle = response.data.Subtitle;
        this.AboutSection = response.data.AboutSectionText;
      });
    },
  }
</script>