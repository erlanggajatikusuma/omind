import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Buttons = ({title, onPress, styles}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
