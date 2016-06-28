import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchContacts } from '../actions'

import Contact from './Contact'
import AddContact from './AddContact'

class ContactList extends React.Component{
  componentWillMount(){
    this.props.fetchContacts()
  }

  render(){
    return (
      <div>
        <AddContact />
        <h3> Contacts</h3>
        <ul>
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
  return {
    contacts: state.contacts
  }
}

ContactList = connect(
  mapStateToProps,
  {fetchContacts}
)(ContactList);


export default ContactList
