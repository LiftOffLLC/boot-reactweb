let nextTodoId = 0

export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS'

function receiveContacts(json) {
  return {
    type: RECEIVE_CONTACTS,
    contacts: json.data,
    receivedAt: Date.now()
  }
}

export function fetchContacts(contacts) {
  return function (dispatch) {
    return fetch('/xhr/contacts.json')
      .then(response => {
        response.json()
          .then(json =>{
            dispatch(receiveContacts(json))
          })
        })
  }
}
