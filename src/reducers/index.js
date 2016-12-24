import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './reducer.auth'
import templates from './reducer.templates'

const rootReducer = combineReducers({
  form,
  auth,
  templates
});

export default rootReducer;
