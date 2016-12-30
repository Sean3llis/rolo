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
        // console.log('error ~~>', error);
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

export function setTemplate(templateName) {
  console.log('set template action creator');
  return {
    type: actions.SET_TEMPLATE,
    payload: templateName
  };
}

export function updateResume(resumeData) {
  return {
    type: actions.UPDATE_RESUME,
    payload: resumeData
  }
}

export function sendMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type: actions.FETCH_MESSAGE,
        payload: response
      })
    });
  }
}
