import React from 'react'
import { Link } from 'react-router'

const Header = (props) => (
  <div className="hero-head">
    <header className="nav">
      <div className="container">
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <Link to="/" activeClassName="is-active" className="nav-item">
            Home
          </Link>
          <Link to="/feed" activeClassName="is-active" className="nav-item">
            Feed
          </Link>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
