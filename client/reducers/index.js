import { combineReducers } from 'redux'
import contacts from './contacts'
import { reducer as form} from 'redux-form'
import auth from './auth'

const contactApp = combineReducers({
  contacts,
  form,
  auth
})

export default contactApp
