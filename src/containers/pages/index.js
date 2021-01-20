import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Input from '../../components/atoms/Input';
import Buttons from '../../components/atoms/Button';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const DiscussPage = () => {
  const [state, setState] = useState({
    image: '',
    groupName: '',
    jenjang: '',
  });

  const takeImage = () => {
    launchImageLibrary(
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
          const base64Photo = `data:${response.type};base64,${response.base64}`;
          console.log(base64Photo);
          setState({
            ...state,
            image: base64Photo,
          });
        }
      },
    );
  };

  useEffect(() => {
    fetch('https://www.postman.com/collections/76c330db5471fe4afda4')
      .then((response) => response.json())
      .then((json) =>
        console.log(
          json.item[0].request.body.formdata.map((item) => {
            return item;
          }),
        ),
      );
    return () => {
      null;
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('hallo')}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Buat Group</Text>
      </View>

      <View style={{marginHorizontal: 35, flex: 1, justifyContent: 'center'}}>
        <View style={styles.imgWrapper}>
          <TouchableOpacity onPress={takeImage}>
            {state.image ? (
              <Image source={{uri: state.image}} style={{width: 100, height: 100, borderRadius: 10}}/>
            ) : (
              <Icon name="camera" size={25} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center', color: '#748787', fontWeight: 'bold'}}>
          Tambahkan Foto Group
        </Text>
        <Input styles={styles.input} placeholder="Nama Group"
          onChangeText={(text) => setState({...state, groupName: text})}
        />
        <View style={styles.picker}>
          <Picker
            selectedValue={state.jenjang}
            onValueChange={(itemValue, itemIndex) =>
              setState({jenjang: itemValue})
            }>
            <Picker.Item label="Jenjang" value="" />
            <Picker.Item label="SD" value="sd" />
            <Picker.Item label="SMP" value="smp" />
          </Picker>
        </View>
        <Buttons title="Buat Group" styles={styles.btn} onPress={() => alert(state.groupName)}/>
      </View>
    </View>
  );
};

export default DiscussPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4956fc',
    flexDirection: 'row',
    paddingVertical: 25,
    paddingLeft: 20,
  },
  headerText: {
    marginLeft: 15,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  imgWrapper: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#ddd',
    color: 'black',
    marginTop: 30,
    marginBottom: 15,
    paddingVertical: 15,
    paddingLeft: 15,
  },
  picker: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    paddingLeft: 8,
    marginBottom: 50,
    width: 150,
  },
  btn: {
    backgroundColor: '#4956fc',
    paddingVertical: 15,
    textAlign: 'center',
    color: '#eee',
    fontWeight: 'bold',
    borderRadius: 10,
  },
});
