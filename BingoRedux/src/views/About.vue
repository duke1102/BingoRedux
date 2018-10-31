<template>
    <div class="container" id="bingoPage">
      <div class="py-5 text-center">
        <h2>Editor</h2>
      </div>
    <BingoEditor />
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import BingoEditor from '@/components/BingoEditor.vue'
import BootstrapVue from "bootstrap-vue";
export default {
  name: 'editor',
  components: {
    BingoEditor
  }
}
</script>