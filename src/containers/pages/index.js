import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Input from '../../components/atoms/Input';
import Buttons from '../../components/atoms/Button';

const DiscussPage = () => {
  const [state, setState] = useState({
    jenjang: '',
  });

  return (
    <View style={styles.container}>
      <Input styles={styles.input} placeholder="Nama Groups" />
      <Picker
        selectedValue={state.jenjang}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          setState({jenjang: itemValue})
        }>
        <Picker.Item label="Jenjang" value="" />
        <Picker.Item label="SD" value="sd" />
        <Picker.Item label="SMP" value="smp" />
      </Picker>
      <Buttons
        title="Buat Group"
        styles={styles.btn}
        onPress={() => alert('ahlloe')}
      />
    </View>
  );
};

export default DiscussPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});
