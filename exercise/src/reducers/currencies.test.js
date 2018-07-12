import reducer, { initialState } from './currencies';
import { SELECT_CURRENCY_PAIR } from '../actions'

describe('currencies reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  it('should handle SELECT_CURRENCY_PAIR', () => {
    expect(
      reducer(initialState, {
        type: SELECT_CURRENCY_PAIR,
        currencyPair: 'ethusd'
      })
    ).toEqual(
      {
        currencyPairs: ['btcusd', 'ethusd', 'ltcusd', 'ethbtc', 'ltcbtc'],
        selectedCurrencyPair: 'ethusd',

        tickerInfo: null,
        isLoadingTickerInfo: false,
        loadTickerInfoError: null,

        history: null,
        isLoadingHistory: false,
        loadHistoryError: null
      }
    )
  })
})
