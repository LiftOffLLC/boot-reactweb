import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myApp from './reducers';
import {Router, browserHistory } from 'react-router';
import { AUTH_USER } from './actions/types';
import routes from './routes';

let store = createStore(myApp, applyMiddleware(
  thunkMiddleware
));

const token = localStorage.getItem('token');
//If we have a token, consider the user to be signed in
if(token) {
  //we need to update the application state
  store.dispatch({ type : AUTH_USER});
}

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
