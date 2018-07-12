import React from 'react';
import './index.css';
import { formatCurrencyPair } from '../../utilities'

const TickerOptions = ({ options: currencyPairs, change, selectedCurrencyPair, }) => {
  return (
    <div className="TickerOptions">
      <select className="TickerOptions__currency-pairs" value={selectedCurrencyPair} onChange={change}>
        {currencyPairs.map(currencyPair => {
          return <option key={currencyPair} value={currencyPair}>{formatCurrencyPair(currencyPair)}</option>
        })}
      </select>
    </div>
  )
}

export default TickerOptions;
