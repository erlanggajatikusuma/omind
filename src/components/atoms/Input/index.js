import React from 'react';
import {TextInput} from 'react-native';

const Input = ({styles, placeholder, onChangeText}) => {
  return (
    <TextInput
      style={styles}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
