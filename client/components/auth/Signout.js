import  React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class Signout extends Component {
  componentWillMount () {
    this.props.signOutUser();
  }

  render () {
    return <div className="signout-msg"> You are now signed out !!! </div>
  }
}

export default connect(null, actions)(Signout);
