import React from 'react';
import { connect } from 'react-redux';
import { fetchState } from 'react-router-server';
import { AppActions } from '../actions';

@fetchState(
  () => ({}),
  actions => ({
    done: actions.done,
  }),
)

class AppContainer extends React.PureComponent {

  componentWillMount() {
    const { loggedIn, userId, authToken,
      userAgent } = this.props;
    setAuthToken(authToken);
    this.props.done({
      app: { loggedIn, userId, authToken, userAgent },
    });
  }

  render() {
    return (
      <div>React Starter Kit</div>
    );
  }

}
const mapStateToProps = state => ({
  return {
    
  }
});

export default connect(mapStateToProps, {
  ...AppActions,
})(AppContainer);
