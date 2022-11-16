import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value,setValue,placeholder,secureEntry}) => {
    return (
      <View style = {styles.container}>
        <TextInput 
        onChangeText={setValue}
        value= {value}
        style={styles.input}
        secureTextEntry = {secureEntry}
        placeholder={placeholder}/>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth:1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor :'#e8e8e8',
    marginVertical: 5,
    height: 40
  },
  input: {
    textAlign: 'left'
  },
});
export default CustomInput;
