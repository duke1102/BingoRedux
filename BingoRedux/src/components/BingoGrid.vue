<template>
  <section name="bingogrid" id="bingoPage">
      <table class="table" id="bingo">
        <tbody>
          <tr>
            <td>TL-BR</td>
            <td>COL1</td>
            <td>COL2</td>
            <td>COL3</td>
            <td>COL4</td>
            <td>COL5</td>
          </tr>
          <tr :rownum="1">
            <td>ROW 1</td>
            <td>{{bingoRows[0]}}</td>
            <td>{{bingoRows[1]}}</td>
            <td>{{bingoRows[2]}}</td>
            <td>{{bingoRows[3]}}</td>
            <td>{{bingoRows[4]}}</td>
          </tr>
          <tr :rownum="2">
            <td>ROW 2</td>
            <td>{{bingoRows[5]}}</td>
            <td>{{bingoRows[6]}}</td>
            <td>{{bingoRows[7]}}</td>
            <td>{{bingoRows[8]}}</td>
            <td>{{bingoRows[9]}}</td>
          </tr>
          <tr :rownum="3">
            <td>ROW 3</td>
            <td>{{bingoRows[10]}}</td>
            <td>{{bingoRows[11]}}</td>
            <td>{{bingoRows[12]}}</td>
            <td>{{bingoRows[13]}}</td>
            <td>{{bingoRows[14]}}</td>
          </tr>
          <tr :rownum="4">
            <td>ROW 4</td>
            <td>{{bingoRows[15]}}</td>
            <td>{{bingoRows[16]}}</td>
            <td>{{bingoRows[17]}}</td>
            <td>{{bingoRows[18]}}</td>
            <td>{{bingoRows[19]}}</td>
          </tr>
          <tr :rownum="5">
            <td>ROW 5</td>
            <td>{{bingoRows[20]}}</td>
            <td>{{bingoRows[21]}}</td>
            <td>{{bingoRows[22]}}</td>
            <td>{{bingoRows[23]}}</td>
            <td>{{bingoRows[24]}}</td>
          </tr>
          <tr>
            <td>BL-TR</td>
            <td colspan="5" style="display:none;"></td>
          </tr>
        </tbody>
      </table>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Watch } from "vue-property-decorator";
import axios from 'axios';

@Component
export default class BingoGrid extends Vue {
  bingoRows: String[] = [];
  data () {
    return {
      bingoRows: [
      ]
    }
  }


  mounted () {
    axios.get('./data/bingocards.json').then((response) => {
      let cards: Object[] = response.data.Cards;
      let pCard: any;
      let rngList: number[] = [];
      let rngPick: number;

      for (let j = 0; j < 25; j++) {
        var temp = Math.floor(Math.random() * cards.length);
        if (rngList.indexOf(temp) == -1) {
            rngList.push(temp);
        } else {
          j--;
        }
      }

      for (let i = 0; i < 25; i++) {
        pCard = cards[rngList[i]];
        this.bingoRows.push(pCard.Text);
      }
      console.log(this.bingoRows);
    })
  }



}
</script>