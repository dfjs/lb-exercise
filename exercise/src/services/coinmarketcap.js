import Api from './api';
import { get } from '../utilities';

class CoinMarketCap {

  static getHistory = (currencyPair) => {
    return CoinMarketCap.getCurrencyHistory(CoinMarketCap.getCurrencyFromCurrencyPair(currencyPair));
  }

  static getCurrencyFromCurrencyPair = (currencyPair) => {

    const currencies = {
      btc: 'bitcoin',
      eth: 'ethereum',
      ltc: 'litecoin',
    }

    return currencies[currencyPair.substr(0, 3)] || null;
  }

  static getCurrencyHistory = (currency) => {
    return get(`${Api.getApiHost()}/api/coinmarketcap/currency/${currency}/history`);
  }
}

export default CoinMarketCap
