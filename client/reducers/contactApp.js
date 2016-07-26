const contacts = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_CONTACTS' :
      return state = action.contacts
    default:
      return state
  }
}
export default contacts
