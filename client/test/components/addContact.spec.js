import { renderComponent , expect } from '../testHelper';
import AddContact from '../../components/contactApp/AddContact';

describe('AddContact Component', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(AddContact);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('has a text input', () => {
    expect(component.find('input')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  it('should have the correct class', () => {
    expect(component).to.have.class('panel panel-default');
  });

  it('button should have the correct class', () => {
    expect(component.find('button')).to.have.class('btn btn-primary');
  });

  describe('entering some text in textBox', () => {

    beforeEach(() => {
      component.find('input').simulate('change', 'new contact');
    });

    it('shows text in the text area', () => {
      expect(component.find('input')).to.have.value('new contact');
    });

/*    it('should clear the textBox when submitted', () => {
      component.find('form').simulate('submit');
      expect(component.find('input')).to.have.value('');
    });*/

  });

});