import { renderComponent, expect } from '../testHelper';
import ContactList from '../../components/contactApp/ContactList';
import { Map, List, fromJS } from 'immutable';


describe('Contact List', () => {

  let component;
  let initialState = {
    contacts: {contacts : List(fromJS([{name: "abc", _id : '1'},{name: "def", _id : '2'}]))}
  };

  beforeEach(() => {
    component = renderComponent(ContactList, null, initialState);
  });

  it('should have a addContact component', () => {
    expect(component.find('.js-add-contact')).to.exist;
  });

  it('should have contacts in the list', () => {
    expect(component.find('.js-contact')).to.exist;
  });

  it('should have 2 contacts in the list', () => {
    expect(component.find('.js-contact').length).to.equal(2);
  });

});