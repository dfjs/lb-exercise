import Api from './api';
import { get } from '../utilities';

class Bitstamp {

  static getTicker = (currencyPair) => {
    return get(`${Api.getApiHost()}/api/bitstamp/ticker/${currencyPair}`);
  }
}

export default Bitstamp
