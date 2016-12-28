import * as actions from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case actions.AUTH_USER:
      return { ...state, errorMessage: '', authenticated: true };
    case actions.UNAUTH_USER:
      return { ...state, errorMessage: '', authenticated: false };
    case actions.AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
    case actions.FETCH_MESSAGE:
      return { ...state, message: action.payload, }
    default:
      if (localStorage.getItem('token')) return {...state, authenticated: true }
  }
  return state;
}
