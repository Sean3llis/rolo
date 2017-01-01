import axios from 'axios';
import { browserHistory } from 'react-router';
import * as actions from './types'

const ROOT_URL = 'http://localhost:3090';

export function signInUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        const user = res.data.user;
        dispatch({ type: actions.AUTH_USER, payload: user._id });
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/resume');
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
        browserHistory.push('/resume');
      })
      .catch(error => {
        dispatch({
          type: actions.AUTH_ERROR,
          payload: error.response.data.error
        });
      });
  }
}

export function signOutUser() {
  localStorage.removeItem('token');
  return {
    type: actions.UNAUTH_USER
  };
}


export function updateUser(data, userID) {
  return function(dispatch) {
    axios.patch(`${ROOT_URL}/users/${userID}`, { data }, {
      headers: { Authorization: localStorage.getItem('token')},
    })
    .then(response => {
      return {
        type: actions.UPDATE_USER,
        payload: response
      }
    })
    .catch(err => {
      console.warn(err)
    });
  }

}

export function setTemplate(templateName) {
  console.log('set template action creator');
  return {
    type: actions.SET_TEMPLATE,
    payload: templateName
  };
}

export function authenticateUser() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      console.log('response ~~>', response);
      dispatch({
        type: actions.AUTH_USER,
        payload: response.data
      });
    });
  }
}
