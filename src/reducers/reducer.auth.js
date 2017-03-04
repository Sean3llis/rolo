import * as actions from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case actions.AUTH_USER:
      return { ...state, errorMessage: '', authenticated: true, currentUser: action.payload };
    case actions.UNAUTH_USER:
      return { ...state, errorMessage: '', authenticated: false, currentUser: false };
    case actions.AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
    case actions.UPDATE_USER:
      return { ...state }
    case actions.RECEIVE_USER:
      return { ...state, viewingUser: action.payload }
    case actions.SET_THEME_COLOR:
      if (!state.currentUser) return state;
      const newCurrentUser = { ...state.currentUser, color: action.payload };
      return { ...state, currentUser: newCurrentUser }
  }
  return state;
}
