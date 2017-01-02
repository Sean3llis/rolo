import * as actions from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case actions.AUTH_USER:
      return { ...state, errorMessage: '', authenticated: true, currentUser: action.payload };
    case actions.UNAUTH_USER:
      return { ...state, errorMessage: '', authenticated: false, userID: false };
    case actions.AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
    case actions.UPDATE_USER:
      console.log('action.payload ~~>', action.payload);
      return { ...state }
    default:
      if (localStorage.getItem('token')) return {...state, authenticated: true }
  }
  return state;
}
