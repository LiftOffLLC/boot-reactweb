const fakeContacts = [
  {id: 1, name: 'Chandan'},
  {id: 2, name: 'Chetan'}
]
const contacts = (state = fakeContacts, action) => {
  switch (action.type) {
    case 'ADD_CONTACT' :
      return state
    default:
      return state
  }
}
export default contacts
