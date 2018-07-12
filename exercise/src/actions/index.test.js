import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import { REQUEST_TICKER_INFO, RECEIVE_TICKER_INFO } from './index'
import { REQUEST_TICKER_INFO_FAILURE } from './index'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {

  afterEach(() => {
    fetch.resetMocks();
  })

  it('creates RECEIVE_TICKER_INFO when requesting Ticker Info has completed successfully', () => {

    const response = { high: "6814.72", "timestamp": "1531208790" , "bid": "6598.47" };

    fetch.once(JSON.stringify(response));

    const expectedActions = [
      { type: REQUEST_TICKER_INFO, currencyPair: 'btcusd' },
      { type: RECEIVE_TICKER_INFO, currencyPair: 'btcusd', json: response }
    ]

    const store = mockStore({ currencies: { tickerInfo: null, selectedCurrencyPair: 'btcusd' } });

    return store.dispatch(actions.getTickerInfo('btcusd'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })

  it('creates REQUEST_TICKER_INFO_FAILURE when requesting Ticker Info unsuccessfully', () => {

    fetch.mockReject('Failed request');

    const expectedActions = [
      { type: REQUEST_TICKER_INFO, currencyPair: 'btcusd' },
      { type: REQUEST_TICKER_INFO_FAILURE, error: 'Failed request' }
    ]

    const store = mockStore({ currencies: { tickerInfo: null, selectedCurrencyPair: 'btcusd' } });

    return store.dispatch(actions.getTickerInfo('btcusd'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })
})
