import http from "../http-common";

class WalletDataService {

  getStocks() {
    return http.get("/wallets/6071434be1db924aa0f2915d/stocks");
  }


  getFIIs() {
    return http.get("/wallets/6071434be1db924aa0f2915d/fiis");
  }

}

export default new WalletDataService();