'use strict';

import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import { fromJS, Map } from 'immutable'
import routerReducer from './react-router-redux'

const appReducer = combineReducers({
  routerReducer,
  form,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = Map();
  }
  
  return appReducer(state, action)
}

export default rootReducer
