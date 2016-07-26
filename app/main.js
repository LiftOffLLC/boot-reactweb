'use strict';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/root'
import configureStore from './store/configure-store';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routerReducer').toJS();
  }
});

render(<Root store = {store} /> , document.getElementById('root'));
