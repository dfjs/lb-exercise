import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

function setup() {

  const props = {
    currencyPairs: ['btcusd', 'ethusd', 'ltcusd', 'ethbtc', 'ltcbtc'],
    selectedCurrencyPair: 'btcusd',
    getTicker: jest.fn(),
    getHistory: jest.fn()
  }

  const enzymeWrapper = mount(<App {...props} />);

  return {
    props,
    wrapper: enzymeWrapper
  }
}

describe('App', () => {

  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
  })

  it('should call getTicker & getHistory on render', () => {
    const { wrapper, props } = setup();

    expect(props.getTicker.mock.calls.length).toBe(1);
    expect(props.getHistory.mock.calls.length).toBe(1);
  })
})
