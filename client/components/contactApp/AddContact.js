import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../actions/contactApp';

class AddContact extends React.Component{
  addContact(e){
    e.preventDefault();
    this.refs.contact.value = '';
    this.props.addContact({name: this.refs.contact.value});
  }
  render() {
    return (
      <div className="panel panel-default js-add-contact">
        <div className="panel-heading">
          <h3 className="panel-title">Add a contact</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.addContact.bind(this)}>
            <div className="col-md-4">
              <input ref='contact' type="text" placeholder="Add a contact" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {contact: null};
};

AddContact = connect(
  mapStateToProps,
  {addContact}
)(AddContact);

export default AddContact;
