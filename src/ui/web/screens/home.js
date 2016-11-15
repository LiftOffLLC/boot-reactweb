import React, { Component, PropTypes } from 'react';
import { Header } from '../components'

class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero is-success is-fullheight">
          <Header />
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                React & Redux app using SSR!
              </h1>
              <h3 className="subtitle">
                This is a static page, rendered completely on server
              </h3>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
