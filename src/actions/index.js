import axios from 'axios';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import * as actions from './types';

import Resume from '../models/resume-model.js';
window.Resume = Resume

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

export function signInUser({ email, password }) {
  return function(dispatch) {
    // axios.post(`${ROOT_URL}/signin`, { username, password })
    //   .then(response => {
    //     const user = response.data.user;
    //     delete user.password;
    //     dispatch({ type: actions.AUTH_USER, payload: user });
    //     saveLocalUser(response.data.token, user);
    //     console.log('response.data.token ~~>', response.data.token);
    //     browserHistory.push(`/${user.username}`);
    //   })
    //   .catch(error => {
    //     dispatch({
    //       type: actions.AUTH_ERROR,
    //       payload: error
    //     });
    //   });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: actions.AUTH_USER,
        payload: user
      });
      browserHistory.push(`/${user.uid}`);
    })
    .catch(error => {
      dispatch({
        type: actions.AUTH_ERROR,
        payload: error
      });
    })
  }
}

export function signUpUser({ email, password }) {
  // return function(dispatch) {
  //   axios.post(`${ROOT_URL}/signup`, {username, password})
  //     .then(response => {
  //       const user = response.data.user;
  //       dispatch({ type: actions.AUTH_USER, payload: user });
  //       saveLocalUser(response.data.token, user)
  //       browserHistory.push(`/${user.username}/edit`);
  //     })
  //     .catch(error => {
  //       dispatch({
  //         type: actions.AUTH_ERROR,
  //         payload: error.response.data.error
  //       });
  //     });
  // }
  return function(dispatch) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      const db = firebase.database().ref(`users/${user.uid}`);
      db.set(new Resume(email));
      dispatch({
        type: actions.AUTH_USER,
        payload: user
      });
      browserHistory.push(`/${user.uid}`);
    })
    .catch(function(error) {
      console.log('error ~~>', error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
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


export function updateUser(data, uid) {
  return function(dispatch) {
    const { name, blurb, projects, themeColor, title, contacts } = data;
    firebase.database().ref(`users/${uid}`).set({
      name,
      blurb,
      projects,
      themeColor,
      title,
      contacts
    });
    // axios.patch(`${ROOT_URL}/users/${userID}`, { data }, {
    //   headers: { Authorization: localStorage.getItem(TOKEN)},
    // })
    // .then(response => {
    //   return {
    //     type: actions.UPDATE_USER,
    //     payload: response
    //   }
    // })
    // .catch(err => {
    //   console.warn(err)
    // });
  }
}

export function setTemplate(templateName) {
  return {
    type: actions.SET_TEMPLATE,
    payload: templateName
  };
}

export function authenticateUser() {
  console.log('authenticate user');
  return function(dispatch) {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase.database().ref(`users/${currentUser.uid}`).once('value')
      .then(snapshot => {
        dispatch({
          type: actions.AUTH_USER,
          payload: {...currentUser, ...snapshot.val()}
        });
      })

    } else {
      console.log('not logged in');
    }
  }
}

export function getUserProfile(uid) {
  return function(dispatch) {
    // axios.get(`${ROOT_URL}/${username}`)
    // .then(response => {
    //   dispatch({
    //     type: actions.RECEIVE_USER,
    //     payload: response.data.user
    //   });
    // })
    // .catch(err => {
    //   // @TODO redirect to 404 with err message
    // })
    firebase.database().ref(`users/${uid}`).once('value')
    .then(snapshot => {
      const userData = snapshot.val();
        dispatch({
          type: actions.RECEIVE_USER,
          payload: userData
        });
    })
  }
}

export function setThemeColor(color) {
  console.log(`setting theme color to ${color}`);
  return {
    type: actions.SET_THEME_COLOR,
    payload: color
  }
}
