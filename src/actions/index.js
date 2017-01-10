import axios from 'axios';
import { browserHistory } from 'react-router';
import * as actions from './types'

const ROOT_URL = 'http://localhost:3090';
const CURRENT_USER = 'CURRENT_USER';
const TOKEN = 'TOKEN';

function saveLocalUser(token, currentUser) {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser));
}

function clearLocalUser() {
  localStorage.setItem(TOKEN, null);
  localStorage.setItem(CURRENT_USER, null);
}

export function signInUser({ username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { username, password })
      .then(response => {
        const user = response.data.user;
        delete user.password;
        dispatch({ type: actions.AUTH_USER, payload: user });
        saveLocalUser(response.data.token, user);
        console.log('response.data.token ~~>', response.data.token);
        browserHistory.push(`/${user.username}`);
      })
      .catch(error => {
        dispatch({
          type: actions.AUTH_ERROR,
          payload: error
        });
      });
  }
}

export function signUpUser({ username, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {username, password})
      .then(response => {
        const user = response.data.user;
        dispatch({ type: actions.AUTH_USER, payload: user });
        saveLocalUser(response.data.token, user)
        browserHistory.push(`/${user.username}/edit`);
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
  localStorage.removeItem('TOKEN');
  localStorage.removeItem('CURRENT_USER');
  return {
    type: actions.UNAUTH_USER
  };
}


export function updateUser(data, userID) {
  return function(dispatch) {
    axios.patch(`${ROOT_URL}/users/${userID}`, { data }, {
      headers: { Authorization: localStorage.getItem(TOKEN)},
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
  return {
    type: actions.SET_TEMPLATE,
    payload: templateName
  };
}

export function authenticateUser() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem(TOKEN)}
    })
    .then(response => {
      dispatch({
        type: actions.AUTH_USER,
        payload: response.data
      });
    });
  }
}

export function getUser(username) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/${username}`)
    .then(response => {
      dispatch({
        type: actions.RECEIVE_USER,
        payload: response.data.user
      });
    })
    .catch(err => {
      // @TODO redirect to 404 with err message
    })
  }
}
