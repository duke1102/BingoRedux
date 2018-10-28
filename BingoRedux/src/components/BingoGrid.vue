<template>
  <section>
      <table class="table" id="bingo">
        <tbody>
          <tr>
            <td id="tlbr">TL-BR</td>
            <td id="col1">COL1</td>
            <td id="col2">COL2</td>
            <td id="col3">COL3</td>
            <td id="col4">COL4</td>
            <td id="col5">COL5</td>
          </tr>
          <tr v-rownum="1">
            <td id="row1">ROW1</td>
            <td id="slot1"></td>
            <td id="slot2"></td>
            <td id="slot3"></td>
            <td id="slot4"></td>
            <td id="slot5"></td>
          </tr>
          <tr v-rownum="2">
            <td id="row2">ROW2</td>
            <td id="slot6"></td>
            <td id="slot7"></td>
            <td id="slot8"></td>
            <td id="slot9"></td>
            <td id="slot10"></td>
          </tr>
          <tr v-rownum="3">
            <td id="row3">ROW3</td>
            <td id="slot11"></td>
            <td id="slot12"></td>
            <td id="slot13"></td>
            <td id="slot14"></td>
            <td id="slot15"></td>
          </tr>
          <tr v-rownum="4">
            <td id="row4">ROW4</td>
            <td id="slot16"></td>
            <td id="slot17"></td>
            <td id="slot18"></td>
            <td id="slot19"></td>
            <td id="slot20"></td>
          </tr>
          <tr v-rownum="5">
            <td id="row5">ROW5</td>
            <td id="slot21"></td>
            <td id="slot22"></td>
            <td id="slot23"></td>
            <td id="slot24"></td>
            <td id="slot25"></td>
          </tr>
          <tr>
            <td id="bltr">BL-TR</td>
            <td colspan="5" style="display:none;"></td>
          </tr>
        </tbody>
      </table>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class BingoGrid extends Vue {
  @Prop() private msg!: string;
}
</script>