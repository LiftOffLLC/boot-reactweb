import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

const CustomTextInput = ({placeholder, value, onChange}) => {
  return (
    <TextInput
        style={Styles.textField}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
    />
  );
}

CustomTextInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
}

export default CustomTextInput
