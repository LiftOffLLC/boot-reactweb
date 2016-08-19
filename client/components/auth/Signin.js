import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions/auth';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password});
  }

  renderAlert () {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong> Oops!! </strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: {email, password}} = this.props;

    return (
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} method="POST" encType='application/x-www-form-urlencoded'>
          <fieldset className="form-group">
            <label>Email : </label>
            <input className="form-control" {...email} />
          </fieldset>
          <fieldset className="form-group">
            <label>Password : </label>
            <input className="form-control" type="password" {...password} />
          </fieldset>
          {this.renderAlert()}
          <div className="form-footer">
            <button action="submit" className="btn btn-primary">Sign In</button>
          </div>
      </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { errorMessage : state.auth.error };
}

export default reduxForm({
  form : 'signin',
  fields : ['email', 'password']
}, mapStateToProps, actions)(Signin);
