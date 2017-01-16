import * as actions from '../actions/types';
import * as STYLES from '../components/styles';


export default function(state = {}, action) {
  switch (action.type) {
    case actions.SET_TEMPLATE:
      return { ...state, selectedTemplate: action.payload};
    case actions.SET_THEME_COLOR:
      return { ...state, themeColor: action.payload};
    case actions.UPDATE_RESUME:
      return { ...state, selectedTemplate: action.payload};
  }
  return state;
}
