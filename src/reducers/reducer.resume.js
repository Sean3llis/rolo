import * as actions from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case actions.SET_TEMPLATE:
      return { ...state, selectedTemplate: action.payload};
    case actions.UPDATE_RESUME:
      return { ...state, selectedTemplate: action.payload};
  }
  return state;
}
