import React from 'react';
import CurrencyHistoryChart from './CurrencyHistoryChart'
import './index.css';

const CurrencyHistory = ({ history, isLoading, error }) => {
  return (
    <div className="CurrencyHistory">
      { isLoading && <span className='CurrencyHistory__loader'>Loading...</span>}
      { error && <span className='CurrencyHistory__error'>Error :(</span>}
      { history && !error && (
        <div>
          <CurrencyHistoryChart history={history} />
        </div>
      )}
    </div>
  );
}

export default CurrencyHistory
