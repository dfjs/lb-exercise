import CoinMarketCap from './coinmarketcap';

describe('CoinMarketCap', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('makes a simple CoinMarketCap api request with the right currency', () => {
    fetch.mockResponseOnce(JSON.stringify({}))

    CoinMarketCap.getHistory('btcusd');

    expect(fetch.mock.calls[0][0]).toContain('/api/coinmarketcap/currency/bitcoin/history');
  })
})
