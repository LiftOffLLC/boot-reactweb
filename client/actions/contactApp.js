import { ADD_CONTACT,RECEIVE_CONTACTS } from  './types';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

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
    axios.get(`${ROOT_URL}/contacts`, {
      headers : { authorization : localStorage.getItem('token')}
    })
      .then(response => {
        dispatch(receiveContacts(response.data))
      })
  }
}

export function addContact(contact) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/contacts`, contact, {
      headers : { authorization : localStorage.getItem('token')}
    })
      .then(response => {
        dispatch(receiveContact(response));
      })
  }
}

