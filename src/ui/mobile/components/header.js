import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

const Header = ({title, rightAction}) => {
  return (
    <View style={Styles.navBar}>
      <Text style={Styles.text}>{title}</Text>
      {rightAction}
    </View>
  );
}

Header.propTypes = {
  title: React.PropTypes.string,
  rightAction: React.PropTypes.object,
}

export default Header
