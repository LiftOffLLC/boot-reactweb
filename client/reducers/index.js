import { combineReducers } from 'redux'
import contacts from './contacts'
import { reducer } from 'redux-form'

const contactApp = combineReducers({
  contacts,
  form : reducer
})

export default contactApp
