import { formatCurrencyPair } from './utilities';

test('formats a currency pair', () => {
  expect(formatCurrencyPair('btcusd')).toBe('BTC/USD');
});
