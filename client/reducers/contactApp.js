import { Map, List, fromJS } from 'immutable';

const initialState = {
    contacts : List()
  };


const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CONTACTS' :
      return { ...state, contacts : fromJS(action.contacts) } ;
    case 'ADD_CONTACT' :
      // const originalContacts = state.get('contacts');
      // const updatedContacts = originalContacts.push(fromJS(action.contact.data));
      // const updatedState = state.set('contacts', updatedContacts);
      // console.log(originalContacts.toJS(), updatedContacts.toJS(), updatedState.toJS(), state.toJS());
      // return updatedState
      return { ...state, contacts : state.contacts.push(fromJS(action.contact.data)) };
    default:
      return state;
  }
};

export default contacts;
