<template>
  <section>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" style="width: 25%">{{msg}}</div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>