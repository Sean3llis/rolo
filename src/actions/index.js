import axios from 'axios';
import { browserHistory } from 'react-router';
import * as actions from './types'

const ROOT_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        dispatch({ type: actions.AUTH_USER });
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/feature');
      })
      .catch(error => {
        dispatch({
          type: actions.AUTH_ERROR,
          payload: error
        });
      });
  }
}

export function signUpUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch({ type: actions.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(error => {
        console.log('error ~~>', error);
        dispatch({
          type: actions.AUTH_ERROR,
          payload: error.response.data.error
        });
      });
  }
}
