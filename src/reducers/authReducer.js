import * as actions from '../actions/types';

export default function(state = {}, action) {
  console.log('action.type ~~>', action.type);
  switch (action.type) {
    case actions.AUTH_USER:
      return { ...state, authenticated: true };
    case actions.UNAUTH_USER:
      return { ...state, authenticated: false };
    case actions.AUTH_ERROR:
      return { ...state, errorMessage: action.payload }
  }
  return state;
}
