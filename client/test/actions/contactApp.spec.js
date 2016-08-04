import { expect } from '../testHelper';
import { ADD_CONTACT } from '../../actions/types';
import { addNewContact } from '../../actions/contactApp';

describe('Contact App Actions', () => {

  describe('Add Contact Action Creator', () => {

    it('has the correct type', () => {
      const action = addNewContact({data:{name : 'abc'}});
      expect(action.type).to.equal(ADD_CONTACT);
    });

    it('has a correct contact', () => {
      const action = addNewContact({data: {name : 'abc'}});
      expect(action.contact).to.eql({name: 'abc'});
    });

  });

});