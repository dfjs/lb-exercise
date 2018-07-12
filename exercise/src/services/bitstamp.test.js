import Bitstamp from './bitstamp';

describe('Bitstamp', () => {

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('makes a simple bitstamp api request', () => {
    fetch.once(JSON.stringify({}));

    Bitstamp.getTicker('btcusd');

    expect(fetch.mock.calls[0][0]).toContain('/api/bitstamp/ticker/btcusd');
  })
})
