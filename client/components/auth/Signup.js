import React, { Component } from 'react';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';

class Signup extends Component {
  handleFormSubmit (formProps) {
    //call action creator to signup a user
    this.props.signupUser(formProps);
  }

  renderError () {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!! </strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    const { handleSubmit, fields : {email, password, passwordConfirm}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email : </label>
          <input className="form-control" {...email} />
          { email.touched && email.error && <div className="error">{email.error}</div> }
        </fieldset>
        <fieldset className="form-group">
          <label>Password : </label>
          <input className="form-control" type="password" {...password} />
          { password.touched && password.error && <div className="error">{password.error}</div> }
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password : </label>
          <input className="form-control" type="password" {...passwordConfirm} />
          { passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div> }
        </fieldset>
        {this.renderError()}
        <button action="submit" className="btn btn-primary">Sign Up</button>
      </form>
    )
  }
}

function validate (formProps) {
  const errors = {};
  Object.keys(formProps).forEach(function (field) {
    if(!formProps[field]) {
      errors[field] = `Please enter ${field}`;
    }
  });
  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = "Passwords must match";
  }
  return errors;
}

function mapStateToProps (state) {
  return { errorMessage : state.auth.error};
}

export default reduxForm({
  form : 'signup',
  fields : ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);