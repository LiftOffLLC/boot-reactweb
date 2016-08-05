import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/contactApp';

import AddContact from './AddContact';

import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';

let removeContact = function (contact) {
  console.log("removeContact",contact);
};

const SortableItem = SortableElement(({value}) => {

  const DragHandle = SortableHandle(() => {
      return <span>::::::                             </span>
  });

  const removeContactProxy = function() {
    removeContact(value);
  };

  return (
    <li className="js-contact clearfix">
      <DragHandle />
      {value.name}
      <button className="pull-right" onClick={removeContactProxy}>&times;</button>
    </li>
  );
});

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className="contact-list">
      {items.map((value, index) =>
        <SortableItem key={`item-${index}`} index={index} value={value} />
      )}
    </ul>
  );
});

class ContactList extends React.Component{
  componentWillMount(){
    this.props.fetchContacts();
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    console.log(oldIndex," ",newIndex)
  };

  render(){
    return (
      <div>
        <AddContact />
        <h3 className="contact-list-heading"> Contacts</h3>
        <ul>
          <SortableList items={this.props.contacts} onSortEnd={this.onSortEnd} lockAxis="y" useDragHandle={true} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts.toJS()
  };
};

ContactList = connect(
  mapStateToProps,
  actions
)(ContactList);


export default ContactList;
