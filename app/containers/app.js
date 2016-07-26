'use strict';

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render() {
    const { children, user } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {}
}

export default connect(mapStateToProps, {})(App)
