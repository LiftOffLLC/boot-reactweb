import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import contactApp from './reducers'
import App from './components/App'

let store = createStore(contactApp, applyMiddleware(
  thunkMiddleware
))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
