import { renderComponent , expect } from '../testHelper';
import App from '../../components/app';

describe('App Component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('should have header', () => {
    expect(component.find('.nav-item')).to.exist;
  });
  
});