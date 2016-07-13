import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import contactApp from './reducers'
import App from './components/App'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'
import Signin from './components/auth/Signin'
import ContactList from './components/ContactList'

let store = createStore(contactApp, applyMiddleware(
  thunkMiddleware
))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}></Route>
        <Route path="contact-list" component={ContactList}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
