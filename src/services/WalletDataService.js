import http from "../http-common";

class WalletDataService {

  getAssets() {
    return http.get("/wallets/6071434be1db924aa0f2915d");
  }

}

export default new WalletDataService();