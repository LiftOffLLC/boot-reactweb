export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'
import { browserHistory } from 'react-router'
import { AUTH_USER } from  './types'

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

const ROOT_URL = 'http:/localhost:3000'

export function signinUser({email, password}) {
  //submit email password to server
  return function (dispatch) {
    return fetch('/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        response.json()
          .then(json => {
            dispatch({type: AUTH_USER})
            localStorage.setItem('token', json.token)
            browserHistory.push('contact-list')
          })
      })
      .catch(() => {
        console.log("bad password")
        //if result is bad
        // show error to user
      })

  }



}
