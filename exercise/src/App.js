import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'normalize.css';

import CurrencyHistory from './components/CurrencyHistory';
import TickerInfo from './components/TickerInfo';
import TickerOptions from './components/TickerOptions';

import { getHistory, getTickerInfo, selectCurrencyPair } from './actions'

import './App.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.refresh(this.props.selectedCurrencyPair)
  }

  change = ({ target: { value: currencyPair } }) => {
    this.props.selectCurrencyPair(currencyPair);
    this.refresh(currencyPair);
  }

  refresh = (currencyPair) => {
    this.props.getTicker(currencyPair);
    this.props.getHistory(currencyPair);
  }

  render() {
    return (
      <div className="App">
        <TickerOptions
          options={this.props.currencyPairs}
          change={this.change}
          selectedCurrencyPair={this.props.selectedCurrencyPair} />
        <CurrencyHistory
          history={this.props.history}
          isLoading={this.props.isLoadingHistory}
          error={this.props.historyError}/>
        <TickerInfo
          ticker={this.props.tickerInfo}
          currencyPair={this.props.selectedCurrencyPair}
          isLoading={this.props.isLoadingTickerInfo}
          error={this.props.tickerInfoError} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currencyPairs: state.currencies.currencyPairs,
  selectedCurrencyPair: state.currencies.selectedCurrencyPair,
  tickerInfo: state.currencies.tickerInfo,
  isLoadingTickerInfo: state.currencies.isLoadingTickerInfo,
  tickerInfoError: state.currencies.loadTickerInfoError,
  history: state.currencies.history,
  isLoadingHistory: state.currencies.isLoadingHistory,
  historyError: state.currencies.loadHistoryError
});

const mapDispatchToProps = dispatch => ({
  selectCurrencyPair: currencyPair => dispatch(selectCurrencyPair(currencyPair)),
  getTicker: currencyPair => dispatch(getTickerInfo(currencyPair)),
  getHistory: currencyPair => dispatch(getHistory(currencyPair))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
