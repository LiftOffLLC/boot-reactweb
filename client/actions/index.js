export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';
import { browserHistory } from 'react-router';
import { AUTH_USER,AUTH_ERROR,UNAUTH_USER } from  './types';
import axios from 'axios';

function receiveContacts(json) {
  return {
    type: RECEIVE_CONTACTS,
    contacts: json.data,
    receivedAt: Date.now()
  }
}

function receiveContact(json) {
  return {
    type: ADD_CONTACT,
    contacts: json.data,
    receivedAt: Date.now()
  }
}

export function fetchContacts(contacts) {
  return function (dispatch) {
    return fetch('/contacts')
      .then(response => {
        response.json()
          .then(json =>{
            dispatch(receiveContacts(json))
          })
        })
  }
}

export const ADD_CONTACT = 'ADD_CONTACT'

export function addContact(contact) {
  let data = JSON.stringify(contact)
  console.log(data)
  return function(dispatch) {
    return fetch('/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: data
      })
      .then(response => {
        response.json()
          .then(json => {
            dispatch(receiveContact(json))
          })
      })
  }
}

const ROOT_URL = 'http://localhost:3000';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/contact-list');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/contact-list');
      })
      .catch(response => {
        dispatch(authError("Email Already in use"));
      });
  }
}

export function signOutUser() {
  localStorage.removeItem('token');
  return { type : UNAUTH_USER };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
