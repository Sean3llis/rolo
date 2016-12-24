import * as actions from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case actions.SET_TEMPLATE:
      console.log('action.payload ~~>', action.payload);
      return { ...state, errorMessage: '', authenticated: true };
  }
  return state;
}
