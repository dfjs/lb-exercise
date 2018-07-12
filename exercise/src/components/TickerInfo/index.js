import React from 'react';
import format from 'date-fns/format';

import { formatCurrencyPair } from '../../utilities'

import './index.css';

const TickerInfo = ({ currencyPair, ticker, isLoading, error }) => {

  const info = {
    high: 'High',
    last: 'Last',
    bid: 'Bid',
    vwap: 'VWAP',
    volume: 'Volume',
    low: 'Low',
    ask: 'Ask',
    open: 'Open'
  }

  const lastUpdated = ticker && format(new Date(parseInt(ticker.timestamp, 10) * 1000), 'HH:mm:ss Z');

  return (
    <div className="TickerInfo">
      <h1>{ formatCurrencyPair(currencyPair) }</h1>
      { !error && (
        <table className={`TickerInfo__table ${ isLoading ? 'TickerInfo__table--loading' : '' }`}>
          <tbody>
          {Object.keys(info).map((key) => {
            return (
              <tr key={key}>
                <th className="TickerInfo__table-cell TickerInfo__table-cell--header" scope="row">{ info[key] }:</th>
                <td className="TickerInfo__table-cell">{ ticker && ticker[key] }</td>
              </tr>
              )
            })}
          </tbody>
        </table>
      )}
      { error && (
        <div className="TickerInfo__error">Error - Please refresh or select another Ticker</div>
      )}
      { isLoading ?
        (<div className="TickerInfo__loading">Loading...</div>) :
        (<div className="TickerInfo__last-updated">Last updated: { lastUpdated }</div>
      )}
    </div>
  );
}

export default TickerInfo
