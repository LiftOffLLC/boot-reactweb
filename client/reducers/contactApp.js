import { Map, List, fromJS } from 'immutable';

const initialState = Map({
    contacts : List()
  }
);

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CONTACTS' :
      return state.set("contacts", fromJS(action.contacts));
    case 'ADD_CONTACT' :
      // const originalContacts = state.get('contacts');
      // const updatedContacts = originalContacts.push(fromJS(action.contact.data));
      // const updatedState = state.set('contacts', updatedContacts);
      // console.log(originalContacts.toJS(), updatedContacts.toJS(), updatedState.toJS(), state.toJS());
      // return updatedState
      return state.set("contacts", state.get("contacts").push( fromJS(action.contact.data)));
    default:
      return state;
  }
};

export default contacts;
