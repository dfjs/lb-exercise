import { createReducer } from 'redux-create-reducer';

import {
  RECEIVE_HISTORY,
  RECEIVE_TICKER_INFO,
  REQUEST_HISTORY,
  REQUEST_HISTORY_FAILURE,
  REQUEST_TICKER_INFO,
  REQUEST_TICKER_INFO_FAILURE,
  SELECT_CURRENCY_PAIR
} from '../actions';

export const initialState = {
  currencyPairs: ['btcusd', 'ethusd', 'ltcusd', 'ethbtc', 'ltcbtc'],
  selectedCurrencyPair: 'btcusd',

  tickerInfo: null,
  isLoadingTickerInfo: false,
  loadTickerInfoError: null,

  history: null,
  isLoadingHistory: false,
  loadHistoryError: null
};

export const currencies = createReducer(initialState, {
  [SELECT_CURRENCY_PAIR](state, action) {
    return {
      ...state,
      selectedCurrencyPair: action.currencyPair
    }
  },
  [REQUEST_TICKER_INFO](state) {
    return {
      ...state,
      isLoadingTickerInfo: true,
      loadTickerInfoError: initialState.loadTickerInfoError
    }
  },
  [REQUEST_TICKER_INFO_FAILURE](state, { error }) {
    return {
      ...state,
      isLoadingTickerInfo: initialState.isLoadingTickerInfo,
      loadTickerInfoError: error,
      tickerInfo: initialState.tickerInfo
    }
  },
  [RECEIVE_TICKER_INFO](state, action) {
    return {
      ...state,
      isLoadingTickerInfo: initialState.isLoadingTickerInfo,
      tickerInfo: action.json
    }
  },
  [REQUEST_HISTORY](state) {
    return {
      ...state,
      isLoadingHistory: true,
      loadHistoryError: initialState.loadHistoryError
    }
  },
  [REQUEST_HISTORY_FAILURE](state, { error }) {
    return {
      ...state,
      isLoadingHistory: initialState.isLoadingHistory,
      loadHistoryError: error,
      history: initialState.history
    }
  },
  [RECEIVE_HISTORY](state, action) {
    return {
      ...state,
      isLoadingHistory: initialState.isLoadingHistory,
      history: action.json
    }
  }
})

export default currencies
