import Bitstamp from '../services/bitstamp'
import CoinMarketCap from '../services/coinmarketcap'

export const SELECT_CURRENCY_PAIR = 'SELECT_CURRENCY_PAIR';

// Ticker Info
export const REQUEST_TICKER_INFO = 'REQUEST_TICKER_INFO';
export const REQUEST_TICKER_INFO_FAILURE = 'REQUEST_TICKER_INFO_FAILURE';
export const RECEIVE_TICKER_INFO = 'RECEIVE_TICKER_INFO';

// History
export const REQUEST_HISTORY = 'REQUEST_HISTORY';
export const REQUEST_HISTORY_FAILURE = 'REQUEST_HISTORY_FAILURE';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';


export function selectCurrencyPair(currencyPair) {
  return { type: SELECT_CURRENCY_PAIR, currencyPair }
}

export function requestTickerInfo(currencyPair) {
  return { type: REQUEST_TICKER_INFO, currencyPair }
}

export function requestTickerInfoFailure(error) {
  return { type: REQUEST_TICKER_INFO_FAILURE, error }
}

export function receiveTickerInfo(currencyPair, json) {
  return { type: RECEIVE_TICKER_INFO, currencyPair, json }
}

export function requestHistory(currencyPair) {
  return { type: REQUEST_HISTORY, currencyPair }
}

export function requestHistoryFailure(error) {
  return { type: REQUEST_HISTORY_FAILURE, error }
}

export function receiveHistory(currencyPair, json) {
  return { type: RECEIVE_HISTORY, currencyPair, json }
}

export const getTickerInfo = currencyPair => (dispatch, getState) => {
  dispatch(requestTickerInfo(currencyPair));

  return Bitstamp.getTicker(currencyPair)
    .then(response => {

      // Rudimentary handling of race conditions e.g. could use a "cancellable" library
      if (currencyPair === getState().currencies.selectedCurrencyPair) {
        dispatch(receiveTickerInfo(currencyPair, response));
      }
    })
    .catch(error => dispatch(requestTickerInfoFailure(error)));
}

export const getHistory = currencyPair => (dispatch, getState) => {
  dispatch(requestHistory(currencyPair));

  return CoinMarketCap.getHistory(currencyPair)
    .then(response => {

      // Rudimentary handling of race conditions e.g. could use a "cancellable" library
      if (currencyPair === getState().currencies.selectedCurrencyPair) {
        dispatch(receiveHistory(currencyPair, response))
      }
    })
    .catch(error => dispatch(requestHistoryFailure(error)));
}
