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
    axios.get('/contacts')
      .then(response => {
        dispatch(receiveContacts(response.data))
      })
  }
}

export function addContact(contact) {
  return function(dispatch) {
    axios.post('/contacts', contact)
      .then(response => {
        dispatch(receiveContact(response));
      })
  }
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log(config);
  // Add ROOT_URL to the request if needed
  // not needed right now because api on the same server, hence commenting
  //config.baseUrl = ROOT_URL;
  // Add auth_token to the request
  if(localStorage.getItem('token')) {
    config.headers = { authorization : localStorage.getItem('token')};
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

