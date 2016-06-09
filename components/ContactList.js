import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions'

import Contact from './Contact'

const ContactList = ({contacts}) => (
  <div>
    <h3> Contacts</h3>
    <ul>
      {contacts.map(contact =>
        <Contact
          key={contact.id}
          {...contact}
        />
      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  console.log(state.contacts)
  return {
    contacts: state.contacts
  }
}

export default connect(
  mapStateToProps
)(ContactList)


// export default ContactList
