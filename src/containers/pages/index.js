import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Input from '../../components/atoms/Input';
import Buttons from '../../components/atoms/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const DiscussPage = () => {
  const [state, setState] = useState({
    image: '',
    groupName: '',
    jenjang: '',
  });

  const takeImage = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 700,
        maxWidth: 700,
        quality: 1,
      },
      (response) => {
        console.log('response', response);
        if (response.didCancel || response.error) {
          console.log('gagal');
        } else {
          console.log('Photo: ', response);
          //   const source = {uri: response.uri};
          //   const base64Photo = `data:${response.type};base64, ${response.data}`;
        }
      },
    );
  };

  useEffect(() => {
    fetch('https://www.postman.com/collections/76c330db5471fe4afda4')
      .then((response) => response.json())
      .then((json) => console.log(json.item));
    return () => {
      null;
    };
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity onPress={takeImage}>
          <Icon name="camera" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <Input styles={styles.input} placeholder="Nama Group" />
      <Picker
        selectedValue={state.jenjang}
        style={{borderRadius: 10, backgroundColor: '#ddd'}}
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
    paddingHorizontal: 35,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ddd',
    color: 'black',
  },
  btn: {
    backgroundColor: '#4956fc',
    paddingVertical: 10,
    textAlign: 'center',
    color: '#eee',
    fontWeight: 'bold',
    borderRadius: 10,
  },
});
