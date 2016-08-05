import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/contactApp';

import AddContact from './AddContact';

import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li>{value.name}</li>);

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
          <SortableList items={this.props.contacts} onSortEnd={this.onSortEnd}/>
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
