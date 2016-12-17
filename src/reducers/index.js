import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: function(previousState, action) {
    if (!previousState) {
      return {
        loggedIn: false
      }
    }
  }
});

export default rootReducer;
