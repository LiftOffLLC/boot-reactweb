import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

const Button = ({text, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}  style={Styles.button} >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default Button
