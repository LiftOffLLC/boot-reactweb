import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myApp from './reducers';
import App from './components/App';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import ContactList from './components/contactApp/ContactList';
import requireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import { AUTH_USER } from './actions/types';

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
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin}></Route>
        <Route path="signup" component={Signup}></Route>
        <Route path="signout" component={Signout}></Route>
        <Route path="contact-list" component={requireAuth(ContactList)}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
