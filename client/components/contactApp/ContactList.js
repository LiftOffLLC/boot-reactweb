import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/contactApp';

import Contact from './contact';
import AddContact from './AddContact';

class ContactList extends React.Component{
  componentWillMount(){
    this.props.fetchContacts();
  }

  render(){
    return (
      <div>
        <AddContact />
        <h3 className="contact-list-heading"> Contacts</h3>
        <ul className="contact-list">
          {this.props.contacts.map(contact =>
            <Contact
              key={contact._id}
              {...contact}
            />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("statein mapstatetoprops",state)
  return {
    contacts: state.contacts.get("contacts").toJS()
  };
}

ContactList = connect(
  mapStateToProps,
  actions
)(ContactList);


export default ContactList;
