import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './reducer.auth'
import resume from './reducer.resume'

const rootReducer = combineReducers({
  form,
  auth,
  resume
});

export default rootReducer;
