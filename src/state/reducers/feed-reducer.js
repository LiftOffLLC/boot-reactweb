import { FeedActions } from '../actions'

const initialState = {
  feedItems: [],
  isFeedLoaded: false,
};

export default function (state = initialState, action) {
  switch(action.type) {
    case FeedActions.SET_FEED:
      state.feedItems = action.feedItems;
      state.isFeedLoaded = true;
      return state;

    case FeedActions.APPEND_TO_FEED:
      let newState = {
        isFeedLoaded: state.isFeedLoaded,
        feedItems: [...state.feedItems, ...action.feedItems]
      };
      return newState;
      
    default:
      return state;
  }
}
