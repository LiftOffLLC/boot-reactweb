import { combineReducers } from 'redux'
import contacts from './contacts'
import { reducer as form} from 'redux-form'
import auth from './auth'

const myApp = combineReducers({
  contacts,
  form,
  auth
})

export default myApp
