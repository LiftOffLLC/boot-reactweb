export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'

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
