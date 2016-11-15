import React from 'react'
import { Navigator } from 'react-native'
import  { BlogFeed } from '../screens'

class Root extends React.PureComponent {
  render() {
    const initialRoute = { component: BlogFeed };
    return (
      <Navigator
          initialRoute={initialRoute}
          renderScene={(route, navigator) => <route.component navigator={navigator} />}
      />
    );
  }
}

export default Root;
