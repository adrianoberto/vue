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
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(asset, index) in stocks" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ asset._id }}</td>
        <td>{{ asset.amount }}</td>
        <td>{{ formatMoney(asset.avgPrice) }}</td>
        <td>{{ formatMoney(asset.totalPrice) }}</td>
        <td>
          <button type="button" class="btn btn-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-card-list"
              viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <br />
  <br />
  <br />
  <br />

  <h2>Fundos Imobiliários</h2>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Ativo</th>
        <th scope="col">Qte.</th>
        <th scope="col">Preço Médio</th>
        <th scope="col">Patrimônio</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(asset, index) in fiis" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ asset._id }}</td>
        <td>{{ asset.amount }}</td>
        <td>{{ formatMoney(asset.avgPrice) }}</td>
        <td>{{ formatMoney(asset.totalPrice) }}</td>
        <td>
          <button type="button" class="btn btn-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-card-list"
              viewBox="0 0 16 16">
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"></path>
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>
import WalletDataService from "../services/WalletDataService";

export default {
  name: "Assets",
  props: {
    msg: String,
  },
  data() {
    return {
      resume: null,
      fiis: [],
      stocks: [],
    };
  },
  methods: {
    formatMoney(value) {
      var valueRounded = Math.round((value + Number.EPSILON) * 100) / 100;
      return `R$ ${valueRounded.toFixed(2).toString().replace(".", ",")}`;
    },
    getAssets() {
      WalletDataService.getFIIs()
        .then((response) => {
          this.fiis = response.data;
        })
        .catch((e) => {
          console.log(e);
        });

      WalletDataService.getStocks()
        .then((response) => {
          this.stocks = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getAssets();
  },
};
</script>

<style>
</style>