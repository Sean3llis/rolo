import axios from 'axios';
import { browserHistory } from 'react-router';
import * as actions from './types'

const ROOT_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        dispatch({ type: actions.AUTH_USER });
        console.log('res ~~>', res);
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/feature');
      })
      .catch(error => {
        dispatch({
          type: actions.AUTH_ERROR,
          error: error
        });
      });
  }
}

export function authError(error) {

}
