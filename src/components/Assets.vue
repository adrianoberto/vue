<template>

    <h2>Ações</h2>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Ativo</th>                
                <th scope="col">Qte.</th>
                <th scope="col">Preço Médio</th>
                <th scope="col">Patrimônio</th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="(asset, index) in stocks" :key="index">
                <th scope="row">{{ index }}</th>
                <td>{{ asset._id }}</td>                
                <td>{{ asset.amount }}</td>
                <td>{{ formatMoney(asset.avgPrice) }}</td>
                <td>{{ formatMoney(asset.totalPrice) }}</td>      
            </tr>
        </tbody>
    </table>

    <br>
    <br>
    <br>
    <br>

    <h2>Fundos Imobiliários</h2>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Ativo</th>                
                <th scope="col">Qte.</th>
                <th scope="col">Preço Médio</th>
                <th scope="col">Patrimônio</th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="(asset, index) in fiis" :key="index">
                <th scope="row">{{ index }}</th>
                <td>{{ asset._id }}</td>                
                <td>{{ asset.amount }}</td>
                <td>{{ formatMoney(asset.avgPrice) }}</td>
                <td>{{ formatMoney(asset.totalPrice) }}</td>      
            </tr>
        </tbody>
    </table>

</template>


<script>
import WalletDataService from "../services/WalletDataService";

export default {
  name: 'Assets',
  props: {
    msg: String
  },
  data() {
      return {
          resume: null,
          fiis: [],
          stocks: []
      };
  },
  methods: {
      formatMoney(value) {
          var valueRounded = Math.round((value + Number.EPSILON) * 100) / 100;
          return `R$ ${valueRounded.toFixed(2).toString().replace('.',',')}`
      },
      getAssets() {
          WalletDataService.getFIIs()
            .then(response => {
                this.fiis = response.data;                
            })
            .catch(e => {
                console.log(e)
            });

          WalletDataService.getStocks()
            .then(response => {
                this.stocks = response.data;                
            })
            .catch(e => {
                console.log(e)
            });
      }
  },
  mounted() {
      this.getAssets();
  }
}
</script>

<style>
</style>