import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Match from 'react-router/Match'
import Helmet from 'react-helmet'
import * as Screens from '../screens'

if ( process.browser && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

class Layout extends React.PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
    action: PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      state: PropTypes.any,
      key: PropTypes.string
    }).isRequired,
    store: PropTypes.object.isRequired
  };

  scrollPositions = {};

  componentWillUpdate(nextProps) {
    const props = this.props;
    this.scrollPositions[props.router.createHref(props.location)] = [window.pageXOffset, window.pageYOffset];
    if ( nextProps.action === 'PUSH' ) {
      window.scroll(0,0);
    }
  }

  componentDidUpdate() {
    const props = this.props;
    if ( props.action === 'POP' ) {
      const href = props.router.createHref(props.location);
      if ( this.scrollPositions[href] ) {
        window.scroll.apply(window, this.scrollPositions[href]);
      }
    }
  }

  render() {
    const props = this.props;
    return (
      <Provider store={props.store}>
        <div>
          <Helmet titleTemplate="%s" defaultTitle="Blog Web and Mobile" />
          <div id="routes">
            <Match exactly={true} pattern="/" component={Screens.Home} />
            <Match exactly={true} pattern="/feed" component={Screens.Feed} />
          </div>
        </div>
      </Provider>
    );
  }

}

export default Layout
