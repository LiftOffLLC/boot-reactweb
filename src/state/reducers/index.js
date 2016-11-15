import { combineReducers } from 'redux';
import Feed from './feed-reducer';

const appReducer = combineReducers({
  Feed
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
