import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks () {
    if(this.props.authenticated) {
      //show a link to signout
      return (
        <li className="nav-item" key="signout">
          <Link to="/signout" className="nav-link"> Sign Out </Link>
        </li>
      );
    } else {
      //show a link to signin or signup
      return [
        <li className="nav-item" key="signin">
          <Link to="/signin" className="nav-link"> Sign In </Link>
        </li>,
        <li className="nav-item" key="signup">
          <Link to="/signup" className="nav-link"> Sign Up </Link>
        </li>
      ];
    }
  }

  render () {
    return (
      <nav className="nav navbar-light">
        <Link to="/" className="navbar-brand"> Home </Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);