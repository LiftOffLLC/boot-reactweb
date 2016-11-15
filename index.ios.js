import React from 'react'
import { AppRegistry } from 'react-native'
import  { Root } from './app/containers'

class blogWebAndMobile extends React.PureComponent {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('blogWebAndMobile', () => blogWebAndMobile);
