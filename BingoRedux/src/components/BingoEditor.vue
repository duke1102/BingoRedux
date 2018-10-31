<template>
  <section name="bingogrid">
      <h1>boop</h1>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop, Component, Watch } from "vue-property-decorator";
import axios from 'axios';

@Component
export default class BingoEditor extends Vue {
  bingoRows: Array<String> = [];
  n: number;
  data () {
    return {
      bingoRows: [
      ],
      n: 0
    }
  }


  @Watch('n')
  onPropertyChanged(value: string, oldValue: string) {
    console.log('new value');
    console.log(value);
    console.log('old value');
    console.log(oldValue);
  }
  mounted () {
    axios.get('./data/bingocards.json').then(response => {
      let cards: Array<Object> = response.data.Cards;
      let pCard: any = null;
      let rngList: Array<number> = [];
      let rngPick: number = null;

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