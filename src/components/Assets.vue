<template>

    <h1>Assets</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Ativo</th>
                <th scope="col">Tipo</th>
                <th scope="col">Qte.</th>
                <th scope="col">Preço Unit.</th>
                <th scope="col">Preço Total</th>
                <th scope="col">Corretora</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(asset, index) in assets" :key="index">
                <th scope="row">{{ index }}</th>
                <td>{{ asset.ticker.tradingCode }}</td>
                <td>{{ asset.ticker.category.type }}</td>
                <td>{{ asset.amount }}</td>
                <td>R$ {{ asset.unitPrice }}</td>
                <td>R$ {{ asset.totalPrice }}</td>
                <td>{{ asset.stockbroker.shortName }}</td>
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
          assets: []
      };
  },
  methods: {
      getAssets() {
          WalletDataService.getAssets()
            .then(response => {
                this.assets = response.data;
                console.log(response.data)
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